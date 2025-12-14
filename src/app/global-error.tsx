'use client';

import { Button } from '@heroui/react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // eslint-disable-next-line no-console
  console.error('Global error:', error);

  return (
    <html lang='en'>
      <body>
        <div className='flex min-h-screen flex-col items-center justify-center px-4'>
          <div className='mx-auto max-w-md text-center'>
            <h1 className='text-6xl font-bold text-red-500'>Error</h1>
            <h2 className='mt-4 text-2xl font-semibold'>
              Something went wrong!
            </h2>
            <p className='mt-2 text-muted-foreground'>
              An unexpected error occurred. Please try again.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <details className='mt-4 text-left'>
                <summary className='cursor-pointer font-medium'>
                  Error Details
                </summary>
                <pre className='mt-2 overflow-auto rounded bg-gray-100 p-2 text-xs dark:bg-gray-800'>
                  {error.stack}
                </pre>
              </details>
            )}
            <Button className='mt-6' color='primary' onPress={() => reset()}>
              Try Again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
