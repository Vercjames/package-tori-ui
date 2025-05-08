// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "tsup"

// Application Structure || Define Exports
// =======================================================================================
// =======================================================================================
export default defineConfig({
  entry: {
    ".": "tori-ui/index.ts",
  },
  outDir: "build",
  format: ["cjs", "esm"],
  external: ["react"],
  dts: true,
})
