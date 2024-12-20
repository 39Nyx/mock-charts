var json = [{
        "行业名称": "教育",
        "市场空间": 1,
        "行业成熟度": 10,
        "自身禀赋": 2
    },
    {
        "行业名称": "医疗健康",
        "市场空间": 2,
        "行业成熟度": 9,
        "自身禀赋": 1
    },
    {
        "行业名称": "文化娱乐",
        "市场空间": 3,
        "行业成熟度": 8,
        "自身禀赋": 5
    },
    {
        "行业名称": "可穿戴设备",
        "市场空间": 4,
        "行业成熟度": 7,
        "自身禀赋": 6
    },
    {
        "行业名称": "零售",
        "市场空间": 5,
        "行业成熟度": 6,
        "自身禀赋": 3
    },
    {
        "行业名称": "物流",
        "市场空间": 6,
        "行业成熟度": 1,
        "自身禀赋": 7
    },
    {
        "行业名称": "交通",
        "市场空间": 7,
        "行业成熟度": 2,
        "自身禀赋": 10
    },
    {
        "行业名称": "能源",
        "市场空间": 8,
        "行业成熟度": 3,
        "自身禀赋": 4
    },
    {
        "行业名称": "制造业",
        "市场空间": 9,
        "行业成熟度": 4,
        "自身禀赋": 8
    },
    {
        "行业名称": "车联网",
        "市场空间": 10,
        "行业成熟度": 5,
        "自身禀赋": 9
    },

]
var data = []
var y = Object.keys(json[0])
console.log(y)
data = json.map((item) => {
    return {
        name:item[y[0]],
        value: [item[y[1]], item[y[2]], item[y[3]]]
    }
})
console.log(data)
myChart.setOption({
    tooltip: {},
    visualMap: {
        top: 10,
        calculable: true,
        dimension: 3,
        max: 10,
        inRange: {
            color: ['#1710c0', '#0b9df0', '#00fea8', '#00ff0d', '#f5f811', '#f09a09', '#fe0300']
        },
        textStyle: {
            color: '#fff'
        }
    },
    xAxis3D: {
        name: y[0],
        min: 0,
        max: 10,
        splitNumber: 10,
        axisTick: {
            show: false
        },
        type: 'value'
    },
    yAxis3D: {
        name: y[1],
        min: 0,
        max: 10,
        splitNumber: 10,
        axisTick: {
            show: false
        },
        type: 'value'
    },
    zAxis3D: {
        name: y[2],
        min: 0,
        max: 10,
        splitNumber: 10,
        axisTick: {
            show: false
        },
        type: 'value'
    },
    grid3D: {
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
        axisPointer: {
            lineStyle: {
                color: '#ffbd67'
            }
        },
        viewControl: {
            // autoRotate: true
            // projection: 'orthographic'
        }
    },
    series: [{
        name:'行业数据',
        type: 'scatter3D',
        data: data,
        symbolSize: 20,
        // symbol: 'triangle',
        itemStyle: {
            // borderWidth: 1,
            // borderColor: 'rgba(255,255,255,0.8)'
        },
        label:{
          show: true,
          formatter:'{b}'
        },
        emphasis: {
            itemStyle: {
                color: 'yellow'
            }
        }
    }]
});