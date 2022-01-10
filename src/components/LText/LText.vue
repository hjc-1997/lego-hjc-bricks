<!--  -->
<template>
  <!-- 可以使用 is attribute 来创建常规的 HTML 元素。 -->
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="handleClick"
  >
    {{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  transformToComponentProps,
  textDefaultProps,
  textStylePropNames,
} from "../../defaultProps";
import useComponentCommon from "../../hooks/useComponentCommon";
const defaultProps = transformToComponentProps(textDefaultProps);
export default defineComponent({
  name: "l-text",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    ...defaultProps,
  },
  setup(props) {
    // 重用并且简化 属性提取
    // 抽离并且获得 styleProps
    //pick 创建一个从 object 中选中的属性的对象。
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropNames
    );
    return {
      styleProps,
      handleClick,
    };
  },
});
</script>
<style lang="scss" scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>