import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import minify from "rollup-plugin-babel-minify";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/main.js",
  output: {
    name: "rollup-test",
    file: "dist/bundle.js",
    format: "umd",
    sourcemap: false
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: ["node_modules/**"]
    }),
    minify({
      sourceMap: false,
      comments: false
    })
  ]
};
