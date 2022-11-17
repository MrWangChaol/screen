<script setup>
const props = defineProps({
  title: {
    default: "标题党",
    type: String,
  },
});

</script>

<template>
  <div class="card">
    <div class="card-title" :title="title">{{props.title}}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped lang="less">
.card {
  color: #fff;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.content {
  height: calc(100% - 50px);
  width: 100%;
}
.card-title {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  color: #11ebd7;
  background: linear-gradient(
    270deg,
    rgba(39, 247, 237, 0) 0%,
    rgba(17, 235, 215, 0.16) 49%,
    rgba(17, 235, 215, 0.05) 82%,
    rgba(17, 235, 215, 0.01) 100%
  );
  border-radius: 0px 0px 0.677083vw 0.677083vw;
}
</style>