/**
 * Re-export the API client.
 * This file replaces the auto-generated Encore client (~backend/client).
 * All imports of "~backend/client" resolve here via vite.config.ts alias.
 */
export { Client, api } from "./lib/api-client";
export { default } from "./lib/api-client";
