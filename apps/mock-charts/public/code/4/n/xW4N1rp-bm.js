let _boyActual = [30, 50, 60, 12, 13, 14, 15, 13, 12, 13];
let yesterdayList = [100, 100, 120, 120, 80, 40, 20, 30, 20, 30];
let _bgshow = [];
let _college = [
    "海南航空",
    "东方航空",
    "四川航空",
    "海南航空",
    "南方航空",
    "深圳航空",
    "西藏航空",
    "昆明航空",
    "山东航空",
    "中国航空"
];
let maxPlanCourseCnt = Math.max.apply(null, yesterdayList);
let maxRealCourseCnt = Math.max.apply(null, _boyActual);
let maxCourseCnt = Math.max(maxPlanCourseCnt, maxRealCourseCnt);

$.each(yesterdayList, function(i, d) {
    _bgshow.push(maxCourseCnt);
});


var option = {
    backgroundColor: '#142058',
    tooltip: {
        show: "true",
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "none" // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(param) {
            let html = _college[param[1].dataIndex] + "<br/>";
            html += "今日：" + param[1].value + "<br/>";
            html += "昨日：" + yesterdayList[param[1].dataIndex] + "<br/>";
            return html;
        }
    },
    grid: {
        left: "10%",
        right: "13%",
        bottom: "5%",
        top: 10
    },
    xAxis: {
        type: "value",
        show: true,
        max: maxCourseCnt,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: [{
            type: "category",
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: "#6df8f0",
                fontSize: 14
            },
            splitLine: {
                show: false
            },
            data: _college
        },
        {
            type: "category",
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: "#6df8f0"
            },
            splitLine: {
                show: false
            },
            position: "right",
            offset: 10,
            data: [],
            zLevel: "3"
        },
        {
            type: "category",
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: "#6df8f0"
            },
            splitLine: {
                show: false
            }
        },
        {
            type: "category",
            splitLine: "none",
            axisTick: "none",
            axisLine: "none",
            data: []
        }
    ],
    series: [
        {
            name: "",
            type: "bar",
            barWidth: 6,
            barGap: "-100%",
            barCategoryGap: "60%",
            label: {
                normal: {
                    show: true,
                    color: "#a8e7ff",
                    formatter: function(data) {
                        return (
                            _boyActual[data.dataIndex] + " / " + yesterdayList[data.dataIndex]
                        );
                    },
                    distance: 25,
                    align: 'center',
                    position: "right"
                }
            },
            itemStyle: {
                normal: {
                    color: "transparent"
                    // barBorderRadius: 20
                }
            },
            data: _bgshow
        },
        {
            name: "昨天",
            type: "bar",
            barWidth: 6,
            // barGap: '50%',
            barCategoryGap: "60%",
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#31352f",
                    barBorderRadius: 20
                }
            },
            data: yesterdayList
        },
        {
            name: "今日",
            type: "bar",
            barWidth: 6,
            barCategoryGap: "60%",
            label: {
                normal: {
                    show: false,
                    color: "#fff",
                    position: [320, -8],
                    fontSize: "24",
                    fontFamily: "myFirstFont"
                }
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: "#6df8f0",
                    barBorderRadius: 20
                }
            },
            data: _boyActual,
            zLevel: "2"
        },
        {
            name: "外圆",
            type: "scatter",
            barCategoryGap: "60%",
            hoverAnimation: false,
            symbolSize: 10,
            itemStyle: {
                normal: {
                    color: "#6df8f0",
                    opacity: 1,
                    shadowColor: "#6df8f0",
                    shadowBlur: 20
                }
            },
            data: _boyActual
        }
    ]
};