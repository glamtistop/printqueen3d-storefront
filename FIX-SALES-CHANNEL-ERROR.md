# How to Fix "Publishable key needs to have a sales channel configured" Error

## The Issue
Your publishable API key needs to be associated with a sales channel in Medusa Cloud for the shop/products to work.

## Quick Fix (5 minutes)

### Step 1: Access Medusa Admin
Go to: **https://printqueen3d.medusajs.app/app**

### Step 2: Navigate to Settings
1. Log into your Medusa admin panel
2. Click on **Settings** (gear icon in the sidebar)
3. Click on **Publishable API Keys**

### Step 3: Configure Your Publishable Key
1. Find your publishable key (starts with `pk_eabc...`)
2. Click on it to edit
3. Look for **Sales Channels** section
4. Select **"Default Sales Channel"** (or create one if none exists)
5. Click **Save**

### Alternative: Create a New Sales Channel

If you don't have a sales channel:

1. Go to **Settings** → **Sales Channels**
2. Click **"Create Sales Channel"**
3. Name it: "Print Queen 3D Store"
4. Description: "Main storefront"
5. Save it
6. Go back to **Publishable API Keys**
7. Associate your key with this new sales channel

### Step 4: Verify It Works

After configuring:
1. Refresh your storefront at http://localhost:8000
2. Click **Shop** in the navigation
3. Products page should now load without errors!

## What This Does

A sales channel in Medusa:
- Determines which products are available on which storefronts
- Allows you to have multiple stores with different product catalogs
- Is required for publishable API keys to work

## Still Having Issues?

### Check Your Region Setup
Make sure you have:
1. At least one region configured (you already have "US")
2. That region has a currency (USD)
3. Products are assigned to that region

### Verify Products Exist
In Medusa Admin:
1. Go to **Products**
2. Make sure you have at least one product created
3. Verify products are:
   - Published (not draft)
   - Assigned to your US region
   - Have a price set

## After This Fix

Once the sales channel is configured, your storefront will be fully functional:
- ✅ Shop page will display products
- ✅ Product pages will work
- ✅ Cart and checkout will function
- ✅ Complete e-commerce experience

## Next Steps

1. Fix the sales channel (above)
2. Add your products in Medusa Admin
3. Test the shop page
4. Deploy to Vercel

---

**This is a one-time setup.** Once configured, you won't need to do this again!
