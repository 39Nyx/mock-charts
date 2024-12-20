let xData = ["2018-07-03", "2018-07-04", "2018-07-05", "2018-07-06", "2018-07-07", "2018-07-08", "2018-07-09", "2018-07-10", "2018-07-11", "2018-07-12", "2018-07-14", "2018-07-15", "2018-07-16", "2018-07-17"]
let lineData = ["3.77", "2.66", "5.65", "1.63", "5.60", "2.58", "4.63", "3.77", "2.66", "5.65", "3.63", "5.60", "2.58", "4.63"]
option = {
    legend: {
        data: [],
        top: '1%',
        left: '15%'
    },
    grid: {
        top: "30%",
        left: "10%",
        right: "5%",
        containLabel: true,
        bottom: '10%'
    },
    xAxis: {
        show: false,
        type: 'category',
        data: xData.map(function(item) {
            return item;
        }),
        axisLabel: {
            formatter: function(value, idx) {
                var date = new Date(value);
                return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
            }
        },
        splitLine: {
            show: false
        },
        boundaryGap: false
    },
    yAxis: {
        show: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
        axisLabel: {
            formatter: '{value} %'
        },
        axisPointer: {
            label: {
                formatter: function(params) {
                    return (params.value).toFixed(2) + '%';
                }
            }
        },
    },
    series: {
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(58,255,183,.5)'
                }, {
                    offset: 1,
                    color: '#414347'
                }])
            }
        },
        lineStyle: {
            color: 'rgba(58,255,183,.9)',
            width: 2.5
        },
        itemStyle: {
            color: 'rgba(58,255,183,.9)'
        },
        name: "逾期率",
        data: lineData,
        type: 'line'
    },
    animation: false,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#ccc',
                borderColor: '#aaa',
                borderWidth: 1,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                textStyle: {
                    color: '#222'
                }
            }
        },
        formatter: (params, ticket, callback) => {
            let param = params[0]
            return `${param.axisValue}<br/>${param.seriesName}：${param.value}${param.value? '%': ''}`
        }
    }
};