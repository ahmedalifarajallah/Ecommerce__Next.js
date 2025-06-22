# Wix OAuth Setup Guide

This guide will help you set up Wix OAuth authentication for your Next.js e-commerce application.

## Prerequisites

1. A Wix account with a site
2. Wix Developer account
3. Next.js application (already set up)

## Step 1: Create a Wix App

1. Go to [Wix Developers](https://dev.wix.com/)
2. Sign in with your Wix account
3. Click "Create App"
4. Choose "Custom App"
5. Fill in the app details:
   - App Name: Your app name
   - App Description: Brief description
   - App Category: Choose appropriate category

## Step 2: Configure OAuth Settings

1. In your Wix app dashboard, go to "OAuth & Permissions"
2. Add the following redirect URLs:
   - `http://localhost:3000/api/auth/callback` (for development)
   - `https://yourdomain.com/api/auth/callback` (for production)
3. Note down your:
   - Client ID
   - Client Secret

## Step 3: Set Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Wix OAuth Configuration
NEXT_PUBLIC_WIX_CLIENT_ID=your_wix_client_id_here
NEXT_PUBLIC_WIX_CLIENT_SECRET=your_wix_client_secret_here
NEXT_PUBLIC_WIX_SITE_ID=your_wix_site_id_here
NEXT_PUBLIC_WIX_REDIRECT_URL=http://localhost:3000/api/auth/callback
```

Replace the placeholder values with your actual Wix app credentials.

## Step 4: Configure App Permissions

In your Wix app dashboard, go to "Permissions" and add the following scopes:

- `offline_access` - For refresh tokens
- `products.read` - To read product data
- `stores.read` - To read store data

## Step 5: Test the OAuth Flow

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/login`
3. Click "Sign in with Wix"
4. You should be redirected to Wix for authorization
5. After authorization, you'll be redirected back to your app

## Step 6: Production Deployment

For production deployment:

1. Update the redirect URL in your Wix app to your production domain
2. Update the environment variables with production values
3. Ensure your domain is properly configured in your hosting platform

## File Structure

The OAuth implementation includes:

- `/src/app/api/auth/login/route.ts` - Initiates OAuth flow
- `/src/app/api/auth/callback/route.ts` - Handles OAuth callback
- `/src/hooks/useAuth.tsx` - Authentication hook
- `/src/context/wixContext.tsx` - Wix client context
- `/src/app/login/page.tsx` - Login page

## Troubleshooting

### Common Issues

1. **"Invalid redirect URI" error**
   - Ensure the redirect URL in your Wix app matches exactly
   - Check for trailing slashes or protocol mismatches

2. **"Client ID not found" error**
   - Verify your environment variables are set correctly
   - Restart your development server after changing environment variables

3. **CORS errors**
   - Ensure your redirect URLs are properly configured
   - Check that your domain is allowed in Wix app settings

### Debug Mode

To enable debug logging, add this to your environment variables:

```env
DEBUG=wix:*
```

## Security Considerations

1. Never expose your client secret in client-side code
2. Use HTTPS in production
3. Implement proper token refresh logic
4. Store tokens securely (using httpOnly cookies)
5. Implement proper logout functionality

## Next Steps

After setting up OAuth, you can:

1. Implement user profile management
2. Add role-based access control
3. Integrate with Wix stores for product management
4. Add cart and checkout functionality
5. Implement user preferences and settings

## Support

For issues with the Wix SDK or OAuth implementation:

- [Wix Developers Documentation](https://dev.wix.com/)
- [Wix SDK Documentation](https://dev.wix.com/docs/sdk/)
- [Wix OAuth Documentation](https://dev.wix.com/docs/oauth/) 