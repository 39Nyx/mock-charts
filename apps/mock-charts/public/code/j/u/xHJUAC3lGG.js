var appusage_data = [{
    name: "8%",
    value: 34
}, {
    name: "9%",
    value: 46
}, {
    name: "13%",
    value: 53
}, {
    name: "19%",
    value: 68
}, {
    name: "24%",
    value: 79
}, {
    name: "27%",
    value: 85
}];
option = {
    "title": {
        "text": "榆林产妇跳楼事件 媒体报道分析图 ",
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
        "data": ["其他", "反思我国现行医疗制度", "涉事医院2人停职", "卫计委回应将依法依规严肃处理", "聚焦涉事医院公布视频截图","家属和医院就剖腹产各执一词"],
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
            }
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
        "name": "应用使用率",
        "type": "bar",
        "data": appusage_data,
        "barCategoryGap": "35%",
        "label": {
            "normal": {
                "show": true,
                "position": "right",
                "formatter": function(params) {
                    return params.data.name;
                },
                "textStyle": {
                    "color": "#bcbfff" //color of value
                }
            }
        },
        "itemStyle": {
            "normal": {
                "color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    "offset": 0,
                    "color": "#ffb069" // 0% 处的颜色
                }, {
                    "offset": 1,
                    "color": "#ec2e85" // 100% 处的颜色
                }], false)
            }
        }
    }]
};