/** Application Structure || Define Exports
 ** =================================================================================== */
/** @type {import("eslint").Linter.Config} ============================================ */
module.exports = {
  extends: [
    require.resolve("@vercel/style-guide/eslint/next"),
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
}
