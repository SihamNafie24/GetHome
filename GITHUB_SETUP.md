# 🚀 GitHub Setup Guide

## Step-by-Step Instructions to Push GetHome to GitHub

### Prerequisites
- Git installed on your computer
- GitHub account created
- Project ready to upload

---

## 📝 Steps to Upload to GitHub

### 1. Initialize Git Repository (if not already done)
Open your terminal/command prompt in the project directory and run:

```bash
cd c:\Users\hp\rep1\GetHome
git init
```

### 2. Configure Git (First Time Only)
Set your name and email:

```bash
git config --global user.name "SihamNafie24"
git config --global user.email "sihamnafie2000@gmail.com"
```

### 3. Add All Files to Git
```bash
git add .
```

### 4. Create Your First Commit
```bash
git commit -m "Initial commit: GetHome E-Commerce Platform"
```

### 5. Create a New Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `GetHome` or `SHMSTORE`
   - **Description:** "Modern e-commerce platform for home products"
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
5. Click **"Create repository"**

### 6. Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/SihamNafie24/GetHome.git
git branch -M main
git push -u origin main
```

**Note:** Replace `SihamNafie24/GetHome` with your actual GitHub username and repository name.

---

## 🔐 Authentication Options

### Option A: Using Personal Access Token (Recommended)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "GetHome Project"
4. Select scopes: `repo` (full control)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. When pushing, use the token as your password

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI first, then:
gh auth login
git push -u origin main
```

---

## 📤 Future Updates

After the initial push, to update your repository:

```bash
# 1. Check status
git status

# 2. Add changes
git add .

# 3. Commit with message
git commit -m "Description of changes"

# 4. Push to GitHub
git push
```

---

## 🎯 Quick Commands Reference

```bash
# Check repository status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Pull latest changes
git pull origin main

# View remote repository
git remote -v
```

---

## 📋 Common Issues & Solutions

### Issue: "Permission denied"
**Solution:** Make sure you're using the correct authentication (token or SSH key)

### Issue: "Repository not found"
**Solution:** Check the remote URL: `git remote -v`

### Issue: "Failed to push"
**Solution:** Pull first: `git pull origin main --rebase`, then push

---

## 🌟 Repository Settings (After Upload)

1. **Add Topics:** Go to repository → About → Add topics
   - `react`, `vite`, `ecommerce`, `tailwindcss`, `framer-motion`

2. **Add Description:** 
   - "Modern e-commerce platform for home products built with React and Vite"

3. **Enable GitHub Pages** (Optional):
   - Settings → Pages → Source: GitHub Actions
   - Deploy using Vite build

---

## 📸 Add Screenshots (Optional)

Create a `screenshots` folder and add images:
```bash
mkdir screenshots
# Add your screenshots to this folder
git add screenshots/
git commit -m "Add project screenshots"
git push
```

Then update README.md with:
```markdown
## 📸 Screenshots

![Home Page](screenshots/home.png)
![Products Page](screenshots/products.png)
![About Page](screenshots/about.png)
```

---

## ✅ Checklist Before Pushing

- [ ] All sensitive data removed (API keys, passwords)
- [ ] `.gitignore` file configured properly
- [ ] README.md updated with project info
- [ ] Code tested and working
- [ ] Dependencies listed in package.json
- [ ] Contact information updated

---

## 🎉 Success!

Once pushed, your repository will be available at:
`https://github.com/SihamNafie24/GetHome`

Share it with:
- Potential employers
- Collaborators
- On your portfolio
- On LinkedIn

---

**Need Help?** Contact: sihamnafie2000@gmail.com
