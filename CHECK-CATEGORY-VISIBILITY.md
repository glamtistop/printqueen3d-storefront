# Category Not Showing - Visibility Check

## Current Issue
The Medusa API is returning 0 categories even though:
- Categories exist in Admin
- Categories are set to Public
- Products are assigned to categories
- Products are assigned to sales channels

## Most Likely Cause: Internal/Active Settings

### Check Category Settings in Medusa Admin

1. **Go to Products → Categories**
2. **Click on each category**
3. **Look for these settings:**
   - ⚠️ **"Internal" checkbox** - Make sure this is UNCHECKED (or toggle to make categories public/external)
   - ⚠️ **"Active" toggle** - Make sure this is ON/enabled
   - ⚠️ **"Visibility" dropdown** - Should be set to "Public" or "Storefront" (not "Internal" or "Private")

### The Settings to Change:
- [ ] **is_internal**: Should be `false` or unchecked
- [ ] **is_active**: Should be `true` or enabled  
- [ ] **visibility**: Should be "Public"

## Why This Happens
Medusa has category-level visibility controls:
- **Internal categories**: Only visible in Admin, not in storefront API
- **Inactive categories**: Disabled categories don't appear
- **Private/Internal visibility**: Not exposed to store API

## Alternative Test
Try accessing a category directly:
```
https://printqueen3d.medusajs.app/store/product-categories?handle=nfc-payment-stands
```

If this returns the category, but the general endpoint doesn't, it confirms a visibility setting issue.

## Temporary Workaround
If categories still won't show, we can modify the storefront to:
1. Show products grouped by collection instead of category
2. Or show all products on shop page with filtering

Let me know if you find an "Internal" or "Active" setting and I'll help adjust!
