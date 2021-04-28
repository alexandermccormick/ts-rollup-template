import typescript from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";

const watchMode = process.argv.includes("-w");

const devOutput = [
  {
    file: "./dist/bundle.js",
    format: "esm",
    name: "devlib",
    sourcemap: true
  }
]

const prodOutput = [
  {
    file: "./dist/bundle.js",
    format: "iife",
    name: "lib",
    plugins: [terser()]
  },
  {
    file: "./dist/bundle.cjs.js",
    format: "cjs",
    plugins: [terser()]
  },
  {
    file: "./dist/bundle.esm.js",
    format: "esm",
    plugins: [terser()]
  }
];

export default {
  input: "./src/index.ts",
  output: watchMode ? devOutput : prodOutput,

  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    serve({
      contentBase: ["dist", "public"],
      host: "localhost",
      open: true,
      port: 5001
    }),
    livereload({
      watch: ["dist", "public"]
    })
  ],
}
