import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // TypeScript typed routes
    typedRoutes: true,

    // Experimental features
    experimental: {
        // Optimize package imports
        optimizePackageImports: [
            '@heroui/system',
            '@heroui/theme',
            '@heroui/react',
        ],
    },

    // Security headers
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    // Prevent XSS attacks
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    // Prevent clickjacking
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    // Prevent MIME type sniffing
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    // Referrer policy
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    // Content Security Policy
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
                            "style-src 'self' 'unsafe-inline'",
                            "img-src 'self' blob: data: https:",
                            "font-src 'self'",
                            "object-src 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                            "frame-ancestors 'none'",
                            'upgrade-insecure-requests',
                        ].join('; '),
                    },
                ],
            },
        ];
    },

    // Image optimization
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: [],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Compiler options
    compiler: {
        // Remove console logs in production
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Bundle analyzer (development only)
    ...(process.env.ANALYZE === 'true' && {
        webpack: (config: any) => {
            config.plugins.push(
                new (require('@next/bundle-analyzer')({
                    enabled: true,
                    openAnalyzer: true,
                }))(),
            );
            return config;
        },
    }),
};

export default nextConfig;
