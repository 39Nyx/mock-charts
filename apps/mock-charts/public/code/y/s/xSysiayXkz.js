app.title = '时间对比';

var colors = ['#5793f3', '#d14a61', '#675bba'];

var myJson = {
    "title": "图表名称",
    "xAxisData": [
        ["2000", "2001", "2002"],
        ["2010", "2011", "2012"]
    ],
    "yAxisName":["下载量"],
    "series": [{
        "name": "2000-01至2002-12",
        "data": [0, 236, 325]
    }, {
        "name": "2010-01至2012-12",
        "data": [700, 780, 800]
    }]
}

option = {
    color: colors,

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: [myJson.series[0].name, myJson.series[1].name]
    },

    xAxis: [{
        //这个是在下面的X轴
        type: 'category',
        axisTick: {
            alignWithLabel: true //让X轴lable和坐标轴刻度对其
        },
        axisLine: {
            onZero: false, //让X轴可以到顶上去
            lineStyle: {
                color: colors[0]
            }
        },
        axisPointer: { //十字指示器对应的值
            label: {
                formatter: function(params) {
                    return params.value +
                        (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
            }
        },
        data: myJson.xAxisData[0]
    }, {
        //这个是在上面的X轴
        type: 'category',
        axisTick: {
            alignWithLabel: true //让X轴lable和坐标轴刻度对其
        },
        axisLine: {
            onZero: false, //让X轴可以到顶上去
            lineStyle: {
                color: colors[1]
            }
        },
        axisPointer: { //十字指示器对应的值
            label: {
                formatter: function(params) {
                    return params.value +
                        (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
            }
        },
        data: myJson.xAxisData[1]
    }],
    yAxis: [{
        type: 'value',
     
    }],
    series: [{
        name: myJson.series[0].name,
        type: 'line',
        xAxisIndex: 0,
        itemStyle : { normal: {label : {show: true,formatter:'{c}'}}},//显示数字在折线上
        symbol: 'diamond', //设置实心的点
        data: myJson.series[0].data,
    }, {
        name: myJson.series[1].name,
        type: 'line',
        itemStyle : { normal: {label : {show: true,formatter:'{c}'}}},//显示数字在折线上
         xAxisIndex: 1,
        symbol: 'diamond', //设置实心的点
        data: myJson.series[1].data,
    }]
};