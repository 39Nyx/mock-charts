var prevM = '1',
    currentM = '2',
    nextM = '3';
var xMouth = [prevM + '月', currentM + '月', nextM + '月']; //底部x轴动态展示月份 数据 动态修改
var tarr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var arr = [{
    name: '内容一',
    data: ['12', '23', '34', '4', '15', '76', '37', '38', '19', '10', '11', '62']
}, {
    name: '内容二',
    data: ['15', '26', '37', '54', '57', '36', '27', '28', '29', '30', '51', '12']
}, {
    name: '内容三',
    data: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
}];


var datas = {
    data1: arr[0].data.slice(0, 3),
    data2: arr[1].data.slice(0, 3),
    data3: arr[2].data.slice(0, 3),
};

var setData = function(month, type) {
    // console.log(month)
    datas.data1 = arr[0].data.slice(month - 1, month + 2);
    datas.data2 = arr[1].data.slice(month - 1, month + 2);
    datas.data3 = arr[2].data.slice(month - 1, month + 2);
    if (type === 0) {
        return datas.data1;
    }
    if (type === 1) {
        return datas.data2;
    }
    if (type === 2) {
        return datas.data3;
    }

}
setData(10, 2)


var pj = function(v, x) {
    return v.concat(x);
}

var dataArrs = []
var setDataObj = function() {
    for (let key in tarr) {

        if (key == 0) {
            dataArrs.push({
                xAxis: {
                    'data': ['12月', Number(key)+1+'月', Number(key)+2+'月']
                },
                name: tarr[key],
                series: [{
                        'data': [100, 100, 100]
                    },
                    {
                        'data': pj(arr[0].data.slice(11), arr[0].data.slice(0, 2)), //0 军委首长 数据3条 第一天线 1月份 2y月份 月份数据3y
                    },
                    {
                        'data': pj(arr[1].data.slice(11), arr[1].data.slice(0, 2)), //第二条线 1军委机关及院领导
                    },
                    {
                        'data': pj(arr[2].data.slice(11), arr[2].data.slice(0, 2)), //第三条线 2军委机关业务局领导
                    }
                ],
            })
        } else if (key == 11) {
            dataArrs.push({
                name: tarr[key],
                xAxis: {
                    'data': [Number(key)+'月', Number(key)+1+'月', '1月']
                },
                series: [{
                        'data': [100, 100, 100]
                    },
                    {
                        'data': pj(arr[0].data.slice(10), arr[0].data.slice(0, 1)), //0 军委首长 数据3条 第一天线 1月份 2y月份 月份数据3y
                    },
                    {
                        'data': pj(arr[1].data.slice(10), arr[1].data.slice(0, 1)), //第二条线 1军委机关及院领导
                    },
                    {
                        'data': pj(arr[2].data.slice(10), arr[2].data.slice(0, 1)), //第三条线 2军委机关业务局领导
                    }
                ],
            })
        } else {

            dataArrs.push({
                name: tarr[key],
                xAxis: {
                    'data': [Number(key)+'月', Number(key)+1+'月', Number(key)+2+'月']
                },
                series: [{
                        'data': [100, 100, 100]
                    },
                    {
                        'data': arr[0].data.slice(key - 1, (Number(key) + 2)), //0 军委首长 数据3条 第一天线 1月份 2y月份 月份数据3y
                    },
                    {
                        'data': arr[1].data.slice(key - 1, (Number(key) + 2)), //第二条线 1军委机关及院领导
                    },
                    {
                        'data': arr[2].data.slice(key - 1, (Number(key) + 2)), //第三条线 2军委机关业务局领导
                    }
                ],
            })
        }
    }
};


console.log(dataArrs)
option = {
    baseOption: {
        timeline: {
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisType: 'category',
            show: true,
            autoPlay: true,
            currentIndex: 0,
            loop: true,
            playInterval: 3000,
            controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                showPlayBtn: true
            },

        },

        backgroundColor: "#000",
        tooltip: {
            'trigger': 'axis'
        },

        calculable: true,

        grid: {
            top: "30%",
            'y': 10,
            'y2': 80
        },

        "color": ["#49c7ad", "#ffa55b", "#4a90e2"],
        "legend": {

            "top": "2%",
            "left": "50%",
            "textStyle": {
                "fontSize": 12,
                "color": "#ffff0"
            },
            "data": ['内容一', '内容二', '内容三'],
            icon: "circle",
        },
        xAxis: {
            'type': 'category',
            'axisLabel': {
                'interval': 0
            },

            'data': xMouth
        },
        yAxis: [{
            'type': 'value',

            'show': true
        }, {
            'type': 'value',

            'show': false
        }],
        series: [{
                type: 'bar',
                barWidth: 50,
                animation: false,
                data: [100, 100, 100],
                itemStyle: {
                    normal: {
                        color: '#333b59',
                        opacity: 0.8
                    },
                },
                tooltip: {
                    show: false
                }

            },
            {
                'name': '内容一',
                'yAxisIndex': 1,
                'type': 'line',
                smooth: true, //是否平滑
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 20,
                lineStyle: {
                normal: {
                    color: "#6c50f3",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#6c50f3',
                    }
                },
                itemStyle: {
                    color: "#6c50f3",
                    borderColor: "#fff",
                    borderWidth: 3,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },

                'data': [10,10,10], //首长数据3条 第一天线


            },
            {

                'name': '内容二',
                'yAxisIndex': 1,
                'type': 'line',
                smooth: true, //是否平滑
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 20,
                lineStyle: {
                normal: {
                    color: "#00ca95",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00ca95',
                }
            },

            itemStyle: {
                color: "#00ca95",
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,202,149,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,202,149,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20
                }
            },
                'data': [20,20,20], //第二条线


            },
            {

                'name': '内容三',
                'yAxisIndex': 1,
                'type': 'line',
                smooth: true, //是否平滑
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 20,
                lineStyle: {
                normal: {
                    color: "orange",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: 'orange',
                }
            },

            itemStyle: {
                color: "orange",
                borderColor: "white",
                borderWidth: 3,
                shadowColor: '',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,202,149,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,202,149,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20
                }
            },
                'data': [30,30,30], //第三条线
            }
        ],
    },
    options: dataArrs,
};

setDataObj();