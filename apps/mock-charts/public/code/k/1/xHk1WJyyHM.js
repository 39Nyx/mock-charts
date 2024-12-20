option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ["农村供电所", "城市营业厅"]
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ["大客户室", "渭北", "高新", "三星", "阎良", "浐灞", "户县", "临潼", "蓝田", "长安"]
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '农村供电所',
            type: 'bar',
            stack: '营业厅数量',
            data: [0, 4, 1, 6, 9, 12, 19, 21, 23, 29]
        },
        {
            name: '城市营业厅',
            type: 'bar',
            stack: '营业厅数量',
            data: [1, 1, 5, 2, 1, 1, 1, 1, 1, 1]
        },
    ]
};