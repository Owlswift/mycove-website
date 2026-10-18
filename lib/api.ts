// Defaults to the real production API so a deployed build always talks to
// it without needing env config. For local dev against a local backend:
// NEXT_PUBLIC_API_BASE_URL=http://localhost:4010/api npm run dev
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://api.mycove.ng/api";

// Behind nginx, `request.url` in a route handler resolves to the
// container's own address (e.g. http://<container-id>:3003), not the
// public domain — nginx forwards the Host header but Next's standalone
// server doesn't use it to build request.url. Redirect targets must be
// built from this instead of `new URL(path, request.url)`.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mycove.ng";
