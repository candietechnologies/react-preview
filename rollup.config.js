import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
// import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      resolve(),
      //   commonjs(),
      external(),
      //   postcss(),
      terser(),
      babel({ exclude: "node_modules/**", presets: ["@babel/preset-react"] }),
    ],
  },
];
