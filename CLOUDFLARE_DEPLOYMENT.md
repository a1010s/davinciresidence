# 🚀 Cloudflare Pages Deployment Guide

This guide will help you deploy the Leonardo da Vinci Residence website to Cloudflare Pages for optimal performance and global distribution.

## 📋 Prerequisites

- A Cloudflare account (free tier available)
- Your website files ready for deployment
- Git repository (optional but recommended)

## 🎯 Deployment Methods

### Method 1: Direct Upload (Quickest)

1. **Login to Cloudflare**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign in to your account

2. **Access Pages**
   - Click on "Pages" in the left sidebar
   - Click "Create a project"

3. **Upload Files**
   - Choose "Upload assets"
   - Drag and drop your entire project folder or select all files
   - Click "Deploy site"

4. **Configure Settings**
   - **Project name**: `davinci-residence` (or your preferred name)
   - **Production branch**: `main` (if using Git)
   - **Build command**: Leave empty (static site)
   - **Build output directory**: `/` (root directory)

### Method 2: Git Integration (Recommended)

1. **Connect Repository**
   - In Cloudflare Pages, click "Connect to Git"
   - Choose your Git provider (GitHub, GitLab, etc.)
   - Select your repository

2. **Build Settings**
   - **Framework preset**: None (Static HTML)
   - **Build command**: Leave empty
   - **Build output directory**: `/`
   - **Root directory**: `/` (if files are in root)

3. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically deploy on every push to your main branch

## ⚙️ Configuration

### Custom Domain (Optional)

1. **Add Domain**
   - Go to your Pages project
   - Click "Custom domains"
   - Add your domain (e.g., `davinciresidence.com`)

2. **DNS Setup**
   - Cloudflare will provide DNS records to add
   - Follow the instructions to update your domain's DNS

### Environment Variables (If Needed)

If you need to customize the site for different environments:

1. Go to your Pages project
2. Click "Settings" → "Environment variables"
3. Add variables like:
   - `CONTACT_EMAIL`: `info@davinciresidence.com`
   - `AIRBNB_LINK`: `https://www.airbnb.com/rooms/YOUR-LINK`

## 🎨 Customization for Production

Before deploying, make sure to update these files:

### 1. Update Contact Information
Edit `index.html` and replace:
- Phone number placeholder: `+39 XXX XXX XXXX`
- Email: `info@davinciresidence.com`
- Airbnb booking link: `https://www.airbnb.com/rooms/YOUR-LINK`

### 2. Replace Images
Replace the images in the `img/` folder:
- `beach.jpg` - Hero background image
- `livingroom.jpg` - Interior photo
- `terrace.png` - Terrace view photo

### 3. SEO Optimization
The site is already optimized with:
- Meta tags for SEO
- Open Graph tags for social sharing
- Structured data ready
- Fast loading optimized

## 🚀 Performance Features

Cloudflare Pages automatically provides:

- **Global CDN**: Fast loading worldwide
- **Automatic HTTPS**: Secure connections
- **Image Optimization**: Automatic image compression
- **Minification**: CSS and JS optimization
- **Caching**: Intelligent caching for speed
- **Analytics**: Built-in performance monitoring

## 📊 Monitoring & Analytics

1. **Cloudflare Analytics**
   - Built-in analytics in your Pages dashboard
   - Real-time visitor statistics
   - Performance metrics

2. **Google Analytics** (Optional)
   - Add your GA tracking code to `index.html`
   - Insert before closing `</head>` tag

## 🔧 Advanced Configuration

### Custom Headers
Add security headers in `_headers` file:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

### Redirects
Create `_redirects` file for URL redirects:
```
/old-page /new-page 301
```

### Custom 404 Page
Create `404.html` for custom error pages.

## 🎯 Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact forms work
- [ ] Check mobile responsiveness
- [ ] Test image loading
- [ ] Verify booking links
- [ ] Check page load speed
- [ ] Test on different browsers
- [ ] Verify SEO meta tags

## 🆘 Troubleshooting

### Common Issues

1. **CSS Not Loading**
   - Check file paths are correct
   - Ensure CSS file is in the root directory
   - Verify no syntax errors in CSS

2. **Images Not Displaying**
   - Check image file paths
   - Ensure images are in the `img/` folder
   - Verify image file names match exactly

3. **JavaScript Errors**
   - Check browser console for errors
   - Verify all external CDN links are accessible
   - Test with JavaScript disabled

### Support

- **Cloudflare Support**: [support.cloudflare.com](https://support.cloudflare.com)
- **Pages Documentation**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)

## 🎉 Success!

Your Leonardo da Vinci Residence website is now live on Cloudflare Pages with:
- ⚡ Lightning-fast loading
- 🌍 Global distribution
- 🔒 Automatic HTTPS
- 📱 Mobile optimization
- 🎨 Modern design
- 🚀 Performance optimization

Your vacation rental website is ready to attract guests from around the world!
