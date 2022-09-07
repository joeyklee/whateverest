/**
 * node-resolve locates a module in the project’s node_modules directory, and
 * plugin-commonjs converts CommonJS to ES6 modules.
 */

// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

function config({ plugins = [], output = {} }) {
  return {
    input: "./index.ts",
    plugins: [typescript({ target: "es6" }), resolve(), commonjs(), ...plugins],
    output: {
      ...output,
    },
  };
}

export default [
  config({
    output: {
      format: "umd",
      name: "whateverest",
      file: "dist/whateverest.js",
    },
  }),
  config({
    plugins: [terser()],
    output: {
      format: "umd",
      name: "whateverest",
      file: "dist/whateverest.min.js",
    },
  }),
  config({
    plugins: [terser()],
    output: { format: "es", file: "dist/whateverest.esm.js" },
  }),
];
