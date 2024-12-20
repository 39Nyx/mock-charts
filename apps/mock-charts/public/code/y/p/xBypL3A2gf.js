app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['词频出现次数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['产妇','剖腹产','跳楼','孩子','自杀','疼痛','顺产','下跪','女人','拒绝','生命','分娩','真相','心理','怕','脆弱','心寒','同情']
    },
    series: [
        {
            name: '词频出现次数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [167, 75, 67, 66, 64, 56, 52,42,26,24,21,17,14,13,7,7,5,5]
        },
    ]
};