module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'eslint-config-prettier'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parserOptions: {
        project: ['./tsconfig.json'] // Specify it only for TypeScript files
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'hexagonal-architecture', 
  ],
  rules: {
    // "no-tabs": ["error", { "allowIndentationTabs": true }],
    "@typescript-eslint/no-non-null-assertion": "off"
  }
}
