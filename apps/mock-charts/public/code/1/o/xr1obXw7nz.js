option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#F8F8F8', '#fff']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#1178C9'
            }
        },
        axisLabel: {
            color: '#666'
        }
    },

    yAxis: {
        type: 'category',
        data: ['其他', '交通运输类', '人员聚集类', '建筑施工类', '危化品类', '非煤矿山类', '烟花爆竹类', '工矿商贸类'],
        axisTick: {
            show: false
        },
           axisLine: {
            lineStyle: {
                color: '#1178C9'
            }
        },
         axisLabel: {
            color: '#666'
        }

    },
    series: [{
        name: '企业数量',
        type: 'bar',
        data: [320, 302, 50, 334, 390, 330, 320, 899],
        barWidth: '50%',
        itemStyle: {
            normal: {
                color: function(value) {
                    var colorList = [
                        '#5C5F6B',
                        '#0070D2',
                        '#8E4AED',
                        '#8B572A',
                        '#E93414',
                        '#1F1F1F',
                        '#B91D1C',
                        '#27972E'
                    ]
                    return colorList[value.dataIndex]

                }
            }
        },
    }]
};