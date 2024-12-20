
option = {
    title: {
        text: '学科交叉',
       
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            
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
        boundaryGap: [0, 0.01],
         axisLabel: {
            formatter: '{value}%'
        },
    },
    yAxis: {
        type: 'category',
        data: ['材料物理','材料化学','物理','材料','化学']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [130, 20, 8, 6, 4]
        },
       
    ]
};