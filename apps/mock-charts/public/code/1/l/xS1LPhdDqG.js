var sourceData = [{
    name: '贵港市',
    sales: 11454,
    services: 11564
}, {
    name: '河池市',
    sales: 11911,
    services:  11910
}, {
    name: '桂林市',
    sales: 11486,
    services:  11496
}, {
    name: '百色市',
    sales: 11655  ,
    services:11651
}, {
    name: '柳州市',
    sales: 11841,
    services: 11851
}, {
    name: '来宾市',
    sales: 11700,
    services: 11714
}, {
    name: '崇左市',
    sales: 11752,
    services: 11742
}, {
    name: '南宁市',
    sales: 11961,
    services: 11965
}, {
    name: '钦州市 ',
    sales: 11580,
    services: 11601
}, {
    name: '贺州市',
    sales: 11544,
    services: 11541
}, {
    name: '梧州市',
    sales: 11622,
    services: 11652
}, {
    name: '玉林市',
    sales:11400,
    services: 11422
}, {
    name: '防城港市',
    sales: 11822,
    services: 11852
}, {
    name: '北海市',
    sales:11750,
    services: 11762
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
        left:'10%',
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
        min:11300,
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
        min:11300,
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