    const hangzhouCoord = [120.21, 30.25];
    const zheJiangOtherCoords = [{
            name: "绍兴",
            coords: [120.58, 30.05],
        },
        {
            name: "宁波",
            coords: [121.62, 29.86],
        },
        {
            name: "湖州",
            coords: [120.09, 30.89],
        },
        {
            name: "金华",
            coords: [119.65, 29.08],
        },
        {
            name: "丽水",
            coords: [119.92, 28.47],
        },
        {
            name: "温州",
            coords: [120.7, 27.99],
        },
        {
            name: "衢州",
            coords: [118.86, 28.97],
        },
        {
            name: "台州",
            coords: [121.42, 28.66],
        },
        {
            name: "嘉兴",
            coords: [120.76, 30.75],
        },
        {
            name: "舟山",
            coords: [122.21, 29.99],
        },
    ];
    const linesSeries = zheJiangOtherCoords.map((v, index) => {
        return {
            type: "lines",
            zlevel: index + 101,
            coordinateSystem: 'geo',
            effect: {
                constantSpeed: 30,
                show: true,
                color: "#00feff",
                symbol: "pin",
                symbolSize: 3,
                trailLength: 0.3,
            },
            symbol: ["circle", "arrow"],
            symbolSize: 5,
            lineStyle: {
                color: "rgba(0, 254, 255, 0.3)",
                width: 0.5,
                curveness: 0.2,
            },
            data: [{
                coords: [hangzhouCoord, v.coords],
                name: v.name,
            }, ],
        };
    });
    const planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";

    const option = {
        geo: {
            map: "FeatureCollection",
            aspectScale: 0.9,
            roam: false,
            selectedMode: "single",
            zlevel: 99,
            zoom: 1.23,
            show: true,
            layoutCenter: ["50%", "50%"],
            label: {
                show: true,
                color: "#fff",
            },
            itemStyle: {
                areaColor: "transparent",
                borderColor: "#2763A4",
                borderWidth: 1,
            },
            emphasis: {
                label: {
                    color: "#fff",
                },
                itemStyle: {
                    areaColor: "#6AA8EE",
                },
            },
            select: {
                label: {
                    color: "#fff",
                },
                itemStyle: {
                    areaColor: "#6AA8ff99",
                },
            },
        },
        series: [{
                // effectScatter画散点【起点】
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 100,
                symbolSize: 15,
                symbol: planePath,
                symbolRotate: -90,
                rippleEffect: {
                    period: 3,
                    brushType: "fill",
                    scale: 3,
                    number: 3,
                },
                itemStyle: {
                    color: "#00feff",
                    opacity: 0.7,
                },
                data: [
                    [120.21, 30.25]
                ],
            },
            ...linesSeries,
        ],
    };
    export default option

    // chart.on("click", function (params) {
    //     const cityObj = selectCity(params.name);
    //     if (cityObj) {
    //       if (mapLevel == 1) mapLevel = 2;
    //       echarts.registerMap("FeatureCollection", cityObj.json);
    //       chart.setOption(props.mapOption);
    //     } else {
    //       mapLevel = 1;
    //       echarts.registerMap(props.mapName, props.mapJson);
    //       chart.setOption(props.mapOption);
    //     }
    //   });