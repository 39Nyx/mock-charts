app.title = '堆叠条形图';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['电源箱警报', '其他运行设备警报']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: ['2018/05/06', '2018/05/06', '2018/05/06', '2018/05/06', '2018/05/06', '2018/05/06', '2018/05/06'],
        axisLine: {
            lineStyle: {
                color: '#d9d9d9',
            }
        },
        axisLabel: {
            color: '#9d9d9d',
        }
    },
    yAxis: {
        type: 'value',
        name: '单位/个',
        axisLine: {
            lineStyle: {
                color: '#d9d9d9',
            }
        },
        splitLine: {
            lineStyle: {
                color: '#d9d9d9',
            },
        },
        axisLabel: {
            color: '#9d9d9d',
        }
    },
    lineStyle: {
        color: '#b5b5b5',
    },
    // textStyle: {
    //   fontWeight: 'bold',
    // },
    series: [{
            name: '其他运行设备警报',
            type: 'bar',
            stack: '当天报警总数',
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
                color: '#4acffa',
            }
        },
        {
            name: '电源箱警报',
            type: 'bar',
            stack: '当天报警总数',
            data: [320, 302, 301, 334, 390, 330, 320],
            itemStyle: {
                color: '#fa8c69',
            }
        },
    ]
};