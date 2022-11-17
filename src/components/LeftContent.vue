<script setup>
import CardComponent from "@/components/CardComponent.vue";
import ChartComponent from "@/components/ChartComponent.vue";
import { ref, reactive } from "vue";
const option = ref("");
const baroption = ref("");
import { pieChartOption, barChartOtion } from "@/utils/chartOption.js";
option.value = pieChartOption();
baroption.value = barChartOtion();
const config = reactive({
  data: [55],
  shape: "round",
});
</script>

<template>
  <div class="left-Content">
    <CardComponent title="饼状图">
      <ChartComponent :option="option" class="pie-chart"></ChartComponent>
      <dv-decoration2 :dur="5" style="width: 100%; height: 5px" />
    </CardComponent>
    <CardComponent title="横向柱状图">
      <ChartComponent :option="baroption" class="pie-chart2"></ChartComponent>
    </CardComponent>
    <CardComponent title="水位图 ">
      <div class="diflex">
        <dv-water-level-pond :config="config" class="level-pond" />
      </div>
    </CardComponent>
  </div>
</template>
<style scoped lang="less">
.left-Content {
  width: 100%;
  height: 100%;
  padding: 25px 22px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .pie-chart {
    width: 100%;
    height: 300px;
  }
  .pie-chart2 {
    width: 100%;
    height: 250px;
  }
  .level-pond {
    height: 150px;
    width: 150px;
  }
  .diflex{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }
}
</style>