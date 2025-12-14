import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

import clsx from 'clsx';

import { Footer, Header } from '@/components';
import { siteConfig } from '@/lib/config';
import { fontSans } from '@/lib/fonts';

import { Theme } from './theme';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body
        className={clsx(
          'min-h-screen text-foreground bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Theme themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className='flex min-h-screen flex-col'>
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
