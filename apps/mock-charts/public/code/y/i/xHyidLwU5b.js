/*
    @songcxa
    @2017/9/13
    @方便使用，暂存
    @双轴曲线与柱状图
    @qq546803970
*/
option = {
    tooltip: {
        trigger: 'axis',
        "axisPointer": {
            "type": "none"
        }
    },
    grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '25%'
    },
    color: ['#3a99f3', '#a6ff81', '#ffa500', '#dddf00', '#b23aee', '#50b332'],
    xAxis: {
        type: 'category',
        data: ["2月", "3月", "4月", "5月", "6月", "7月"],
        axisLabel: {
            rotate: 0,
            interval: 0,
            textStyle: {
                color: '#ff593f'
            }
        }
    },
    yAxis: [{
        //name:'销量',
        type: 'value',
        show: false,
        "splitLine": {
            "show": false
        }
    }, {
        type: 'value',
        show: false,
        //name: '参与率',
        min: 0,
        max: 25,
        interval: 5,
        splitLine: {
            "show": false
        },
        axisLabel: {
            formatter: '{value} %'
        }
    }],
    series: [{
        name: '固定资产投资额(亿)',
        type: 'bar',
        barWidth: '50%',
        data: [655.92, 1020.1, 1440.7, 1707, 1882, 2341.4],
    }, {
        name: '同期增长率',
        type: 'line',
        symbolSize: 7,
        symbol: 'circle',
        yAxisIndex: 1,
        lineStyle: {
            normal: {
                width: 1,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10,
                type: 'dashed'
            }
        },
        data: [10.2, 10.2, 11, 11.8, 11, 11.6],
    }]
};