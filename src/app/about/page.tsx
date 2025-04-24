import { Metadata } from 'next';
import Link from 'next/link';

// Define metadata for this route
export const metadata: Metadata = {
  title: 'About | Next.js App Router Demo',
  description: 'Learn more about our Next.js App Router Demo',
};

export default function AboutPage() {
  return (
    <div className="container-page">
      <h1 className="text-3xl font-bold mb-6">About This Demo</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          This is a simple demonstration of the Next.js App Router, showcasing various features and best practices.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>App Router:</strong> Utilizes the latest Next.js App Router for improved routing and layouts
          </li>
          <li>
            <strong>TypeScript:</strong> Fully typed codebase for better developer experience
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Styled with utility-first CSS framework
          </li>
          <li>
            <strong>Server Components:</strong> Default server components for improved performance
          </li>
          <li>
            <strong>Metadata API:</strong> SEO-friendly metadata configuration
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Technologies Used</h2>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Next.js 15</li>
          <li>React 19</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      
      <div className="mt-8">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}