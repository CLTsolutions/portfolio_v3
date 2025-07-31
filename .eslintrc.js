module.exports = {
  extends: ['next/core-web-vitals', 'airbnb-base', 'prettier'],
  plugins: ['simple-import-sort'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './jsconfig.json',
      },
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
};
