import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import pkg from "./package.json";
import tailwindcss from "tailwindcss";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
    postcss({
      plugins: [tailwindcss("./tailwind.config.js")],
      extract: "./dist/styles.css",
      minimize: true,
    }),
  ],
};
