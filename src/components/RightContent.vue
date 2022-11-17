<script setup>
import CardComponent from "@/components/CardComponent.vue";
import ChartComponent from "@/components/ChartComponent.vue";
import { rightbarChartOtion } from "@/utils/chartOption.js";
import { ref, reactive } from "vue";
const data = {
    xList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    yList: [120, 200, 150, 80, 70, 110, 130]
}
const option = rightbarChartOtion(data)
const baroption = ref("");
const config = reactive({
    data: [55],
    shape: "round",
});
const config1 = {
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3']
    ]
}
const config2 = ref({
    value: 66
})
setInterval(() => {
    if (config2.value.value == 100) {
        config2.value.value = 0
    }
    config2.value.value++
}, 200)
</script>

<template>
    <div class="left-Content">
        <div>
            <CardComponent title="柱状图">
                <ChartComponent :option="option" class="pie-chart"></ChartComponent>
                <dv-decoration2 :dur="5" style="width: 100%; height: 5px" />
            </CardComponent>
        </div>
        <div>
            <CardComponent title="数字">
                <div class="flex">
                    <dv-percent-pond :config="config2" style="width:200px;height:100px;" />
                </div>
            </CardComponent>
        </div>
        <div>
            <CardComponent title="表格">
                <dv-scroll-board :config="config1" style="width:100%;height:350px" />
            </CardComponent>
        </div>
    </div>
</template>
<style scoped lang="less">
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
}

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
        height: 250px;
    }

    .pie-chart2 {
        width: 100%;
        height: 250px;
    }

    .level-pond {
        height: 150px;
        width: 150px;
    }

    .diflex {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
    }
}
</style>