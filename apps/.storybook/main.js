/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/**/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // modify the Vite config here
    if (config["server"]) {
      config["server"]["port"] = 6006;
      config["server"]["host"] = "0.0.0.0";
    }
    return config;
  },
};
export default config;
