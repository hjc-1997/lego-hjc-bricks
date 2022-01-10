import { name } from "../package.json";
import vuePlugin from "rollup-plugin-vue";
import scssPlugin from "rollup-plugin-bundle-scss";
import typescript from "rollup-plugin-typescript2";
import css from "rollup-plugin-css-only";
import { nodeResolve } from "@rollup/plugin-node-resolve";
const overrides = {
    compilerOptions: {
        declaration: true, //默认给项目生成.d.ts的声明文件
    },
    exclude: ["src/main.ts", "src/App.vue", "node_modules"], //只针对这个单文件下的
}; //需要额外执行的tsconfig的配置项
const file = (type) => `dist/${name}.${type}.js`;
export { name, file };
export default {
    input: "src/index.ts", //入口文件
    output: {
        name, //第三方库名字
        file: file("esm"), //打包出来路径+名字
        format: "es", //打包什么模块，这里是es modules
    },
    plugins: [
        //使用插件
        nodeResolve(), //处理绝对路径的包，rollup是处理不了绝对路径，会一起打包进去
        typescript({ tsconfigOverride: overrides }), //处理ts
        vuePlugin(), //处理vue
        scssPlugin(), //处理scss
        css({ output: "bundle.css" }), //处理css
    ],
    external: ["vue", "lodash-es"], //忽略哪些不用打包进去的模块
};
