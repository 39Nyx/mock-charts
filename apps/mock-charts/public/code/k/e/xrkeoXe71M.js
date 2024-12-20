var colors = ['#5793f3', '#d14a61', '#675bba'];

var myJson = {
    "title": "图表名称",
    "xAxisData": [
        ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]
    ],
    "yAxisName": ["下载量"],
    "series": [{
        "name": "本校下载量",
        "data": [209, 236, 325, 439, 507, 576, 722, 879, 938, 1364, 1806, 1851, 1931, 2198, 2349, 2460, 2735]
    }, {
        "name": "北京大学下载量",
        "data": [70, 78, 80, 81, 82, 83, 84, 85, 6, 45, 32, 2, 4, 13, 6, 4, 11]
    }]
}

option = {
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',

        }
    },
    legend: {
        data: [myJson.series[0].name, myJson.series[1].name]
    },

    xAxis: [{

        axisTick: {
            alignWithLabel: true //X轴lable和刻度居中对其
        },
        data: myJson.xAxisData[0]
    }],
    yAxis: {
        type: 'value',
        position: 'left',
        axisLabel: {
            formatter: '{value}'
        },
        name: myJson.yAxisName[0],
    },
    series: [{
        name: myJson.series[0].name,
        type: 'line',
        ype: 'line',
        symbol: 'diamond',
        data: myJson.series[0].data

    }, {
        name: myJson.series[1].name,
        type: 'line',
        ype: 'line',
        symbol: 'diamond',
        data: myJson.series[1].data

    }]
};