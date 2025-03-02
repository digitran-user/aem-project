module.exports = {
    stories: ['../src/stories/*.stories.@(js|jsx|ts|tsx)'], // Adjust this path to where your stories are
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
      '@chromatic-com/storybook'
    ],
    framework: {
      name: '@storybook/react-vite', // Adjust based on your framework (e.g., React, Vue, etc.)
      options: {},
    },
    docs: {},
    webpackFinal: async (config) => {
        // Ensure PostCSS processes your CSS with Tailwind
        config.module.rules.push({
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                  ],
                },
              },
            },
          ],
          include: path.resolve(__dirname, '../'),
        });
        return config;
      },
  };