var sourceData = [{
    name: '马山县',
    sales: 1454,
    services: 1564
}, {
    name: '上林县',
    sales: 1911,
    services:  1910
}, {
    name: '隆安县',
    sales: 1486,
    services:  1496
}, {
    name: '宾阳县',
    sales: 1655  ,
    services:1651
}, {
    name: '横县',
    sales: 1841,
    services: 1851
}, {
    name: '武鸣区',
    sales: 1700,
    services: 1714
}, {
    name: '兴宁区',
    sales: 1752,
    services: 1742
}, {
    name: '青秀区',
    sales: 1961,
    services: 1965
}, {
    name: '西乡塘区 ',
    sales: 1580,
    services: 1601
}, {
    name: '江南区',
    sales: 1544,
    services: 1541
}, {
    name: '良庆区',
    sales: 1622,
    services: 1652
}, {
    name: '邕宁区',
    sales:1400,
    services: 1422
}]

var seriesData = sourceData.map(function(item, index, array) {
    return {
        name: item['name'],
        value: [item['sales'], item['services']]
    }
})

var computeServicesAvgLine = function() {
    let sum = 0
    sourceData.forEach(function(item) {
        sum += item['services']
    })
    return sum / sourceData.length
}

var computeSalesAvgLine = function() {
    let sum = 0
    sourceData.forEach(function(item) {
        sum += item['sales']
    })
    return sum / sourceData.length
}
var avg = {
    servicesAvgLine: computeServicesAvgLine(),
    salesAvgLine: computeSalesAvgLine()
}

option = {
    title: {
        text: '申请事项受理与办结分析'
    },
    backgroundColor:'#fff',
    grid:{
        bottom:'40%',
        left:'6%',
        right:'50%'
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
                type: 'dashed',
                width: 1
            },
        },
        formatter: function(obj) {
            if (obj.componentType == "series") {
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                    obj.name +
                    '</div>' +
                    '<span>' +
                    '受理数' +
                    '</span>' +
                    ' : ' + obj.data.value[1] + '' +
                    '<br/>' +
                    '<span>' +
                    '办结数' +
                    '</span>' +
                    ' : ' + obj.data.value[0] + ''
            }
        }
    },
    label: {
        normal: {
            show: true,
            position: 'bottom',
            formatter: function(params) {
                return params.name
            }
        },
        emphasis: {
            show: true,
            position: 'bottom',
        }
    },
    yAxis: {
        name: '受理数',
        min:1300,
        type: 'value',
        scale: true,
        axisLabel: {
            formatter: '{value} '
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        }
    },
    xAxis: {
        name: '办结数',
        type: 'value',
        scale: true,
        min:1300,
        axisLabel: {
            formatter: '{value} '
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        }
    },
   
    series: [{
        type: 'scatter',
        data: seriesData,
        symbolSize: 10,
        color:'#2ca3fd',
        label: {
            normal: {
                show: true,
                formatter: function (sourceData) {
                    return sourceData.name;
                },
                position: 'top'
            }
        },
        markLine: {
            label: {
                normal: {
                    
                }
            },
            lineStyle: {
                normal: {
                    color: "#CD3333",
                    type: 'solid',
                    width: 1,
                },
                emphasis: {
                    color: "#d9def7"
                }
            },
            data: [{
                xAxis: avg.salesAvgLine,
                name: '受理数平均线',
                itemStyle: {
                    normal: {
                        color: "#b84a58",
                    }
                }
            }, {
                yAxis: avg.servicesAvgLine,
                name: '办结数平均线',
                itemStyle: {
                    normal: {
                        color: "#b84a58",
                    }
                }
            }]
        }
    }]
};