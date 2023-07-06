import { useIntersectionObserver } from "@vueuse/core";

/** 图片懒加载的封装 */
export default {
  mounted(el, binding) {
    // el: 指令绑定的那个元素 img
    // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
    // console.log(binding.value);
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 进入视口区域
          el.src = binding.value;
          stop();
        }
      }
    );
  },
};
