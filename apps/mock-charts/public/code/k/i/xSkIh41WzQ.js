var xAxis = ['11-01', '11-02', '11-03', '11-04', '11-05', '11-06'];
var data1=[["11-01",44],["11-02",64],["11-03",77]];
var data2=[["11-03",77],["11-04",99]];
var data3=[["11-04",99],["11-05",102],["11-06",116]];

var data4=[["11-01",54],["11-02",74],["11-03",87]];
var data5=[["11-03",87],["11-04",109]];
var data6=[["11-04",109],["11-05",112],["11-06",126]];
option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    dataZoom: [{
        type: 'inside',
        xAxisIndex: [0]
    }],
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            for (let i = 0; i < params.length; i++) {
                if (params[i].value) {
                    return params[i].value[1];
                }
            }
            return 'loading';
        },
        backgroundColor: '#ff6633',
        padding: [10],
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        }

    },
    xAxis: {
        axisTick: {
            show: true
        },
        type: 'category',
        boundaryGap: false,
        data: xAxis,
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#333'
            }
        }
    },
    yAxis: {
        axisTick: {
            show: false
        },
        type: 'value',
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#ddd'
            }
        }
    },
    series: [{
            type: 'line',
            name:'老人',
            smooth: true,
            symbolSize: 7,
            data: data1,
            areaStyle: {
                normal: {
                    color: '#e2e2e2',
                    opacity: 1
                }
            }
        },{
            type: 'line',
            name:'老人',
            smooth: true,
            symbolSize: 7,
            data: data2,
            areaStyle: {
                normal: {
                    color: '#ff8c66',
                    opacity: 1
                }
            }
        },{
            type: 'line',
            name:'老人',
            smooth: true,
            symbolSize: 7,
            data: data3,
            areaStyle: {
                normal: {
                    color: '#e2e2e2',
                    opacity: 1
                }
            }
        },{
            type: 'line',
            name:'学生',
            smooth: true,
            symbolSize: 7,
            data: data4,
            areaStyle: {
                normal: {
                    color: '#e2e2e2',
                    opacity: 1
                }
            }
        },{
            type: 'line',
            name:'学生',
            smooth: true,
            symbolSize: 7,
            data: data5,
            areaStyle: {
                normal: {
                    color: '#ff8c66',
                    opacity: 1
                }
            }
        },{
            type: 'line',
            name:'学生',
            smooth: true,
            symbolSize: 7,
            data: data6,
            areaStyle: {
                normal: {
                    color: '#e2e2e2',
                    opacity: 1
                }
            }
        }]
};