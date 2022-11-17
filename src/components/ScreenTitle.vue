<script setup>
const props = defineProps({
  titleText: {
    default: "数据监控平台",
    type: String,
  },
});
</script>

<template>
  <div class="title-box">
    <dv-decoration8 class="decoration8-title" />
    <div class="title-main">
      <div class="title-text">{{ props.titleText }}</div>
      <dv-decoration5 :dur="2" class="decoration5-title" />
    </div>
    <dv-decoration8 :reverse="true" class="decoration8-title" />
  </div>
</template>

<style scoped lang="less">
.title-box {
  // color: #11ebd7;
  font-size: 28px;
  text-align: center;
  display: flex;
}
.title-main {
  flex: 1;
  position: relative;
  margin: 0 80px;
  box-sizing: border-box;
}
.decoration8-title {
  height: 70px;
  width: 20%;
  flex: 0 0 20%;
}
.decoration5-title {
  width: 100%;
  position: absolute;
  top: 30px;
}
.title-text {
  position: absolute;
  color: #11ebd7;
  left: 50%;
  transform: translate(-50%,0);
}
</style>
