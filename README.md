# Next.js App Router Demo

A small demonstration project showcasing Next.js App Router features following best practices.

## Features

- **Next.js App Router**: Modern file-based routing system
- **Server Components**: Default React Server Components for improved performance
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Responsive Layout**: Mobile-first design approach
- **SEO Optimization**: Built-in metadata API for better SEO
- **Error Handling**: Comprehensive error boundaries and fallbacks

## Project Structure

```
src/
├── app/                    # App Router directory
│   ├── about/              # About page route
│   ├── dashboard/          # Dashboard routes with nested pages
│   │   ├── analytics/      # Analytics page within dashboard
│   │   ├── settings/       # Settings page within dashboard
│   │   ├── layout.tsx      # Dashboard-specific layout
│   │   └── page.tsx        # Dashboard main page
│   ├── error.tsx           # Error handling component
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout with metadata
│   ├── loading.tsx         # Loading UI
│   ├── not-found.tsx       # 404 page
│   └── page.tsx            # Home page
├── components/             # Shared UI components
│   ├── Footer.tsx          # Footer component
│   └── Navbar.tsx          # Navigation component
```

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/yourusername/nextjs-app-router-demo.git
cd nextjs-app-router-demo
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Key Technologies

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Best Practices Demonstrated

- Server/Client Component Separation
- Metadata API for SEO
- Layout Pattern for UI Composition
- Error Boundaries and Fallbacks
- Loading States

## Learn More

To learn more about Next.js and the App Router, check out these resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT