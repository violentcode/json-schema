import { defineComponent, createVNode } from "vue"

export default defineComponent({
  setup() {
    return () => createVNode("div", null, ["1111"])
  },
})
