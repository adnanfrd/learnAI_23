#!/usr/bin/env bun

/**
 * Environment validation script for Cloudflare Pages deployment
 * Run this script to verify all required environment variables are set
 */

interface EnvConfig {
  CLOUDFLARE_D1_ACCOUNT_ID: string;
  CLOUDFLARE_DATABASE_ID: string;
  CLOUDFLARE_D1_API_TOKEN: string;
}

function validateEnvironment(): void {
  console.log('🔍 Validating environment variables...\n');
  
  const requiredVars: (keyof EnvConfig)[] = [
    'CLOUDFLARE_D1_ACCOUNT_ID',
    'CLOUDFLARE_DATABASE_ID', 
    'CLOUDFLARE_D1_API_TOKEN'
  ];
  
  const missing: string[] = [];
  const present: string[] = [];
  
  for (const varName of requiredVars) {
    const value = process.env[varName];
    if (!value || value.trim() === '') {
      missing.push(varName);
    } else {
      present.push(varName);
      // Mask sensitive values
      const displayValue = varName.includes('TOKEN') || varName.includes('KEY') 
        ? `${value.substring(0, 8)}...` 
        : value;
      console.log(`✅ ${varName}: ${displayValue}`);
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`✅ Present: ${present.length}`);
  console.log(`❌ Missing: ${missing.length}`);
  
  if (missing.length > 0) {
    console.log('\n❌ Missing environment variables:');
    missing.forEach(varName => {
      console.log(`   - ${varName}`);
    });
    
    console.log('\n🔧 To fix this:');
    console.log('1. For Cloudflare Pages deployment:');
    console.log('   - Go to your Cloudflare Pages project settings');
    console.log('   - Navigate to "Settings" > "Environment variables"');
    console.log('   - Add the missing variables');
    
    console.log('\n2. For local development:');
    console.log('   - Create a .env.local file in your project root');
    console.log('   - Add the missing variables');
    
    console.log('\n3. To get your Cloudflare D1 credentials:');
    console.log('   - Account ID: Cloudflare Dashboard > Right sidebar');
    console.log('   - Database ID: Cloudflare D1 > Your database > Settings');
    console.log('   - API Token: Cloudflare Dashboard > My Profile > API Tokens > Create Token');
    
    process.exit(1);
  }
  
  console.log('\n🎉 All environment variables are properly configured!');
  
  // Test D1 connection
  console.log('\n🔗 Testing D1 connection...');
  testD1Connection();
}

async function testD1Connection(): Promise<void> {
  try {
    const env = {
      CLOUDFLARE_D1_ACCOUNT_ID: process.env.CLOUDFLARE_D1_ACCOUNT_ID!,
      CLOUDFLARE_DATABASE_ID: process.env.CLOUDFLARE_DATABASE_ID!,
      CLOUDFLARE_D1_API_TOKEN: process.env.CLOUDFLARE_D1_API_TOKEN!
    };
    
    const API_URL = `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_D1_ACCOUNT_ID}/d1/database/${env.CLOUDFLARE_DATABASE_ID}/query`;
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.CLOUDFLARE_D1_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sql: 'SELECT 1 as test' })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json() as { success: boolean; errors?: { message: string }[] };
    
    if (!data.success) {
      throw new Error(data.errors?.[0]?.message || 'D1 query failed');
    }
    
    console.log('✅ D1 connection successful!');
  } catch (error) {
    console.log(`❌ D1 connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Verify your API token has D1 permissions');
    console.log('2. Check that the database ID is correct');
    console.log('3. Ensure your account ID is correct');
    console.log('4. Verify the database exists and is accessible');
  }
}

// Run validation
validateEnvironment();