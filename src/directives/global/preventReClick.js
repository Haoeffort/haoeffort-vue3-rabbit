export default {
  mounted(el, binding) {
    function clickHandler(e) {
      el.style.pointerEvents = "none";
      if (!binding.value) {
        if (el.__timeout__) {
          clearTimeout(el.__timeout__);
          el.__timeout__ = null;
        }
        el.__timeout__ = setTimeout(() => {
          el.style.pointerEvents = "auto";
        }, binding.value || 500);
      }

      // 解除按钮点击后样式不重置问题
      let target = e.target;
      if (
        target.nodeName === "I" ||
        target.nodeName === "SPAN"
      ) {
        target = e.target.parentNode;
      }
      target.blur();
    }

    el.__clickHandler__ = clickHandler;
    el.addEventListener("click", clickHandler);
  },
  updated(el, binding) {
    const { value } = binding;
    if (value) {
      if (value === false) {
        el.style.pointerEvents = "auto";
      }
    }
  },
  beforeUnmount(el) {
    el.removeEventListener("click", el.__clickHandler__);
    delete el.__clickHandler__;
    delete el.__currTime__;
    if (el.__timeout__) {
      clearTimeout(el.__timeout__);
      delete el.__timeout__;
    }
  },
};
