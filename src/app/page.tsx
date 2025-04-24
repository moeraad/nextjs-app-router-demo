import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-page">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Next.js App Router Demo
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          A small demonstration of Next.js App Router features and best practices
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard" className="btn btn-primary">
            Dashboard
          </Link>
          <Link href="/about" className="btn btn-primary">
            About
          </Link>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

const features = [
  {
    title: 'App Router',
    description:
      'Next.js App Router provides a new way to organize your application, with nested layouts, loading states, and error handling.',
  },
  {
    title: 'Server Components',
    description:
      'React Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client.',
  },
  {
    title: 'TypeScript Support',
    description:
      'Built-in TypeScript support with strict type checking for improved developer experience and code quality.',
  },
];