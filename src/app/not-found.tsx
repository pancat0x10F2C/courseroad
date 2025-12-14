'use client';

import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@heroui/react';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4'>
      <div className='mx-auto max-w-md text-center'>
        <h1 className='text-9xl font-bold text-primary'>404</h1>
        <h2 className='mt-4 text-2xl font-semibold'>Page Not Found</h2>
        <p className='mt-2 text-muted-foreground'>
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className='mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center'>
          <Button as={Link} color='primary' href='/'>
            Go Home
          </Button>
          <Button as={Link} href='/courses' variant='bordered'>
            Browse Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
