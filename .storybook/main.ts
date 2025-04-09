import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  addons: ["@storybook/addon-essentials", "@storybook/addon-onboarding", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
};
export default config;
