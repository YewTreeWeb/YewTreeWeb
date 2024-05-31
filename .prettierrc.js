/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: true,
  bracketSpacing: true,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-toml'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
    {
      files: ['*.md', '*.mdx'],
      options: {
        printWidth: 80,
      },
    },
  ],
}

export default config
