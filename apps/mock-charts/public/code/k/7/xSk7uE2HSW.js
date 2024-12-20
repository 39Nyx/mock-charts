option = {
    title: {
        text: '按日统计',
        top: "top",
        left: "center",
        subtext: "共计调用 100 次"
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            return "在 " + params.name + " 日调用 " + params.data + " 次";
        }
    },
    color: ['#2f4554'],
    grid: {
        left: '3%',
        right: '8%',
        bottom: '15%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            show: false,
            interval: 0
        },
        data: ["2017/06/26", "2017/06/27", "2017/06/28", "2017/06/29", "2017/07/02", "2017/07/11", "2017/07/12"]
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
        },
        splitArea: {
            show: false
        }
    },
    dataZoom: [{
        show: true,
        height: '8%',
        xAxisIndex: 0,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#ddd"
        },
        borderColor: '#eee',
        left: '18%',
        right: '18%'
    }, {
        type: 'inside',
        show: true,
        left: '18%',
        right: '18%'
    }],
    series: {
        type: 'line',
        lineStyle: {
            normal: {
                width: 3
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        symbolSize: 5,
        symbol: 'circle',
        data: ["10", "40", "5", "5", "20", "15", "5"]
    }
};