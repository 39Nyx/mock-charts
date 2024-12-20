/*
    @songcxa
    @2017/9/13
    @方便使用，暂存
    @叠加渐变柱状图
    @qq546803970
*/
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['税收', '其他收入'],
        bottom: 0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ["2月", "3月", "4月", "5月", "6月", "7月"]
    }],
    yAxis: [{
        type: 'value',
        "splitLine": {
            "show": false
        }
    }],
    series: [{
        name: '税收',
        type: 'bar',
        barWidth: 20,
        stack: 'B',
        data: [320, 332, 301, 334, 390, 330, 320],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,199,60, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(255,199,60, 0.1)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        }
    }, {
        name: '其他收入',
        type: 'bar',
        stack: 'B',
        data: [120, 132, 101, 134, 90, 230, 210],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(24,180,254, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(24,180,254, 0.1)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
            }
        }
    }]
};