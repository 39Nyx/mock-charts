option = {
    backgroundColor: '#051A49',
    tooltip: { // 提示框组件
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['男', '女'],
        x: 'center',
        itemGap: 40,
        bottom: 10,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
        show: false // 网格边框是否显示，上和右边框 
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [{
        type: 'category',
        data: ['60-65岁', '65-70岁', '70-75岁', '75-80岁', '80-85岁', '85-90岁', '90岁以上'],
        axisLine: {
            lineStyle: {
                color: '#0C4482'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        name: '人',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            formatter: '{value}',
            color: '#fff',
            fontSize: 14
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0C4482',
                width: 2
            }
        }
    }],

    series: [{
            name: '男',
            type: 'bar',
            color: '#00BFFF',
            stack: '总量', // 堆叠图
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00FFE6'
                    }, {
                        offset: 0.8,
                        color: '#007CC6'
                    }], false)
                }
            },
            data: [1567, 977, 1742, 1431, 1636, 1447, 171]
        },
        {
            name: '女',
            type: 'bar',
            color: '#DC143C',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f7734e'
                    }, {
                        offset: 0.8,
                        color: '#e12945'
                    }], false)
                }
            },
            data: [2609, 1162, 2942, 5174, 5114, 5065, 391]
        }
    ]
};