import React from 'react';
import type { SVGProps } from 'react';

interface IconSvgProps extends SVGProps<SVGSVGElement> {
  size?: number;
  width?: number;
  height?: number;
}

export function BrandIcon({
  size = 20,
  width,
  height,
  ...props
}: IconSvgProps) {
  return (
    <svg
      height={size || height}
      viewBox='0 0 20 20'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g fill='none'>
        <path
          d='M12.859 2.567a1 1 0 0 1 .574 1.292l-5 13a1 1 0 1 1-1.866-.718l5-13a1 1 0 0 1 1.292-.574'
          fill='url(#SVG1hzDytNa)'
        />
        <path
          d='M6.15 5.74a1 1 0 0 1 .11 1.41L3.816 10l2.442 2.85a1 1 0 0 1-1.518 1.3l-3-3.5a1 1 0 0 1 0-1.3l3-3.5a1 1 0 0 1 1.41-.11'
          fill='url(#SVG1hzDytNa)'
        />
        <path
          d='M13.74 7.15a1 1 0 0 1 1.52-1.3l3 3.5a1 1 0 0 1 0 1.3l-3 3.5a1 1 0 0 1-1.52-1.3L16.184 10z'
          fill='url(#SVG1hzDytNa)'
        />
        <defs>
          <linearGradient
            gradientUnits='userSpaceOnUse'
            id='SVG1hzDytNa'
            x1={2}
            x2={19}
            y1={1.5}
            y2={18}
          >
            <stop stopColor='#c76efb' />
            <stop offset={1} stopColor='#8b52f4' />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
}
