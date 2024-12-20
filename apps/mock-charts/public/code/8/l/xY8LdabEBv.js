// Generate data.
data = [];
for (var seriesIndex = 0; seriesIndex < 5; seriesIndex++) {
    var seriesData = [];
    for (var i = 0; i < 4; i++) {
        var cate = [];
        for (var j = 0; j < 100; j++) {
            cate.push(Math.random() * 200);
        }
        seriesData.push(cate);
    }
    data.push(echarts.dataTool.prepareBoxplotData(seriesData));
}


option = {
    title: {
        text: 'Multiple Categories',
        left: 'center',
    },
    legend: {
        y: '10%',
        data: ['全部组', '对等组', '方法学组']
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10%',
        top: '20%',
        right: '10%',
        bottom: '15%'
    },
    yAxis: {
        type: 'category',
        data: data[0].axisData,
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
            show: true
        },
        axisLabel: {
            formatter: '批号 {value}'
        },
        splitLine: {
            show: false
        }
    },
    xAxis: {
        type: 'value',
        name: 'Value',
        min: 0,
        max: 300,
        position: 'top',
        splitArea: {
            show: false
        }
    },
    series: [{
            name: '全部组',
            type: 'boxplot',
            data: data[0].boxData,
            tooltip: {
                formatter: formatter
            }
        },
        {
            name: '对等组',
            type: 'boxplot',
            data: data[1].boxData,
            tooltip: {
                formatter: formatter
            }
        },
        {
            name: '方法学组',
            type: 'boxplot',
            data: data[2].boxData,
            tooltip: {
                formatter: formatter
            }
        }
    ]
};

function formatter(param) {
    return [
        'Experiment ' + param.name + ': ',
        'upper: ' + param.data[0],
        'Q1: ' + param.data[1],
        'median: ' + param.data[2],
        'Q3: ' + param.data[3],
        'lower: ' + param.data[4]
    ].join('<br/>')
}