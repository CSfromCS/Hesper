# GitHub Pages Deployment Guide 🚀

This guide will help you deploy your Valentine's Day website to GitHub Pages for free!

## Prerequisites

- A GitHub account
- This repository forked or cloned to your account

## Step-by-Step Deployment

### Option 1: Deploy from Current Branch

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click on "Settings" (gear icon)

2. **Configure GitHub Pages**
   - Scroll down to find "Pages" in the left sidebar
   - Click on "Pages"

3. **Select Source**
   - Under "Source", select your branch:
     - For main development: `copilot/create-static-valentines-website`
     - After merging: `main` or `master`
   - Select `/ (root)` as the folder
   - Click "Save"

4. **Wait for Deployment**
   - GitHub will build and deploy your site (usually takes 1-3 minutes)
   - A green checkmark will appear when ready
   - Your site URL will be shown: `https://[username].github.io/Hesper/`

5. **Visit Your Site**
   - Click the provided URL or visit it in your browser
   - Share this URL with your special someone! 💕

### Option 2: Deploy After Merging to Main

1. **Merge the Pull Request**
   - Go to the Pull Requests tab
   - Merge the Valentine's Day website PR to main

2. **Configure GitHub Pages**
   - Follow steps 1-3 from Option 1, but select `main` branch

3. **Access Your Live Site**
   - Your site will be at: `https://[username].github.io/Hesper/`

## Customization Before Deployment

Want to personalize the message? Edit these files:

- **script.js**: Change the story text in the `scenes` object
- **styles.css**: Modify colors, fonts, or animations
- **index.html**: Update the page title

## Troubleshooting

### Site Not Loading?
- Wait a few more minutes (first deployment can take up to 10 minutes)
- Check that the branch and folder are correctly selected
- Ensure index.html is in the root directory

### Changes Not Showing?
- GitHub Pages caches content
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear your browser cache
- Wait 5-10 minutes for changes to propagate

### 404 Error?
- Verify the repository name in Settings → Pages
- Check that the URL matches: `https://[username].github.io/[repository-name]/`
- Ensure index.html exists in the root of the selected branch

## Custom Domain (Optional)

Want to use your own domain?

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In GitHub Pages settings, enter your custom domain
3. Configure DNS settings at your registrar:
   - Add a CNAME record pointing to `[username].github.io`
   - Or add A records pointing to GitHub's IP addresses
4. Enable "Enforce HTTPS" in GitHub Pages settings

## Testing Locally

Before deploying, test locally:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: http://localhost:8000

## Security Notes

✅ This site is secure:
- No server-side code
- No user data collection
- No external dependencies
- Passed CodeQL security scan
- XSS protections in place

## Need Help?

- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Review [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

---

💕 Good luck with your Valentine's Day proposal! 💕
