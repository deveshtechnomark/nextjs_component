const babel = require("rollup-plugin-babel");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");

module.exports = {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "auto",
      sourcemap: true,
    },
    {
      file: "dist/index.es.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
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
