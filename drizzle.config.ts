import "dotenv/config";

import { defineConfig } from "drizzle-kit";
console.log("Account ID:", process.env.CLOUDFLARE_D1_ACCOUNT_ID);
console.log("Database ID:", process.env.CLOUDFLARE_DATABASE_ID);
console.log("API Token:", process.env.CLOUDFLARE_D1_API_TOKEN);
export default defineConfig({
  dialect: "sqlite",
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_D1_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_API_TOKEN!,
  },
});
