import { computed } from "vue";
import { pick } from "lodash-es";
import { TextComponentProps } from "../defaultProps";
const useComponentCommon = (
    // 只读并且可选
    props: Readonly<Partial<TextComponentProps>>,
    picks: string[]
) => {
    // 抽离页面样式函数
    const styleProps = computed(() => pick(props, picks));
    // 点击事件的处理
    const handleClick = () => {
        if (props.actionType === "url" && props.url) {
            window.location.href = props.url;
        }
    };
    return {
        styleProps,
        handleClick,
    };
};

export default useComponentCommon;
