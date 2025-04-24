'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container-page flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong!</h1>
      
      <p className="text-lg text-gray-600 mb-8 max-w-lg">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      
      {error.digest && (
        <p className="text-sm text-gray-500 mb-6">
          Error ID: {error.digest}
        </p>
      )}
      
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="btn btn-primary"
        >
          Try again
        </button>
        
        <Link href="/" className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}