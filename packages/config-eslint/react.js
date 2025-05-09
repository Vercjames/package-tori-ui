/** Application Structure || Define Exports
 ** =================================================================================== */
/** @type {import("eslint").Linter.Config} ============================================ */
module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
  }
}
