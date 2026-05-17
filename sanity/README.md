# Sanity setup notes

## 1) Configure environment variables

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_SANITY_STUDIO_URL`
- `SANITY_API_READ_TOKEN` (required for draft mode)
- `SANITY_DRAFT_MODE_SECRET` (required for draft mode)

## 2) Sign in and link project

Run:

```bash
npx sanity@latest login
npx sanity@latest init --project <your-project-id> --dataset production
```

Use your existing Sanity project if already created.

## 3) Open Studio

Run:

```bash
npm run dev
```

Then open:

- `http://localhost:3000/studio`

## 4) Draft mode endpoints

- Enable: `/api/draft-mode/enable?secret=<SANITY_DRAFT_MODE_SECRET>&slug=/health-guides`
- Disable: `/api/draft-mode/disable?slug=/health-guides`
