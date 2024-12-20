option = {
    title: {
        text: '活动/展会期间人流统计',
        //subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        //boundaryGap: false,
        data: ['活动1','活动2','活动3','展会1','展会2','展会3','展会4']
    },
    yAxis: {
        name: '人流量',
        type: 'value',
        axisLabel: {
            //formatter: '{value} °C'
        }
    },
    series:  [{
        data: [820, 932, 1601, 934,834,534,1034,],
        type: 'line'
    }]
};
