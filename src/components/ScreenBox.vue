<script setup>
import { ref, computed } from "vue";
import { px2vw } from "@/utils/utils.js";
const props = defineProps({
  width: {
    type: Number,
    default: 1920,
  },
  height: {
    type: Number,
    default: 1080,
  },
});
const w = computed(() => {
  return px2vw(props.width, props.width);
});
const h = computed(() => {
  return px2vw(props.height, props.width);
});
</script>

<template>
  <div class="box" :style="{ width: w, height: h }">
    <slot></slot>
  </div>
</template>
