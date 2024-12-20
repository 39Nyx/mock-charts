var data = [2220, 1682, 2791, 3000, 4090, 3230, 2910, 5210, 3567, 2134, 1789, 920];
var xdata = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
var option = {
    backgroundColor:'#081D49',
    grid: {
        left: 30,
        right: 50,
        top: 50,
        bottom: 30,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: xdata,
        triggerEvent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,.6)'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'normal',
            textShadowColor: '#000',
            textShadowOffsetY: 2
        }
    },
    yAxis: {
        nameTextStyle: {
            color: '#fff',
            fontSize: 16,
            textShadowColor: '#000',
            textShadowOffsetY: 2
        },
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(200,10,212,1)'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                width: 2,
                color: 'rgba(255,255,255,.6)'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            color: '#fff',
            fontSize: 16,
            textShadowColor: '#000',
            textShadowOffsetY: 2
        }
    },
    series: [{
        data: data,
        type: 'line',
        symbol: 'circle',
        symbolSize: 12,
        smooth: true,
        color: '#FEC201',
        lineStyle: {
            color: "#C80AD4"
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#FEC201',
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(200,10,212, 1)'
            }, {
                offset: 0.9,
                color: 'rgba(200,10,212, 0.05)'
            }], false),
        }
    }]
}