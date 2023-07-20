<script setup lang="ts">
import _ from "lodash";
import { withDefaults } from "vue";

interface DividerProps {
  as?: string | object;
}

const { as } = withDefaults(defineProps<DividerProps>(), {
  as: "div",
});
</script>

<template>
  <component
    :is="as"
    class="w-full h-px  z-10 relative  "
  >
    <slot></slot>
  </component>
</template>
<!-- <style>
template:hover{
color: #fff;
}
</style> -->