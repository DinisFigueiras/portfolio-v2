# Images Folder Organization

This folder contains all the images used in the portfolio website. Images are organized by category for better maintainability.

## Folder Structure

### `/projects/`
Contains screenshots, demos, and images related to your portfolio projects.

**Required files for your portfolio:**
- `e-agenda.png` - for E-agenda project
- `car.png` - for Car Insurance Database Application
- `stock.png` - for Stock Replacement Application
- `tracker.png` - for Expense Tracker

- **Recommended formats**: PNG for screenshots with transparency, JPG for photos
- **Recommended size**: 1200x800px for project thumbnails, various sizes for gallery images

### `/icons/`
Contains custom icons, logos, and small graphics.

**Required files for your portfolio:**
- `favicon.ico` - main favicon file
- `favicon-32x32.png` - 32x32 favicon (optional)
- `favicon-16x16.png` - 16x16 favicon (optional)

- **Naming convention**: `icon-name.svg`, `logo-company.png`
- **Recommended formats**: SVG for scalable icons, PNG for complex logos, ICO for favicons
- **Recommended size**: Multiple sizes (16x16, 32x32, 64x64, 128x128)

### `/backgrounds/`
Contains background images and patterns.
- **Naming convention**: `hero-background.jpg`, `section-pattern.png`
- **Recommended formats**: JPG for photos, PNG for patterns with transparency
- **Recommended size**: 1920x1080px or higher for full-screen backgrounds

### `/profile/`
Contains personal photos, avatars, and professional headshots.
- **Naming convention**: `profile-photo.jpg`, `avatar-casual.png`
- **Recommended formats**: JPG for photos, PNG for images with transparency
- **Recommended size**: 400x400px for avatars, 800x800px for larger profile photos

## How to Use Images in Your React Components

### Method 1: Direct reference from public folder
```jsx
// For images in public/images/projects/
<img src="/images/projects/my-project-screenshot.jpg" alt="Project Screenshot" />

// For images in public/images/profile/
<img src="/images/profile/my-avatar.jpg" alt="Profile Photo" />
```

### Method 2: Using in CSS/Tailwind
```jsx
// Background image
<div 
  className="bg-cover bg-center"
  style={{ backgroundImage: "url('/images/backgrounds/hero-bg.jpg')" }}
>
```

### Method 3: Import for better optimization (if moved to src/assets)
```jsx
import projectImage from '@/assets/images/projects/my-project.jpg';
<img src={projectImage} alt="Project" />
```

## Image Optimization Tips

1. **Compress images** before adding them to reduce file size
2. **Use appropriate formats**: 
   - JPG for photographs
   - PNG for images with transparency
   - SVG for simple graphics and icons
   - WebP for modern browsers (better compression)
3. **Provide alt text** for accessibility
4. **Consider responsive images** for different screen sizes

## Current Usage in Portfolio

The portfolio currently uses placeholder images. Replace these with your actual images:

- **Hero background**: Currently using Unsplash image, can be replaced with `/images/backgrounds/`
- **Project thumbnails**: Currently using `/placeholder.svg`, replace with `/images/projects/`
- **Project galleries**: Currently using placeholder images in modals

## Adding Your Images

1. **Copy your images** to the appropriate subfolder
2. **Update the image paths** in your React components
3. **Test the images** by running the development server
4. **Optimize images** if the page loads slowly

Example of updating a project in `src/components/Portfolio.tsx`:
```jsx
// Before
image: '/placeholder.svg',

// After
image: '/images/projects/e-agenda-thumbnail.jpg',
```
