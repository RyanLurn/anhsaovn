import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
  server: {
    NEON_POOLED_CONNECTION_STRING: z.url(),
    NEON_DIRECT_CONNECTION_STRING: z.url(),
  },
  experimental__runtimeEnv: process.env,
});
