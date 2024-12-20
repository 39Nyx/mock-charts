option = {
    //图例
    legend: {
        data: ['女性', '男性']
    },
    //提示组件，悬浮显示数据
    tooltip: [{
        trigger: 'xAxis',
        //选中阴影部分，及提示
        axisPointer: {
            type: 'shadow'
        }
    }],
    //X轴
    xAxis: [{
        //值类型
        type: 'value',
        axisTick: {
            show: false
        },
        //X轴间隔大小
        interval: 5
    }],
    //Y轴
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['16-25周岁', '26-35周岁', '36-45周岁', '46-60周岁']
    }],
    series: [{
        name: '女性',
        //图形类型
        type: 'bar',
        data: [12, 13, 14, 13]
    }, {
        name: '男性',
        type: 'bar',
        data: [9, 13, 14, 13]
    }]
};