import { FlatCompat } from "@eslint/eslintrc";
import perfectionist from "eslint-plugin-perfectionist";
import unicorn from "eslint-plugin-unicorn";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ...unicorn.configs.recommended,
    rules: {
      ...unicorn.configs.recommended.rules,
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      "unicorn/import-style": ["off"],
      "unicorn/prevent-abbreviations": ["off"],
    },
  },
  {
    ...perfectionist.configs["recommended-alphabetical"],
    rules: {
      ...perfectionist.configs["recommended-alphabetical"].rules,
      "perfectionist/sort-imports": ["error", { newlinesBetween: "never" }],
    },
  },
  ...compat.extends("prettier"),
];

export default eslintConfig;
