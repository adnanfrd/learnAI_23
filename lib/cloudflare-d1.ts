// Cloudflare D1 utility functions for both local and production environments

interface D1QueryResponse<T = unknown> {
  success: boolean;
  errors?: { message: string }[];
  result: { results: T[] }[];
}

interface CloudflareEnv {
  CLOUDFLARE_D1_ACCOUNT_ID: string;
  CLOUDFLARE_DATABASE_ID: string;
  CLOUDFLARE_D1_API_TOKEN: string;
  DB?: D1Database;
}

// Get environment variables with fallbacks
function getEnvVars(): CloudflareEnv {
  // In Cloudflare Pages/Workers, environment variables are available directly
  // In local development, they come from process.env
  const isCloudflareEnv = typeof globalThis !== 'undefined' && 'CloudflareEnv' in globalThis;
  
  if (isCloudflareEnv) {
    // Running in Cloudflare environment
    return {
      CLOUDFLARE_D1_ACCOUNT_ID: (globalThis as any).CLOUDFLARE_D1_ACCOUNT_ID,
      CLOUDFLARE_DATABASE_ID: (globalThis as any).CLOUDFLARE_DATABASE_ID,
      CLOUDFLARE_D1_API_TOKEN: (globalThis as any).CLOUDFLARE_D1_API_TOKEN,
      DB: (globalThis as any).DB
    };
  } else {
    // Running in Node.js environment (local development)
    return {
      CLOUDFLARE_D1_ACCOUNT_ID: process.env.CLOUDFLARE_D1_ACCOUNT_ID || '',
      CLOUDFLARE_DATABASE_ID: process.env.CLOUDFLARE_DATABASE_ID || '',
      CLOUDFLARE_D1_API_TOKEN: process.env.CLOUDFLARE_D1_API_TOKEN || '',
    };
  }
}

// Validate environment variables
function validateEnvVars(env: CloudflareEnv): void {
  const missing: string[] = [];
  
  if (!env.CLOUDFLARE_D1_ACCOUNT_ID) missing.push('CLOUDFLARE_D1_ACCOUNT_ID');
  if (!env.CLOUDFLARE_DATABASE_ID) missing.push('CLOUDFLARE_DATABASE_ID');
  if (!env.CLOUDFLARE_D1_API_TOKEN) missing.push('CLOUDFLARE_D1_API_TOKEN');
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

// Execute D1 query with proper error handling
export async function queryD1<T = unknown>(sql: string, params: unknown[] = []): Promise<T[]> {
  try {
    const env = getEnvVars();
    validateEnvVars(env);
    
    const API_URL = `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_D1_ACCOUNT_ID}/d1/database/${env.CLOUDFLARE_DATABASE_ID}/query`;
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.CLOUDFLARE_D1_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sql, params })
    });
    
    if (!response.ok) {
      throw new Error(`D1 API request failed: ${response.status} ${response.statusText}`);
    }
    
    const data: D1QueryResponse<T> = await response.json();
    
    if (!data.success) {
      console.error('D1 query failed:', data.errors);
      throw new Error(data.errors?.[0]?.message || 'D1 query failed');
    }
    
    return data.result[0]?.results || [];
  } catch (error) {
    console.error('D1 query error:', error);
    throw error;
  }
}

// Alternative function for direct D1 database access (if available)
export async function queryD1Direct<T = unknown>(sql: string, params: unknown[] = []): Promise<T[]> {
  try {
    const env = getEnvVars();
    
    // Try direct D1 database access first (available in Cloudflare Workers)
    if (env.DB) {
      const result = await env.DB.prepare(sql).bind(...params).all();
      return result.results as T[];
    }
    
    // Fallback to API
    return await queryD1<T>(sql, params);
  } catch (error) {
    console.error('D1 direct query error:', error);
    throw error;
  }
}

// Sanitize strings for SQL queries
export function sanitizeString(str: string): string {
  if (typeof str !== 'string') return '';
  return str.replace(/'/g, "''");
}