// .eslintrc.cjs
export default {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier', // ¡Importante para la integración con Prettier!
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Puedes añadir tus reglas personalizadas aquí
  },
};
