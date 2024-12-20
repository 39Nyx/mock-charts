option = {
    
    title: {
        text: '矿产资源（万吨）',
        subtext: ''
    },
    backgroundColor: 'rgba(255,255,255,0)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
            toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
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
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['硅矿','硫铁矿','铝土矿','铁矿','煤矿']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [2,5,12,15,28]
        }
    ]
};
