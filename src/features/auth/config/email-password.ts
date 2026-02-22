import type { BetterAuthOptions } from "better-auth";

import type { Email } from "@/features/emails/types";

import { sendEmail } from "@/features/emails/send";
import { serverEnv } from "@/lib/env/server";

export const emailPasswordOptions: BetterAuthOptions = {
  emailVerification: {
    // eslint-disable-next-line @typescript-eslint/require-await
    sendVerificationEmail: async ({ user, url }) => {
      const email: Email = {
        html: `<p>Click the link to verify your email: <a href="${url}">${url}</a></p>`,
        text: `Click the link to verify your email: ${url}`,
        from: serverEnv.SUPPORT_EMAIL_ADDRESS,
        subject: "Verify your email address",
        to: user.email,
      };

      // Avoid awaiting the email sending to prevent timing attacks
      void sendEmail({ email });
    },
  },
  emailAndPassword: {
    requireEmailVerification: true,
    enabled: true,
  },
};
