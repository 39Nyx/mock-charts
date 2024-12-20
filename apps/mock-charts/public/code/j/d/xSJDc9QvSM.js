var appusage_data = [{
    name: "app4",
    value: 34
}, {
    name: "app11",
    value: 46
}, {
    name: "app8",
    value: 53
}, {
    name: "app3",
    value: 68
}, {
    name: "app16",
    value: 79
}];
option = {
    "title": {
        "text": "文字太长的时候旋转显示",
        "textStyle": {
            "color": "#bcbfff",
            "fontWeight": "bold",
            "fontSize": 14
        },
        "top": "4%",
        "left": "2.2%"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": { // 坐标轴指示器，坐标轴触发有效
            "type": "shadow" // 默认为直线，可选为："line" | "shadow"
        }
    },
    "grid": {
        "left": "3%",
        "right": "10%",
        "bottom": "3%",
        "containLabel": true
    },
    "yAxis": [{
        "type": "category",
        "data": ["TOP5111111111111111111", "TOP42222222222222", "TOP333333333333", "TOP23", "TOP1333333333333333"],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false,
            "alignWithLabel": true
        },
        "axisLabel": {
            "textStyle": {
                "color": "#ffb069"
            },
            rotate: 60
        }
    }],
    "xAxis": [{
        "type": "value",
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }],

    "series": [{
        // "name": "应用使用率",
        "type": "bar",
        "data": appusage_data,
        "barCategoryGap": "35%",
        // "label": {
        //     "normal": {
        //         "show": true,
        //         "position": "right",
        //         "formatter": function(params) {
        //             return params.data.name;
        //         },
        //         "textStyle": {
        //             "color": "#bcbfff" //color of value
        //         }
        //     }
        // },
        // "itemStyle": {
        //     "normal": {
        //         "color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        //             "offset": 0,
        //             "color": "#ffb069" // 0% 处的颜色
        //         }, {
        //             "offset": 1,
        //             "color": "#ec2e85" // 100% 处的颜色
        //         }], false)
        //     }
        // }
    }]
};