import { z } from 'zod';

const envSchema = z.object({
    // Database
    DATABASE_URL: z.string().url().optional(),

    // Authentication
    NEXTAUTH_SECRET: z.string().min(1).optional(),
    NEXTAUTH_URL: z.string().url().optional(),

    // External APIs
    UPLOADTHING_SECRET: z.string().optional(),
    UPLOADTHING_APP_ID: z.string().optional(),

    // Analytics
    NEXT_PUBLIC_VERCEL_ANALYTICS_ID: z.string().optional(),

    // Environment
    NODE_ENV: z
        .enum(['development', 'production', 'test'])
        .default('development'),
    VERCEL_ENV: z.enum(['development', 'preview', 'production']).optional(),
});

function validateEnv() {
    const parsed = envSchema.safeParse(process.env);

    if (!parsed.success) {
        // eslint-disable-next-line no-console
        console.error('❌ Invalid environment variables:');
        // eslint-disable-next-line no-console
        console.error(parsed.error.flatten().fieldErrors);
        throw new Error('Invalid environment variables');
    }

    return parsed.data;
}

export const env = validateEnv();
