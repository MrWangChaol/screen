<script setup>
import { nextTick, onMounted } from "vue";
import * as echarts from "echarts";
import { randomString } from "@/utils/utils.js";
import { useStore } from "@/store/index.js";
const store = useStore();
const uuid = randomString();
const props = defineProps({
  mapJson: {
    type: Object,
  },
  mapOption: {
    type: Object,
  },
  mapName: {
    type: String,
    default: "FeatureCollection",
  },
});
let chart = {};
let chartInterval;
const initCityArray = () => {
  const city = props.mapJson.features.map((item, index) => {
    return item.properties.name;
  });
  return city;
};
const changeCity = () => {
  const cityArray = initCityArray();
  let len = cityArray.length - 1;
  let i = 0;
  chart.dispatchAction({
    type: "geoSelect",
    name: cityArray[0],
  });
  store.$patch((state) => {
    state.city = cityArray[0];
  });
  const IntervalFn = () => {
    if (chartInterval) {
      clearInterval(chartInterval);
    }
    chartInterval = setInterval(() => {
      if (i >= len) {
        i = 0;
      } else {
        i++;
      }
      chart.dispatchAction({
        type: "geoSelect",
        name: cityArray[i],
      });
      store.$patch({
        city: cityArray[i],
      });
    }, 5000);
  };
  IntervalFn();
  chart.on("mouseover", function (params) {
    clearInterval(chartInterval);
  });
  chart.on("mouseout", function (params) {
    IntervalFn();
  });
  chart.on("click", function (params) {
    store.city = params.name;
  });
};
window.onresize = function () {
  chart.resize();
};
const initChart = () => {
  const Dom = document.getElementById(uuid);
  chart = echarts.init(Dom);
  echarts.registerMap(props.mapName, props.mapJson);
  chart.setOption(props.mapOption);
  changeCity();
};
onMounted(() => {
  nextTick(() => {
    initChart();
  });
});
</script>

<template>
  <div class="chart-box">
    <dv-border-box12>
      <div class="border-boxs">
        <div class="map-chart" :id="uuid"></div>
      </div>
    </dv-border-box12>
  </div>
</template>
<style scoped lang="less">
.chart-box {
  width: 100%;
  box-sizing: border-box;
}
.map-chart {
  width: 100%;
  height: 500px;
}
.border-boxs {
  width: 100%;
  padding: 25px 0px;
  box-sizing: border-box;
}
</style>