import { App } from "vue";
import LImage from "./LImage.vue";
const imageComponent = {
    install: (app: App) => {
        app.component(LImage.name, LImage);
    },
};
export default imageComponent;
