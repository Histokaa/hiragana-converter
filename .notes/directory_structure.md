# Project Directory Structure

```
hiragana-katakana/
└── kana-converter/
    ├── eslint.config.mjs
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public/
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── README.md
    ├── src/
    │   ├── app/
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   └── page.tsx
    │   ├── components/
    │   │   ├── converter/
    │   │   ├── layout/
    │   │   ├── ui/
    │   │   └── index.ts
    │   ├── constants/
    │   │   └── index.ts
    │   ├── hooks/
    │   │   └── index.ts
    │   ├── lib/
    │   │   ├── conversion/
    │   │   └── utils/
    │   │       └── index.ts
    │   └── types/
    │       └── index.ts
    └── tsconfig.json
```

## Project Structure Overview

The project follows a well-organized Next.js 14 application structure with:

### Root Level

- **Configuration files**: TypeScript, ESLint, PostCSS, and Next.js configuration files
- **Package management**: `package.json` and `package-lock.json` for dependencies
- **Public assets**: SVG icons and static files in `public/` directory

### Source Code Organization (`src/`)

#### Application Core (`app/`)

- **Next.js App Router structure** with layout and page components
- **Global styling** and favicon

#### Components (`components/`)

- **`converter/`**: Conversion-specific UI components (InputField, ConverterGrid, etc.)
- **`layout/`**: Layout components (Header, Footer)
- **`ui/`**: Reusable UI components (Button, Card, LoadingSpinner)
- **`index.ts`**: Centralized component exports

#### Business Logic & Data

- **`lib/`**: Core functionality
  - **`conversion/`**: Kana conversion algorithms
  - **`utils/`**: General utility functions and helpers
- **`constants/`**: Application constants and Kana mapping data
- **`types/`**: TypeScript type definitions
- **`hooks/`**: Custom React hooks for state management

## Architecture Benefits

- **Separation of Concerns**: Clear distinction between UI, business logic, and data
- **Scalability**: Organized structure supports growth and feature additions
- **Maintainability**: Logical grouping makes code easy to find and modify
- **Type Safety**: Centralized TypeScript definitions ensure consistency
- **Reusability**: Modular component and utility structure promotes code reuse

## Notes

- Hidden files and directories (starting with `.`) are excluded from this structure except for configuration files
- `node_modules`, `dist`, `build` and other dependency/output folders are excluded
- All entries are sorted alphabetically within each directory level
