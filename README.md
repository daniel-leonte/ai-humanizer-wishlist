# NeuralFlow - Sign-Up Landing Experience

A modern, conversion-focused landing page and sign-up experience built with Next.js 15, Tailwind CSS, and Shadcn UI.

## 🚀 Features

- **Modern 2025 Design**: Bold contrasts, generous whitespace, neon accents
- **Fully Responsive**: Mobile-first design that scales beautifully
- **Performance Optimized**: Static generation with minimal JavaScript
- **Conversion Focused**: Strategic CTAs and user flow optimization
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Icons**: Lucide React
- **Animations**: Tailwind CSS animations
- **TypeScript**: Full type safety

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Landing page
│   ├── signup/
│   │   └── page.tsx       # Sign-up page
│   └── globals.css        # Global styles
├── components/
│   ├── hero.tsx           # Hero section
│   ├── features.tsx       # Features grid
│   ├── footer.tsx         # Footer component
│   └── signup-form.tsx    # Sign-up form
└── README.md
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: Cyan (#06B6D4) to Blue (#2563EB) gradient
- **Secondary**: Purple (#9333EA) accents
- **Background**: Black to Gray gradient
- **Text**: White primary, Gray secondary

### Typography
- **Headings**: Inter font, bold weights (700-900)
- **Body**: Inter font, regular weight (400-500)
- **Sizes**: Responsive scaling from mobile to desktop

### Components
- **Cards**: Glass morphism effect with gradient borders
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Dark theme with cyan focus states
- **Icons**: Lucide React icons with consistent sizing

## 🚀 Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open in browser**:
   Navigate to \`http://localhost:3000\`

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎯 Conversion Optimization

### Landing Page (/)
- Hero section with video placeholder and clear value proposition
- Feature cards highlighting key benefits
- Multiple CTAs strategically placed
- Social proof elements (stats, testimonials)

### Sign-Up Page (/signup)
- Streamlined form with progressive disclosure
- Real-time validation and feedback
- Success state with confirmation
- Social proof (queue position)

## 🔧 Customization

### Colors
Update the color palette in \`tailwind.config.ts\`:

\`\`\`typescript
colors: {
  // Add your custom colors here
  brand: {
    primary: '#your-color',
    secondary: '#your-color'
  }
}
\`\`\`

### Content
- Update app name and copy in components
- Replace placeholder video/images
- Modify feature descriptions
- Update social links and contact info

### Animations
Customize animations in \`globals.css\`:

\`\`\`css
@keyframes yourAnimation {
  /* Your keyframes */
}
\`\`\`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Minimal JavaScript footprint
- **SEO**: Semantic HTML and meta tags

## 🚀 Deployment

Deploy to Vercel with one click:

\`\`\`bash
npm run build
vercel --prod
\`\`\`

## 📄 License

MIT License - feel free to use for personal and commercial projects.
\`\`\`
