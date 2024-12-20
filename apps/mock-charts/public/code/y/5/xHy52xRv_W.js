option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['BM目标', 'BM实际','PO实际完成','FI实际','结转','FI实际完成','结转1']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['BM目标','BM实际','PO实际完成','FI实际','FI实际完成']
    },
    series: [
        {
            name: 'BM目标',
            type: 'bar',
            stack: '总量',
            //itemStyle:{normal:{color:'#ff0000'}},
            data: [320, '-', '-', '-', '-']
        },
        {
            name: 'BM实际',
            type: 'bar',
            stack: '总量',
            //itemStyle:{normal:{color:'#ff0000'}},
            data: ['-', 132, '-','-', '-']
        },
        {
            name: 'PO实际完成',
            type: 'bar',
            stack: '总量',
            data: ['-', '-', 234,'-','-']
        },
        {
            name: 'FI实际',
            type: 'bar',
            stack: '总量',
            data: ['-', '-', '-', 154, '-']
        },
        {
            name: '结转',
            type: 'bar',
            stack: '总量',
            data: ['-', '-', '-', 234, '-']
        },
        {
            name: 'FI实际完成',
            type: 'bar',
            stack: '总量',
            data: ['-', '-', '-', '-', 1290]
        },
        {
            name: '结转1',
            type: 'bar',
            stack: '总量',
            data: ['-', '-', '-', '-', 190]
        },
    ]
};