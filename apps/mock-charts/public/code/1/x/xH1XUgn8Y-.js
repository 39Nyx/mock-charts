option = {
    legend: {
        data: ['推送次数', '推送数据量']
    },
    xAxis: [{
        type: 'value',
        min: 0,
        max: 40,
        axisTick : {
            show :false
        }
    }, {
        type: 'value',
        min: 0,
        max: 8000,
        splitLine: {
            show: false
        },
        axisTick : {
            show :false
        }
    }],
    yAxis: [{
        type: 'category',
        data: ['综合治税', '联合奖惩', '信用审查', '文明交通', '红黑名单']
    }],
    series: [{
        name: '推送次数',
        type: 'bar',
        data: [10, 15, 18, 13, 20],
        itemStyle : {
            normal : {
                color : 'blue',
                barWidth : '1%'
            }
        }
    }, {
        name: '推送数据量',
        type: 'line',
        xAxisIndex: 1,
        data: [2900, 5000, 5500, 4000, 7000],
        lineStyle : {
            normal : {
                color : 'orange',
                width : 3
            }
        }
    }]
};