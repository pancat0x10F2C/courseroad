'use client';

import Link from 'next/link';

import { Button } from '@heroui/react';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <h1 className='text-4xl font-bold'>Welcome to LMS Platform</h1>
      <p className='text-lg text-muted-foreground text-center max-w-md'>
        A modern learning management system built with Next.js and HeroUI
      </p>
      <div className='flex gap-4'>
        <Button as={Link} color='primary' href='/login' size='lg'>
          Login
        </Button>
        <Button as={Link} href='/signup' size='lg' variant='bordered'>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
