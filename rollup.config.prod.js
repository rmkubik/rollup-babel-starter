import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import minify from "rollup-plugin-babel-minify";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourcemap: false
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    minify({
      sourceMap: false,
      comments: false
    })
  ]
};
