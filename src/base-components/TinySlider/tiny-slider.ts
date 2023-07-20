import { tns } from "tiny-slider/src/tiny-slider";
import { TinySliderElement, TinySliderProps } from "./TinySlider.vue";

const init = (el: TinySliderElement, props: TinySliderProps) => {
  el.tns = tns({
    container: el,
    slideBy: "page",
    mouseDrag: false,
    autoplay: false,
    controls: false,
    nav: false,
    speed: 50,
    ...props.options,
  });
};

const reInit = (el: TinySliderElement) => {
  if (el.tns.version !== null) {
    el.tns.destroy();
    el.tns = el.tns.rebuild();
  }
};

export { init, reInit };
