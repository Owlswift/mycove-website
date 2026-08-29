// Defaults to the real production API so a deployed build always talks to
// it without needing env config. For local dev against a local backend:
// NEXT_PUBLIC_API_BASE_URL=http://localhost:4010/api npm run dev
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.mycove.ng/api";
