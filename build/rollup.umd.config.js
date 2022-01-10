import basicConfig, { name, file } from "./rollup.config";
export default {
    ...basicConfig,
    output: {
        name: "LegoComponents", //umd全局变量名称
        file: file("umd"),
        format: "umd",
        globals: {
            //umd要设置全局变量的名称
            vue: "Vue",
            "lodash-es": "_",
        },
        exports: "named",
    },
};
