'use client';

import React from 'react';

import { Chip, Divider } from '@heroui/react';

import { BrandIcon, ThemeSwitch } from '@/components';

export function Footer() {
  return (
    <footer className='flex w-full flex-col'>
      <div className='mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex flex-col items-center justify-center gap-2 md:order-2 md:items-end'>
          <ThemeSwitch />
        </div>
        <div className='mt-4 md:order-1 md:mt-0'>
          <div className='flex items-center justify-center gap-3 md:justify-start'>
            <div className='flex items-center'>
              <BrandIcon size={34} />
              <span className='text-small font-medium'>LMS</span>
            </div>
            <Divider className='h-4' orientation='vertical' />
            <Chip
              className='border-none px-0 text-default-500'
              color='success'
              variant='dot'
            >
              All systems operational
            </Chip>
          </div>
          <p className='text-center text-tiny text-default-400 md:text-start'>
            &copy; {new Date().getFullYear()} LMS Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
