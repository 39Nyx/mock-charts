var dataBJ = [
    [1, 55, 20, 56, 10000, "初中", 30, "已婚", "男", " "],
    [2, 25, 11, 21, 20000, "高中", 28, "未婚", "男", " "],
    [3, 70, 50, 40, 60000, "高中", 40, "已婚", "男", " "],
    [4, 60, 35, 29, 24000, "高中", 48, "未婚", "男", " "],
    [5, 80, 55, 56, 80000, "本科", 48, "已婚", "女", " "],
    [6, 50, 57, 60, 40000, "本科", 30, "未婚", "女", " "],
    [7, 74, 49, 36, 46000, "本科", 28, "已婚", "女", " "],
    [8, 40, 55, 32, 20000, "本科", 20, "未婚", "男", " "],
    [9, 80, 60, 43, 90000, "高中", 36, "已婚", "男", " "],
    [10, 35, 28, 34, 48000, "高中", 15, "未婚", "男", " "],
    [11, 58, 19, 33, 62000, "高中", 28, "已婚", "女", " "],
    [12, 41, 11, 54, 36000, "高中", 26, "已婚", "男", " "],
    [13, 64, 38, 62, 56000, "高中", 33, "已婚", "男", " "],
    [14, 50, 79, 55, 48000, "本科", 36, "已婚", "女", " "],
    [15, 40, 63, 44, 23000, "高中", 28, "已婚", "男", " "],
    [16, 33, 6, 24, 70000, "高中", 14, "未婚", "男", " "],
    [17, 88, 66, 76, 24000, "本科",25, "已婚", "男", " "],
    [18, 66, 50, 66, 58000, "高中", 28, "未婚", "女", " "],
    [19, 57, 31, 34, 49000, "硕士", 29, "已婚", "男", " "],
    [20, 22, 8, 21,  39000, "本科", 30, "未婚", "男", " "],
    [21, 39, 15, 36, 21000, "高中", 20, "未婚", "女", " "],
    [22, 89, 69, 56, 26000, "高中", 35, "已婚", "男", " "],
    [23, 88, 73, 60, 31000, "高中",33, "已婚", "男", " "],
    [24, 31, 16, 35, 41000, "本科", 26, "未婚", "女", " "],
    [25, 42, 25, 43, 52000, "高中", 31, "已婚", "女", " "],
    [26, 60, 40, 38, 90000, "硕士", 30, "已婚", "男", " "],
    [27, 24, 12, 19, 88000, "硕士", 45, "未婚", "女", " "],
    [28, 44, 24, 39, 32000, "高中", 40, "未婚", "男", " "],
    [29, 89, 96, 47, 88000, "硕士", 39, "已婚", "女", " "],
    [30, 52, 24, 29, 45000, "高中", 32, "已婚", "男", " "],
    [31, 55, 20, 56, 10000, "初中", 30, "已婚", "男", " "],
    [32, 25, 11, 21, 20000, "高中", 28, "未婚", "男", " "],
    [33, 70, 50, 40, 60000, "高中", 40, "已婚", "男", " "],
    [34, 60, 35, 29, 24000, "高中", 48, "未婚", "男", " "],
    [35, 80, 55, 56, 80000, "本科", 48, "已婚", "女", " "],
    [36, 50, 57, 60, 40000, "本科", 30, "未婚", "女", " "],
    [37, 74, 49, 36, 46000, "本科", 28, "已婚", "女", " "],
    [38, 40, 55, 32, 20000, "本科", 47, "未婚", "男", " "],
    [39, 80, 60, 43, 90000, "高中", 36, "已婚", "男", " "],
    [40, 35, 28, 34, 48000, "高中", 39, "未婚", "男", " "],
    [41, 58, 19, 33, 62000, "高中", 28, "已婚", "女", " "],
    [42, 41, 11, 54, 36000, "高中", 40, "已婚", "男", " "],
    [43, 64, 38, 62, 56000, "高中", 33, "已婚", "男", " "],
    [44, 50, 79, 55, 48000, "本科", 36, "已婚", "女", " "],
    [45, 40, 63, 44, 23000, "高中", 28, "已婚", "男", " "],
    [46, 33, 6, 24, 70000, "高中", 46, "未婚", "男", " "],
    [47, 88, 66, 76, 24000, "本科",25, "已婚", "男", " "],
    [48, 66, 50, 66, 58000, "高中", 39, "未婚", "女", " "],
    [49, 57, 31, 34, 49000, "硕士", 29, "已婚", "男", " "],
    [50, 22, 8, 21,  39000, "本科", 30, "未婚", "男", " "],
];

var dataGZ = [


];

var dataSH = [

];

var schema = [{
    name: 'person',
    index: 0,
    text: '人'
}, {
    name: '幸福指数高低index',
    index: 1,
    text: '幸福指数高低'
}, {
    name: '幸福指数大小index',
    index: 2,
    text: '幸福指数大小'
}, {
    name: 'age',
    index: 3,
    text: '年龄'
}, {
    name: 'personal revenue',
    index: 4,
    text: '居民收入（personal revenue）'
}, {
    name: 'education',
    index: 5,
    text: '受教育状况 （education）'
}, {
    name: 'health',
    index: 6,
    text: '健康因素（health）'
}, {
    name: 'marital',
    index: 7,
    text: '婚姻状况（marital）'
}, {
    name: 'gender',
    index: 8,
    text: '性别（gender）'
}, ];


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    backgroundColor: '#333',
    color: [
        '#dd4444', '#fec42c', '#80F1BE'
    ],
    legend: {
        y: 'top',
        data: ['居民幸福指数调研统计', ],
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        x: '10%',
        x2: 150,
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function(obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                obj.seriesName + ' ' + value[0] + '人' +
                value[9] +
                '</div>' +
                schema[1].text + '：' + value[1] + '<br>' +
                schema[2].text + '：' + value[2] + '<br>' +
                schema[3].text + '：' + value[3] + '<br>' +
                schema[4].text + '：' + value[4] + '<br>' +
                schema[5].text + '：' + value[5] + '<br>' +
                schema[6].text + '：' + value[6] + '<br>' +
                schema[7].text + '：' + value[7] + '<br>' +
                schema[8].text + '：' + value[8] + '<br>';
        }
    },
    xAxis: {
        type: 'value',
        name: '人数',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 50,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#777'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '幸福指数',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#777'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    visualMap: [{
        left: 'right',
        top: '10%',
        dimension: 2,
        min: 0,
        max: 100,
        itemWidth: 30,
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        text: ['圆形大小：幸福指数'],
        textGap: 30,
        textStyle: {
            color: '#fff'
        },
        inRange: {
            symbolSize: [10, 70]
        },
        outOfRange: {
            symbolSize: [10, 70],
            color: ['rgba(255,255,255,.2)']
        },
        controller: {
            inRange: {
                color: ['#c23531']
            },
            outOfRange: {
                color: ['#444']
            }
        }
    }, {
        left: 'right',
        bottom: '5%',
        dimension: 6,
        min: 0,
        max: 50,
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        text: ['明暗：健康指数 '],
        textGap: 30,
        textStyle: {
            color: '#fff'
        },
        inRange: {
            colorLightness: [1, 0.5]
        },
        outOfRange: {
            color: ['rgba(255,255,255,.2)']
        },
        controller: {
            inRange: {
                color: ['#c23531']
            },
            outOfRange: {
                color: ['#444']
            }
        }
    }],
    series: [{
            name: '居民幸福指数调研统计',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ
        },

    ]
};