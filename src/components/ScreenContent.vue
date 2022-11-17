<script setup>
import mapJson from "@/utils/map.json";
import mapOption from "@/utils/mapOpt.js";
import MapChart from "@/components/MapChart.vue";
import LeftContent from "@/components/LeftContent.vue";
import RightContent from "@/components/RightContent.vue";
import { reactive } from "vue";
import CenterBottom from "@/components/CenterBottom.vue";
</script>

<template>
  <div class="screen-content">
    <div class="left">
      <dv-border-box3>
        <LeftContent></LeftContent>
      </dv-border-box3>
    </div>
    <div class="center">
      <MapChart :mapJson="mapJson" :mapOption="mapOption"></MapChart>
      <div class="center-bottm">
        <dv-border-box13>
          <CenterBottom></CenterBottom>
        </dv-border-box13>
      </div>
    </div>
    <div class="right">
      <dv-border-box3>
        <RightContent></RightContent>
      </dv-border-box3>
    </div>
  </div>
</template>
<style scoped lang="less">
.screen-content {
  display: flex;
  width: 100%;
  flex: 1;
  padding-top: 30px;
  box-sizing: border-box;
}
.left {
  flex: 0 0 450px;
  height: 100%;
}
.center {
  flex: 1;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.center-bottm {
  flex: 1;
}
.right {
  flex: 0 0 450px;
}
</style>