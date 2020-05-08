module.exports = {
  root: true,
  env: {
    browser: true,
    // node: true,
    node: {
      child_process: 'empty'
      },
  },
  parserOptions: {
    // parser: 'babel-eslint'
  },
  extends: [
    // '@nuxtjs',
    // 'prettier',
    // 'prettier/vue',
    // 'plugin:prettier/recommended',
    // 'plugin:nuxt/recommended'
  ],
  options:{
    fix: true
  },
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    // 'nuxt/no-cjs-in-config': 'off'
  }
}
