import hangzhou from "@/utils/cityJson/hangzhou.json";
import huzhou from "@/utils/cityJson/huzhou.json"
import jiaxing from "@/utils/cityJson/jiaxing.json"
import jinhua from "@/utils/cityJson/jinhua.json";
import lishui from "@/utils/cityJson/lishui.json"
import ningbo from "@/utils/cityJson/ningbo.json"
import quzhou from "@/utils/cityJson/quzhou.json";
import shaoxing from "@/utils/cityJson/shaoxing.json"
import wenzhou from "@/utils/cityJson/wenzhou.json"
import zhoushan from "@/utils/cityJson/zhoushan.json"
import taizhou from "@/utils/cityJson/zhoushan.json"
const cityGeoJsonArray = [{
        name: '杭州市',
        json: hangzhou
    },
    {
        name: '湖州市',
        json: huzhou
    },
    {
        name: '嘉兴市',
        json: jiaxing
    },
    {
        name: '金华市',
        json: jinhua
    },
    {
        name: '丽水市',
        json: lishui
    },
    {
        name: '宁波市',
        json: ningbo
    }, {
        name: '衢州市',
        json: quzhou
    },
    {
        name: '绍兴市',
        json: shaoxing
    },
    {
        name: '温州市',
        json: wenzhou
    },
    {
        name: '舟山市',
        json: zhoushan
    },
    {
        name: '台州市',
        json: taizhou
    },
]

export const selectCity = (name) => {
    return cityGeoJsonArray.find((item) => {
        return item.name == name
    })
}

