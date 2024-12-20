var data = [820, 932, 901, 934, 1290, 1330, 1320, 790, 960, 899, 1100, 1080];

var random_color = "hsla(" + Math.floor(Math.random() * (360)) + ", 60%, 50%, 1)";

var start_color = tinycolor(random_color).toHexString();
var end_color = tinycolor(random_color).lighten(30).desaturate().toHexString();

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        triggerOn: 'click',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(0,0,0,.05)',
            }
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '0%',
        right: '3%',
        bottom: '0%',
        containLabel: true
    },
    dataZoom: [{
        type: 'inside',
        zoomLock: true,
        start: 70,
        end: 100
    }],
    xAxis: [{
        position: 'top',
        type: 'category',
        boundaryGap: false,
        data: ['1\n月', '2\n月', '3\n月', '4\n月', '5\n月', '6\n月', '7\n月', '8\n月', '9\n月', '10\n月', '11\n月', '12\n月'],

        axisLabel: {
            margin: 20
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },

        triggerEvent: true
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '工资成本',
        type: 'line',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'top',
            }
        },
        itemStyle: {
            normal: {
                color: start_color
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: start_color // 0% 处的颜色
                }, {
                    offset: 1,
                    color: end_color // 100% 处的颜色
                }], false)
            }
        },
        data: data
    }]
};