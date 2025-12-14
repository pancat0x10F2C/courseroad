import React from 'react';
import type { SVGProps } from 'react';

export function LeftArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={24}
      viewBox='0 0 24 24'
      width={24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m15 5l-6 7l6 7'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
}
