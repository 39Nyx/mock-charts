// Echarts图表配置
let xData = function() {
    let data = [];
    let monthEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < 12; i++) {
        data.push(`${monthEn[i]}-19`);
    }
    for (let i = 0; i < 12; i++) {
        data.push(`${monthEn[i]}-20`);
    }
    return data;
}();
let data = {
    data1: [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078, 709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484, 4078],
    data2: [327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220, 327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220]
}
let totalData = function() {
    let total = [];
    if (data.data1.length != data.data2.length) {
        alert('两组数据不匹配')
        return;
    }
    data.data1.map((num, index) => {
        total.push(num + data.data2[index])
    })
    return total;
}();

option = {
    backgroundColor: "#fff",
    "title": {
        "text": "行业趋势>关键指标>细分市场",
        x: "center",

        textStyle: {
            color: '#666',
            fontSize: '22'
        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        borderWidth: 0,
        top: 80,
        bottom: 80,
        left: 80,
        right: 80,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: 'center',
        top: '8%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['高端美妆', '其他', '美妆行业整体']
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            "rotate": -90
        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
        },
        "splitArea": {
            "show": false
        },
    }],
    "series": [{
        "name": "高端美妆",
        "type": "bar",
        "stack": "总量",
        "barMaxWidth": 35,
        "barGap": "10%",
        "itemStyle": {
            "normal": {
                "color": "rgba(255,144,128,1)",
                "label": {
                    "show": true,
                    "textStyle": {
                        "color": "#fff"
                    },
                    "position": "inside",
                    formatter: function(p) {
                        // console.log(p)
                        return p.value > 0 ? (((p.value / totalData[p.dataIndex]).toFixed(4) *
                            100).toString().slice(0, 5) + '%') : '';
                    }
                }
            }
        },
        "data": data.data1,
    }, {
        "name": "其他",
        "type": "bar",
        "stack": "总量",
        "itemStyle": {
            "normal": {
                "color": "rgba(0,191,183,1)",
                "barBorderRadius": 0,
                "label": {
                    "show": true,
                    "position": "inside",
                    formatter: function(p) {
                        return p.value > 0 ? (((p.value / totalData[p.dataIndex]).toFixed(4) *
                            100).toString().slice(0, 5) + '%') : '';
                    }
                }
            }
        },
        "data": data.data2
    }, {
        "name": "美妆行业整体",
        "type": "line",
        "stack": "总量", // 可以让折线图在柱状图上方 注释点落在柱状图顶端中心
        "symbolSize": 10,
        "symbol": 'circle',
        "itemStyle": {
            "normal": {
                "color": "rgba(252,230,48,1)",
                "barBorderRadius": 0,
                "label": {
                    "show": true,
                    "position": "top",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
        "data": totalData
    }]
}