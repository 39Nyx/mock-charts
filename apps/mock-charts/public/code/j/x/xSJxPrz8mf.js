option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['微型企业', '中小型企业', '中大型企业', '大型企业']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['开业时间一年', '开业时间三年', '开业时间五年', '开业时间十年', '开业时间十年以上']
    },
    series: [{
        barWidth: 60,
        name: '微型企业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true
            }
        },
        data: [1, 2, 2, 1, 1, 2, 2]
    }, {
        name: '中小型企业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
            }
        },
        data: [2, 1, 1, 2, 2, 3, 4]
    }, {
        name: '中大型企业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true
            }
        },
        data: [3, 2, 1, 3, 2, 1, 1]
    }, {
        name: '大型企业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0],
            },

        },
        data: [2, 2, 1, 1, 2, 2, 3]
    }]
};