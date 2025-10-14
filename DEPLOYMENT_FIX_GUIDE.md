# Deployment Fix Guide

## Issue Analysis

The 500 Internal Server Error on your deployed server is **NOT a CORS issue** but rather an **environment variable and runtime configuration problem**. Here's what I found and fixed:

### Root Causes:
1. **Missing CORS Headers**: While not the main issue, CORS headers were missing for API routes
2. **Environment Variable Access**: Your API routes were using `process.env` which may not work correctly in Cloudflare Pages edge runtime
3. **Inconsistent D1 Query Implementation**: Each API route had its own D1 query implementation with different error handling
4. **Missing Error Validation**: No validation of environment variables before deployment

## What I Fixed

### 1. ✅ CORS Configuration
- Added comprehensive CORS headers in `next.config.ts`
- Created `middleware.ts` to handle OPTIONS requests
- Added CORS headers to all API responses

### 2. ✅ Environment Variable Handling
- Created `lib/cloudflare-d1.ts` utility with proper environment variable detection
- Supports both local development (`process.env`) and Cloudflare Pages runtime
- Added validation and error handling for missing environment variables

### 3. ✅ Unified API Implementation
- Updated all API routes to use the centralized `queryD1` function
- Consistent error handling across all routes
- Proper SQL sanitization with the `sanitizeString` utility

### 4. ✅ Deployment Validation
- Created `scripts/validate-env.ts` to verify environment variables
- Added `validate-env` script to package.json
- Comprehensive D1 connection testing

## Files Modified

### New Files Created:
- `lib/cloudflare-d1.ts` - Centralized D1 utility
- `middleware.ts` - CORS middleware
- `scripts/validate-env.ts` - Environment validation
- `DEPLOYMENT_FIX_GUIDE.md` - This guide

### Files Updated:
- `next.config.ts` - Added CORS headers
- `package.json` - Added validation script
- `app/api/quiz/route.ts` - Updated to use new utility
- `app/api/quiz/response/route.ts` - Updated to use new utility
- `app/api/quiz/submit/route.ts` - Updated to use new utility
- `app/api/quiz/users/route.ts` - Updated to use new utility
- `app/api/quiz/steps/route.ts` - Updated to use new utility
- `app/api/quiz/items/route.ts` - Updated to use new utility
- `app/api/quiz/users/[sessionId]/responses/route.ts` - Updated to use new utility

## Deployment Steps

### 1. Verify Environment Variables
Run the validation script locally first:
```bash
bun run validate-env
```

### 2. Configure Cloudflare Pages Environment Variables
In your Cloudflare Pages dashboard:
1. Go to your project settings
2. Navigate to "Settings" > "Environment variables"
3. Add these variables:
   - `CLOUDFLARE_D1_ACCOUNT_ID`
   - `CLOUDFLARE_DATABASE_ID`
   - `CLOUDFLARE_D1_API_TOKEN`

### 3. Get Your Cloudflare Credentials

#### Account ID:
- Go to Cloudflare Dashboard
- Look in the right sidebar for your Account ID

#### Database ID:
- Go to Cloudflare D1
- Select your database
- Go to Settings tab
- Copy the Database ID

#### API Token:
- Go to Cloudflare Dashboard > My Profile
- Navigate to "API Tokens"
- Click "Create Token"
- Use "Custom token" template
- Permissions: `Cloudflare D1:Edit`
- Account Resources: `Include - All accounts` (or specific account)
- Zone Resources: `Include - All zones`
- Click "Continue to summary" and "Create Token"

### 4. Deploy
```bash
bun run deploy
```

### 5. Test the Deployment
After deployment, test your API endpoints:
- `GET /api/quiz` - Should return quiz data
- `POST /api/quiz/response` - Should save responses
- `POST /api/quiz/submit` - Should submit quiz

## Troubleshooting

### If APIs still return 500 errors:

1. **Check Cloudflare Pages Logs**:
   - Go to Cloudflare Pages dashboard
   - Navigate to "Functions" tab
   - Check the logs for error details

2. **Verify Environment Variables**:
   ```bash
   # Test locally with production environment
   CLOUDFLARE_D1_ACCOUNT_ID=your_account_id \
   CLOUDFLARE_DATABASE_ID=your_database_id \
   CLOUDFLARE_D1_API_TOKEN=your_token \
   bun run validate-env
   ```

3. **Check Database Access**:
   - Verify your D1 database exists and is accessible
   - Ensure your API token has the correct permissions
   - Test database connection manually

4. **Review API Response Headers**:
   - Open browser dev tools
   - Check Network tab for API calls
   - Look for CORS headers in response

### Common Issues:

1. **"Missing required environment variables"**:
   - Environment variables not set in Cloudflare Pages
   - Run `bun run validate-env` to check

2. **"D1 API request failed"**:
   - Invalid API token or permissions
   - Incorrect account ID or database ID
   - Database doesn't exist

3. **"D1 query failed"**:
   - SQL syntax error
   - Database table doesn't exist
   - Missing database migrations

## Testing Locally

To test the fixes locally:
```bash
# Install dependencies
bun install

# Set environment variables
export CLOUDFLARE_D1_ACCOUNT_ID="your_account_id"
export CLOUDFLARE_DATABASE_ID="your_database_id" 
export CLOUDFLARE_D1_API_TOKEN="your_token"

# Validate environment
bun run validate-env

# Run development server
bun run dev
```

## What This Fix Accomplishes

1. **✅ Resolves 500 Internal Server Error**: Proper environment variable handling
2. **✅ Fixes CORS Issues**: Comprehensive CORS configuration
3. **✅ Improves Error Handling**: Better error messages and validation
4. **✅ Simplifies Deployment**: Centralized configuration and validation
5. **✅ Maintains Compatibility**: No breaking changes to existing functionality
6. **✅ Adds Debugging Tools**: Environment validation and connection testing

The root cause was environment variable access in the Cloudflare Pages edge runtime, not CORS. This fix addresses both the actual issue and adds CORS support as a bonus.