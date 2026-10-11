# Project Guidelines & Rules

## 1. Local Development & Testing
- The user will run `npm run dev` on their local machine to check the site.
- Do not run `npm run dev` by default; only run it if specifically requested or if temporary verification is required.
- Production build and type validation can be verified using `npm run lint` and `npm run build`.

## 2. Bilingual Content Synchronization (English & Croatian)
- Whenever changes are made to English text or copy, **always automatically make the corresponding updates in Croatian by default**.
- Maintain synchronization across `src/data/translations.ts` and any affected components or pages.
- Ensure stylistic tone, terminology, and formatting remain consistent between both language versions.

## 3. Deployment & Git Push Policy ("SHIP IT")
- **Never push to GitHub or deploy automatically.**
- The user always reviews changes locally first.
- Only commit and push/deploy to GitHub when the user explicitly instructs to do so (e.g., by saying **"SHIP IT"** or explicitly asking to deploy).
- You may remind or ask the user if they'd like to "SHIP IT", but do not push without their explicit cue.

## 4. Code Backup Policy
- **Always take a backup of any code file you touch/modify** before applying changes, tagged with the date and timestamp (e.g. `filename.backup_YYYYMMDD_HHmmss.ext` or in a dedicated `backups/` folder), so the user can easily revert if needed.
