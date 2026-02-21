// @ts-check

import { globalIgnores, defineConfig } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import next from "@next/eslint-plugin-next";
import ts from "typescript-eslint";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  globalIgnores([
    "**/migrations/",
    ".next/",
    "next-env.d.ts",
    "out/",
    "build/",
  ]),
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    rules: {
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ["eslint.config.mjs", "postcss.config.mjs"],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  perfectionist.configs["recommended-line-length"],
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  next.configs.recommended,
  next.configs["core-web-vitals"],
  prettier,
]);
