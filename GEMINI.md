# Project Guidelines & Rules

## 1. Local Development & Testing
- The user will run `npm run dev` on their local machine to check the site.
- Do not run `npm run dev` by default; only run it if specifically requested or if temporary verification is required.
- Production build and type validation can be verified using `npm run lint` and `npm run build`.

## 2. Bilingual Content Synchronization (English & Croatian)
- Whenever changes are made to English text or copy, **always automatically make the corresponding updates in Croatian by default**.
- Maintain synchronization across `src/data/translations.ts` and any affected components or pages.
- Ensure stylistic tone, terminology, and formatting remain consistent between both language versions.
