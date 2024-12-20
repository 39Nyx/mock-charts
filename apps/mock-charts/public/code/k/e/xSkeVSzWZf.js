option = {
     title: {
        text: '对所论关点的具体态度',
        x:'left'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['支持', '反对','中立']
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
        data: ['舆论','司法','媒体','舆论和司法','事件人物本身']
    },
    series: [
        {
            name: '支持',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [36, 34, 5, 26, 3]
        },
        {
            name: '反对',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [32, 19, 27, 35, 0]
        },
        {
            name: '中立',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [19, 27, 4, 26, 7]
        }
       
    ]
};