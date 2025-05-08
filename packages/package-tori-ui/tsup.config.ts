import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    ".": "tori-ui/index.ts",
  },
  outDir: "build",
  format: ["cjs", "esm"],
  external: ["react"],
  dts: true,
})
