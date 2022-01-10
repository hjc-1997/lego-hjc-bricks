import { App } from "vue";
import LText from "./LText.vue";

const textComponent = {
    install: (app: App) => {
        app.component(LText.name, LText);
    },
};

export default textComponent;
