# Deployment Guide

This portfolio can be deployed to various hosting platforms. Here are the recommended options:

## 🚀 Vercel (Recommended)

Vercel provides the best experience for Astro projects with zero configuration.

### Steps:
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Astro and configure everything
5. Deploy!

### Custom Domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your DNS settings as instructed

## Netlify

### Steps:
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

## Cloudflare Pages

### Steps:
1. Push your code to GitHub
2. Visit [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create a new project
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Framework preset: Astro
6. Deploy!

## GitHub Pages

### Steps:
1. Install the Astro GitHub Pages adapter:
   ```bash
   npm install @astrojs/github-pages
   ```

2. Update `astro.config.mjs`:
   ```js
   import { defineConfig } from 'astro/config';
   import githubPages from '@astrojs/github-pages';

   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/your-repo-name',
     integrations: [githubPages()],
   });
   ```

3. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

4. Enable GitHub Pages in repository settings
5. Push to main branch

## Environment Variables

If you need environment variables in production:

1. Create `.env` file locally (already in .gitignore)
2. Add variables to your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **Cloudflare**: Settings → Environment Variables

## Performance Tips

1. **Enable Caching**: Most platforms handle this automatically
2. **Use CDN**: All recommended platforms use global CDNs
3. **Monitor**: Use Vercel Analytics, Netlify Analytics, or Google Analytics
4. **Optimize Images**: Consider using Astro's built-in image optimization

## Custom Domain

After deploying, you can add a custom domain:

1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. Add domain in your hosting platform
3. Update DNS records:
   - For Vercel: Add A record to `76.76.21.21`
   - For Netlify: Add CNAME to `yoursitename.netlify.app`
   - For Cloudflare: Follow their DNS instructions

## SSL/HTTPS

All recommended platforms provide free SSL certificates automatically via Let's Encrypt.

## Build Optimization

Before deploying, ensure optimal build:

```bash
# Build production version
npm run build

# Preview production build locally
npm run preview

# Check bundle size
npm run build -- --mode production
```

## Monitoring

Consider adding:
- **Google Analytics** for visitor tracking
- **Sentry** for error tracking
- **Vercel Analytics** for performance monitoring

## Troubleshooting

### Build fails on platform
- Check Node.js version (must be 18+)
- Verify all dependencies are in `package.json`
- Run `npm install` and `npm run build` locally first

### Missing styles
- Clear build cache on hosting platform
- Verify `global.css` is imported in Layout.astro

### React components not interactive
- Check that `client:only="react"` directive is present
- Verify React is in dependencies, not devDependencies

## Post-Deployment Checklist

- [ ] Test all interactive features
- [ ] Verify terminal commands work
- [ ] Try easter eggs (Konami Code, terminal commands)
- [ ] Test on mobile devices
- [ ] Check page load speed
- [ ] Verify SEO meta tags
- [ ] Test draggable windows
- [ ] Confirm boot sequence plays

---

Need help? Check [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/)
