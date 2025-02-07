/**
 * node-resolve locates a module in the project’s node_modules directory, and
 * plugin-commonjs converts CommonJS to ES6 modules.
 */

// rollup.config.js
// @ts-check
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

function config({ plugins = [], output = {} }) {
  return {
    input: "./index.ts",
    plugins: [typescript({ target: "es6" }), resolve(), ...plugins],
    output: {
      ...output,
    },
  };
}

export default [
  config({
    output: {
      format: "cjs",
      name: "vector",
      file: "dist/whateverest-vector.cjs",
    },
  }),
  config({
    plugins: [terser()],
    output: {
      format: "umd",
      name: "vector",
      file: "dist/whateverest-vector.umd.js",
    },
  }),
  config({
    plugins: [terser()],
    output: { format: "es", file: "dist/whateverest-vector.mjs" },
  }),
];
