option = {
    title: {
        text: 'echarts简单实例'
    },
    tooltip: {},
    legend: { // 图案
        data: ['销量']
    },
    xAxis: {
        data: ['香蕉', '苹果', '梨子', '西瓜', '橙子']
    },
    yAxis: {},
    series: [{ // 系列列表， 每个系列通过type来决定图表类型
        name: '销量',
        type: 'bar',
        data: [5, 10, 30, 40, 20]
    }]

}