import { createEnv } from "@t3-oss/env-nextjs";
import { defineConfig } from "drizzle-kit";
import { z } from "zod";

const devEnv = createEnv({
  server: {
    NEON_DIRECT_CONNECTION_STRING: z.url(),
  },
  experimental__runtimeEnv: process.env,
});

export default defineConfig({
  dbCredentials: {
    url: devEnv.NEON_DIRECT_CONNECTION_STRING,
  },
  schema: "./src/db/schema/tables",
  out: "./src/db/migrations",
  dialect: "postgresql",
});
