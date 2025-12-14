import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
    // Global ignores
    {
        ignores: [
            '.next/**',
            'node_modules/**',
            'dist/**',
            'build/**',
            'coverage/**',
            '.env*',
            '*.config.js',
            '*.config.mjs',
            '*.config.ts',
            'public/**',
            '.ui/**',
        ],
    },

    // Base JavaScript configuration
    js.configs.recommended,

    // TypeScript and React files
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2022,
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            prettier: prettierPlugin,
            'unused-imports': unusedImportsPlugin,
            '@next/next': nextPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
            next: {
                rootDir: true,
            },
        },
        rules: {
            // ESLint base rules
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-unused-vars': 'off',
            'prefer-const': 'error',
            'no-var': 'error',

            // TypeScript rules
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/prefer-as-const': 'error',
            '@typescript-eslint/no-non-null-assertion': 'warn',

            // React rules
            'react/react-in-jsx-scope': 'off', // Not needed in Next.js
            'react/prop-types': 'off', // Using TypeScript
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'error',
            'react/self-closing-comp': 'warn',
            'react/jsx-sort-props': [
                'warn',
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    noSortAlphabetically: false,
                    reservedFirst: true,
                },
            ],
            'react/jsx-pascal-case': 'error',
            'react/jsx-no-duplicate-props': 'error',

            // React Hooks rules
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // JSX A11y rules
            'jsx-a11y/alt-text': 'warn',
            'jsx-a11y/anchor-has-content': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',
            'jsx-a11y/click-events-have-key-events': 'warn',
            'jsx-a11y/interactive-supports-focus': 'warn',

            // Next.js rules
            '@next/next/no-html-link-for-pages': 'error',
            '@next/next/no-img-element': 'error',
            '@next/next/no-unwanted-polyfillio': 'error',
            '@next/next/no-page-custom-font': 'error',

            // Import rules
            'unused-imports/no-unused-imports': 'warn',
            'unused-imports/no-unused-vars': 'off',

            // Prettier integration
            'prettier/prettier': 'warn',

            // Code quality rules
            'object-shorthand': 'warn',
            'prefer-template': 'warn',
            'no-nested-ternary': 'warn',
            'no-unneeded-ternary': 'warn',

            // Spacing and formatting (handled by prettier, but good as backup)
            'padding-line-between-statements': [
                'warn',
                { blankLine: 'always', prev: '*', next: 'return' },
                {
                    blankLine: 'always',
                    prev: ['const', 'let', 'var'],
                    next: '*',
                },
                {
                    blankLine: 'any',
                    prev: ['const', 'let', 'var'],
                    next: ['const', 'let', 'var'],
                },
                { blankLine: 'always', prev: 'directive', next: '*' },
                { blankLine: 'always', prev: 'block-like', next: '*' },
            ],
        },
    },

    // TypeScript specific rules
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                },
            ],
        },
    },

    // Configuration files
    {
        files: ['**/*.config.{js,mjs,ts}'],
        rules: {
            'no-console': 'off',
        },
    },

    // Test files (if you add them later)
    {
        files: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
        rules: {
            'no-console': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
];
