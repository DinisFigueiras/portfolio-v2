# 🚀 Deployment Guide - Portfolio V2

## Current Status
✅ **DNS Configured** - Vercel nameservers active  
✅ **Project Ready** - Built and optimized  
✅ **Configuration Added** - vercel.json created  
⏳ **SSL Certificates** - Being provisioned  

## 🎯 Next Steps for Vercel Deployment

### **Option 1: Deploy via Vercel Dashboard (Recommended)**

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "New Project"**
3. **Import from GitHub:**
   - Connect your GitHub account if not already connected
   - Select `portfolio-v2` repository
   - Click "Import"

4. **Configure Project:**
   - **Framework Preset:** Vite (should auto-detect)
   - **Build Command:** `npm run build` (should auto-fill)
   - **Output Directory:** `dist` (should auto-fill)
   - **Install Command:** `npm install` (should auto-fill)

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)

### **Option 2: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: portfolio-v2
# - Directory: ./
# - Override settings? No
```

## 🔧 Configuration Files Added

### **vercel.json**
- ✅ Build configuration for Vite
- ✅ SPA routing support
- ✅ Asset caching headers
- ✅ Performance optimizations

### **Updated Files**
- ✅ `.gitignore` - Added Vercel folder
- ✅ `Portfolio.tsx` - Updated domain reference

## 🌐 Domain Configuration

### **DNS Status:**
- ✅ **Nameservers:** `ns1.vercel-dns.com`, `ns2.vercel-dns.com`
- ✅ **Domain:** `dinisfigueiras.pt`
- ✅ **WWW:** `www.dinisfigueiras.pt`

### **Expected URLs:**
- 🎯 **Primary:** `https://dinisfigueiras.pt`
- 🎯 **WWW:** `https://www.dinisfigueiras.pt`
- 🎯 **Vercel:** `https://portfolio-v2-[hash].vercel.app`

## 📋 Post-Deployment Checklist

### **Immediate (0-5 minutes):**
- [ ] Deployment completes successfully
- [ ] Site loads on Vercel URL
- [ ] All pages/sections work correctly
- [ ] Images load properly

### **DNS Propagation (5-30 minutes):**
- [ ] `dinisfigueiras.pt` resolves to Vercel
- [ ] `www.dinisfigueiras.pt` works
- [ ] SSL certificates are active (HTTPS)
- [ ] No security warnings

### **Final Verification:**
- [ ] All portfolio sections load
- [ ] Project modals work
- [ ] Contact form functions
- [ ] Mobile responsiveness
- [ ] Performance is good

## 🚨 Troubleshooting

### **Build Fails:**
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript errors

### **Images Don't Load:**
- Ensure images are in `public/images/` folder
- Check file paths in components
- Verify image file names match exactly

### **Domain Issues:**
- Wait for DNS propagation (up to 24 hours)
- Check nameserver configuration in amen.pt
- Verify domain is added in Vercel dashboard

### **SSL Issues:**
- Wait for certificate provisioning (5-30 minutes)
- Check domain verification in Vercel
- Try force refresh (Ctrl+F5)

## 📞 Support

If you encounter issues:
1. **Check Vercel dashboard** for error messages
2. **Review build logs** for specific errors
3. **Test locally** with `npm run build && npm run preview`
4. **Check DNS** with `nslookup dinisfigueiras.pt`

## 🎉 Success Indicators

When everything is working:
- ✅ Green checkmarks in Vercel dashboard
- ✅ HTTPS lock icon in browser
- ✅ Fast loading times
- ✅ All features functional
- ✅ Domain redirects properly
