import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ["../resources/assets/js/stories/**/*.mdx", "../resources/assets/js/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    'storybook-addon-remix-react-router',
    '@storybook/addon-links',
    "@storybook/addon-coverage",
    '@storybook/addon-storyshots'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: [{ from: '../resources/assets/js/stories/static', to: '/static' }],
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {

    config.module.rules[5].oneOf[3].include.push(path.resolve(__dirname, 'node_modules/@inertiajs/react/dist/index.js'));

    if (configType === 'DEVELOPMENT') {
      // Modify config for development
    }
    if (configType === 'PRODUCTION') {
      // Modify config for production
    }
    return config;
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      server: {
        origin: ''
      },
    });
  },
  build: {
    test: {
      disabledAddons: [
        '@storybook/addon-docs',
        '@storybook/addon-essentials/docs',
      ],
    },
  },
};
export default config;
