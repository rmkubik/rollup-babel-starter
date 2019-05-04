import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import minify from "rollup-plugin-babel-minify";

export default {
  input: "src/main.js",
  output: {
    name: "rollup-test",
    file: "dist/bundle.js",
    format: "umd",
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: ["node_modules/**"]
    })
  ]
};
