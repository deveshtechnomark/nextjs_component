const babel = require("rollup-plugin-babel");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");

module.exports = {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.ts",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/index.es.ts",
      format: "esm",
    },
  ],
  plugins: [
    typescript(),
    babel({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-typescript",
      ],
    }),
    postcss({
      extract: true,
    }),
  ],
  external: ["react"],
};
