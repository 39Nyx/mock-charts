var option = {
    backgroundColor: 'black',
    color: ['#2adecf'],
    textStyle: {
        color: 'rgb(222,222,222)',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            return params[0].name + "</br>" + params[0].value
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },
    xAxis: [{
        data: [
            "NB01",
            "NB02",
            "NB03",
            "NB04",
            "NB05",
            "NB06",
            "NB07",
            "NB08",
            "NB09",
            "NB10"
        ],
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 0
        }
    }],
    yAxis: [{
        type: 'value',
        name: '',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {}
    }],
    series: [{
            name: '',
            type: 'bar',
            barGap: '5%',
            barWidth: '10%',
            barCategoryGap: '60%',
            stack: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: '#12c3d9'
                }
            },
            data: [15, 15, 20, 15, 15, 15, 15, 15, 15, 15],
            zlevel: 11
        },
        {
            name: '圆球',
            type: 'scatter',
            stack: 1,
            xAxisIndex: 0,
            symbolOffset: [0, 0], //相对于原本位置的偏移量
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            itemStyle: {
                normal: {
                    color: '#12c3d9'
                }
            },
            symbolSize: 13,
            zlevel: 10
        }
    ]
}