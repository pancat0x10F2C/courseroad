'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { HeroUIProvider as HeroThemeProvider } from '@heroui/react';
import {
  ThemeProvider as NextThemeProvider,
  type ThemeProviderProps,
} from 'next-themes';

export interface ThemeProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>['push']>[1]
    >;
  }
}

export function Theme({ children, themeProps }: ThemeProps) {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path as Parameters<typeof router.push>[0]);
  };

  return (
    <HeroThemeProvider navigate={navigate}>
      <NextThemeProvider {...themeProps}>{children}</NextThemeProvider>
    </HeroThemeProvider>
  );
}
