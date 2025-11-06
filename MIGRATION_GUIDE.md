# Next.js 15 + TypeScript Migration Guide

## Current Status

This project has been partially migrated from Create React App to Next.js 15 with TypeScript. The foundation is in place, but full migration requires additional work.

## ✅ Completed

1. **TypeScript Setup**
   - `tsconfig.json` configured
   - Type definitions for assets created
   - Path aliases configured (`@/*`)

2. **Next.js App Router Structure**
   - Root layout with SEO metadata
   - Server component architecture (pages are server components)
   - Client component wrappers created
   - Proper routing structure

3. **Tailwind Configuration**
   - Custom container sizes matching original design
   - Custom colors and fonts
   - NextUI integration
   - Proper content paths

4. **Dependencies**
   - All necessary packages installed
   - TypeScript types added
   - Utility libraries (clsx, tailwind-merge)

5. **Architecture**
   - Server/client component separation strategy defined
   - Component wrapper pattern established
   - i18n configuration for Next.js

##⚠️ Remaining Work

### 1. Convert All Components to TypeScript

**Priority: HIGH**

Currently, components in `/src/Modules` and `/src/Pages` are still in JavaScript. They need to be converted to TypeScript:

```bash
src/Modules/
├── Header/               # ❌ Need to convert .jsx → .tsx
├── Footer/               # ❌ Need to convert .jsx → .tsx
├── Studio/               # ❌ Need to convert .jsx → .tsx
├── Services/             # ❌ Need to convert .jsx → .tsx
├── Cases/                # ❌ Need to convert .jsx → .tsx
└── ... (all other modules)
```

**Example conversion pattern:**

```typescript
// Before (JavaScript)
const Header = ({ modalState }) => {
  return <header>...</header>
}

// After (TypeScript)
'use client' // Only if uses hooks/interactivity

interface HeaderProps {
  modalState?: {
    onOpen: () => void
    onClose: () => void
  }
}

const Header = ({ modalState }: HeaderProps) => {
  return <header>...</header>
}
```

### 2. Convert CSS Modules to Tailwind

**Priority: HIGH**

Current approach uses CSS Modules (`.module.css`). Should be converted to Tailwind utility classes.

**Before:**
```css
/* Component.module.css */
.container {
  display: flex;
  padding: 20px;
  background: #000;
}
```

**After:**
```tsx
<div className="flex p-5 bg-black">
```

**Benefits:**
- No CSS files to maintain
- Better tree-shaking
- Consistent design system
- Smaller bundle size

**Container Usage:**
Replace `customContainer` class with Tailwind's container:

```tsx
// Before
<div className="customContainer">

// After
<div className="container mx-auto">
// Container automatically uses the sizes defined in tailwind.config.js:
// - Default: 720px
// - lg: 1140px
// - xl/2xl: 1720px
```

### 3. Properly Separate Server and Client Components

**Priority: MEDIUM**

Currently, all component wrappers use `'use client'`. This should be optimized:

**Server Components (NO 'use client'):**
- Static content components
- Layout components without interactivity
- Data fetching components

**Client Components ('use client' required):**
- Components with useState, useEffect, useCallback, etc.
- Components with event handlers (onClick, onChange, etc.)
- Components using browser APIs (window, document, localStorage)
- Third-party libraries requiring client-side

**Example:**
```tsx
// app/page.tsx - Server Component (NO 'use client')
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function HomePage() {
  return (
    <>
      <Header /> {/* Client component */}
      <Hero />   {/* Could be server if no interactivity */}
    </>
  )
}
```

### 4. Fix Navigation Components

**Priority: HIGH**

Update all navigation to use Next.js Link properly:

```tsx
// Before
import { Link as PageLink } from 'react-router-dom'
<PageLink to={WEBSITE_ROUTE}>

// After
import Link from 'next/link'
<Link href={WEBSITE_ROUTE}>
```

### 5. Optimize Images

**Priority: MEDIUM**

Replace `<img>` tags with Next.js Image component:

```tsx
import Image from 'next/image'

// Before
<img src={logo} alt="logo" />

// After
<Image
  src={logo}
  alt="logo"
  width={200}
  height={50}
  priority // for above-the-fold images
/>
```

### 6. Add Metadata to Each Page

**Priority: MEDIUM**

Each page should export its own metadata:

```tsx
// app/policy/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mark Digital Agency',
  description: 'Our privacy policy and data protection practices',
}

export default function PolicyPage() {
  return <main>...</main>
}
```

## 🏗️ Recommended Migration Steps

1. **Phase 1: Core Components** (2-3 days)
   - Convert Button, Header, Footer to TypeScript + Tailwind
   - Test thoroughly
   - Use as reference for other components

2. **Phase 2: Page Sections** (3-5 days)
   - Convert Studio, Services, Cases, etc.
   - One component at a time
   - Test after each conversion

3. **Phase 3: Forms** (2-3 days)
   - Convert form components
   - Ensure validation still works
   - Test all form submissions

4. **Phase 4: Polish** (1-2 days)
   - Add proper TypeScript types throughout
   - Optimize server/client component split
   - Add metadata to all pages
   - Performance testing

## 📚 Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [TypeScript in Next.js](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Server vs Client Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

## 🚀 Quick Start

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

## 📝 Notes

- Keep existing CSS Modules during transition for reference
- Test each component after conversion
- Maintain visual parity - use browser DevTools to compare
- Use TypeScript's `strict: false` initially, enable later
- Create reusable Tailwind utility classes for common patterns

## Example: Full Component Conversion

```tsx
// src/components/Hero/Hero.tsx
'use client'

import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import heroImage from '@/assets/images/hero.webp'

interface HeroProps {
  title?: string
  subtitle?: string
}

export function Hero({ title, subtitle }: HeroProps) {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {title || t('hero.title')}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {subtitle || t('hero.subtitle')}
          </p>
          <Button variant="standard" size="lg">
            {t('hero.cta')}
          </Button>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Image
            src={heroImage}
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
```

## 🎯 Best Practices

1. **TypeScript**
   - Use interfaces for props
   - Export types alongside components
   - Use proper return types for functions

2. **Tailwind**
   - Use utility classes, avoid custom CSS
   - Create reusable component variants
   - Use container classes from config

3. **Next.js**
   - Prefer server components when possible
   - Use 'use client' only when necessary
   - Leverage built-in Image and Link components

4. **Performance**
   - Lazy load components when appropriate
   - Optimize images
   - Minimize client-side JavaScript

## ⚡ Known Issues

1. Some pages currently fail to build due to incorrect imports
2. CSS modules still in use (migration in progress)
3. Not all components properly typed yet

These issues should be resolved during the migration phases outlined above.
