import { nextCookies } from "better-auth/next-js";
import { betterAuth } from "better-auth";

import { dbOptions } from "@/features/auth/config/db";
import { serverEnv } from "@/lib/env/server";

export const auth = betterAuth({
  advanced: {
    database: {
      generateId: false,
    },
  },
  secret: serverEnv.BETTER_AUTH_SECRET,
  baseURL: serverEnv.BETTER_AUTH_URL,
  ...dbOptions,
  plugins: [nextCookies()], // make sure that nextCookies is the last plugin in the array
});
