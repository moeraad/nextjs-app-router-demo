import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      
      <p className="text-lg text-gray-600 mb-8 max-w-lg">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
}