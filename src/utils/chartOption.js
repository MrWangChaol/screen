import * as echarts from "echarts";
// 柱状图配置
export const averageIncomeOption = (cityData) => {
    const option = {
        title: {
            text: `柱状图`,
            textStyle: {
                color: "#11ebd7",
            },
            textAlign: "left",
        },
        grid: {
            left: "5%",
            right: "0%",
            bottom: "20",
        },
        xAxis: {
            type: "category",
            data: cityData.xList,
            axisLabel: {
                fontSize: 10,
                color: "#ffffff",
                margin: 5,
            },
        },
        yAxis: {
            type: "value",
        },
        barWidth: "30%",
        tooltip: {},
        series: [{
            data: cityData.yList,
            type: "bar",
            label: {
                show: true,
                position: "top",
                textBorderColor: "inherit",
                color: "#fff",
            },
            symbolSize: ['30%', 10],
            symbolOffset: [0, -6],
            itemStyle: {
                barBorderRadius: 10,
                emphasis: {
                    barBorderRadius: 10
                },
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    0.7,
                    [{
                            offset: 0,
                            color: "rgba(76,120,220,.7)", // 0% 处的颜色
                        },
                        {
                            offset: 0.98,
                            color: "rgba(76,120,220,.3)", // 100% 处的颜色
                        },
                    ],
                    false
                ),
            },
        }, ],
    };
    return option
}
// 饼状图配置
export const pieChartOption = () => {
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '我是饼状图',
            type: 'pie',
            radius: ['30%', '50%'],
            itemStyle: {
                color: function (colors) {
                    const colorList = ["#45a9f4", "#09eca9", '#f18c37']
                    return colorList[colors.dataIndex]
                },
                borderRadius: 0,
                borderWidth: 0
            },
            label: {
                formatter: "{b}\n{c}",
                color: '#fff'
            },
            labelLine: {
                show: true,

            },
            data: [{
                    value: 1048,
                    name: '数据1'
                },
                {
                    value: 735,
                    name: '数据2'
                },
                {
                    value: 580,
                    name: '数据3'
                }
            ]
        }]
    }
    return option
}
// 横向柱状图配置
export const barChartOtion = () => {
    const option = {
        grid: {
            left: "15%",
            right: "15%",
            bottom: '5%',
            top: '5%',
        },
        xAxis: {
            show: false
        },
        yAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E'],
            axisLabel: {
                fontSize: 12,
                color: "#fff",
                margin: 5,
            },
            inverse: true,
        },
        series: [{
            realtimeSort: true,
            barWidth: '35%',
            name: 'X',
            type: 'bar',
            data: [1, 2, 3, 4, 5],
            label: {
                show: true,
                position: 'right',
                valueAnimation: true,
                color: "#fff",
                textBorderColor: "inherit",
            },

            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "#2f5d84", // 0% 处的颜色
                        },
                        {
                            offset: 0.98,
                            color: "#2f5d84", // 100% 处的颜色
                        },
                    ],
                    false
                ),
            },
        }]
    }
    return option
}

export const rightbarChartOtion = (cityData) => {
    const option = {
        grid: {
            left: "10%",
            right: "10",
            bottom: "20",
        },
        xAxis: {
            type: "category",
            data: cityData.xList,
            axisLabel: {
                fontSize: 10,
                color: "#ffffff",
                margin: 5,
            },
        },
        yAxis: {
            type: "value",
        },
        barWidth: "30%",
        tooltip: {},
        series: [{
            data: cityData.yList,
            type: "bar",
            label: {
                show: true,
                position: "top",
                textBorderColor: "inherit",
                color: "#fff",
            },
            // symbolSize: ['30%', 10],
            // symbolOffset: [0, -6],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    1,
                    0,
                    0,
                    [{
                            offset: 0,
                            color: "#fcc", // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#abcdef", // 100% 处的颜色
                        },
                    ],
                    false
                ),
            },
        }, ],
    };
    return option
}