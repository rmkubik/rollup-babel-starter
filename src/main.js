import foo from "./foo";

export default function(...test) {
  console.log(Object.entries(foo));
  console.log(test);
}
