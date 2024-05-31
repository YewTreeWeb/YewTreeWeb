import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['*.js', '*.ts', '.tsx', '*.astro'],
		rules: {
			'astro/no-conflict-set-directives': 'error',
			'astro/no-unused-define-vars-in-style': 'error',
		},
		ignores: [
			'.vscode',
			'dist',
			'node_modules',
			'.husky',
			'.github',
			'.netlify',
			'.git',
			'commitlint.config.js',
		],
	},
]
// root: true,
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
//   extends: ['eslint:recommended', 'prettier', 'plugin:astro/recommended'],
//   overrides: [
//     {
//       files: ['*.ts', '*.tsx'],
//       parserOptions: {
//         project: ['./tsconfig.json'],
//         tsconfigRootDir: __dirname,
//       },
//       extends: [
//         'plugin:@typescript-eslint/recommended',
//         'plugin:@typescript-eslint/recommended-requiring-type-checking',
//         'prettier',
//       ],
//     },
//     {
//       // Define the configuration for `.astro` file.
//       files: ['*.astro'],
//       // Allows Astro components to be parsed.
//       parser: 'astro-eslint-parser',
//       // Parse the script in `.astro` as TypeScript by adding the following configuration.
//       // It's the setting you need when using TypeScript.
//       parserOptions: {
//         parser: '@typescript-eslint/parser',
//         extraFileExtensions: ['.astro'],
//       },
//       rules: {
//         'astro/no-conflict-set-directives': 'error',
//         'astro/no-unused-define-vars-in-style': 'error',
//         // override/add rules settings here, such as:
//         // "astro/no-set-html-directive": "error"
//       },
//     },
//   ],
//   ignores: ['.vscode', 'dist', 'node_modules', '.husky', '.github', '.netlify', '.git'],
