<script setup>
import ChartComponent from "@/components/ChartComponent.vue";
import { useStore } from "@/store/index.js";
import { ref } from "vue";
import { averageIncomeOption } from "@/utils/chartOption.js";
const store = useStore();
const cityName = ref("");
let option = ref({});
store.$subscribe((mutation, state) => {
  if (cityName.value != state.city) {
    cityName.value = state.city;
  }
  if (state.cityData[cityName.value] && cityName.val !== "") {
    option.value = averageIncomeOption(state.cityData[cityName.value]);
  }
});
</script>

<template>
  <div class="center-bottom-content">
    <ChartComponent :cityName="cityName" :option="option"></ChartComponent>
  </div>
</template>
<style scoped lang="less">
.center-bottom-content {
  color: #fff;
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>