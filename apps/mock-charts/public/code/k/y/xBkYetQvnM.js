option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{b} : {c}"
    },
    legend: {
        data: ['工种人数'],
        align: 'right',
        right: 10
    },
    xAxis: [{
        //type: 'category', // 默认值
        name: '工种',
        boundaryGap: true,
        data: ["项目副经理", "机管员", "施工员", "资料员", "安全员", "其它工种"]
    }],
    yAxis: [{
        //type: 'value', // 默认值
        name: '人数',
        minInterval: 1 // 横坐标值为整数
    }],
    series: [{
        name: '工种人数',
        type: 'bar',
        data: [2, 1, 1, 0, 0, 0],
        itemStyle: {
            normal: {
                color: '#00CCFF',
                label: {
                    show: true,
                    position: 'top',
                    color: '#999999',
                    formatter: '{c}'
                }
            }
        }
    }]
};