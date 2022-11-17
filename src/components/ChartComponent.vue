<script setup>
import * as echarts from "echarts";
import { ref, watchEffect, nextTick, onMounted } from "vue";
const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
  cityName: {
    type: String,
  },
});
const myChartDom = ref(null);
let myChart = null;
const initChart = (option) => {
  nextTick(() => {
    if (!myChart) {
      myChart = echarts.init(myChartDom.value);
    }
    myChart.setOption(option);
  });
};
watchEffect(() => {
  initChart(props.option);
});
</script>

<template>
  <div class="chart" ref="myChartDom"></div>
</template>
<style scoped lang="less">
.chart {
  height: 100%;
  width: 100%;
}
</style>