export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-html/astro',
  ],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'block-no-empty': true,
    'comment-no-empty': true,
    'selector-class-pattern': null,
    'color-no-invalid-hex': true,
    'plugin/selector-bem-pattern': {
      componentName: '[A-Z]+',
      componentSelectors: {
        initial: '^\\.{componentName}(?:-[a-z]+)?$',
        combined: '^\\.combined-{componentName}-[a-z]+$',
      },
      utilitySelectors: '^\\.util-[a-z]+$',
    },
  },
}
