import base from "./rollup.config.base";
import minify from "rollup-plugin-babel-minify";

export default {
  ...base,
  output: {
    ...base.output,
    sourcemap: false
  },
  plugins: [
    ...base.plugins,
    minify({
      sourceMap: false,
      comments: false
    })
  ]
};
