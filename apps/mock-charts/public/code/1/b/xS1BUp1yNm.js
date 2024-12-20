option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['登录次数','平均登陆次数']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max: 150,
            axisLabel: {
                formatter: '{value}'
            }
        },
        
    ],
    series: [
        {
            name:'登录次数',
            type:'bar',
            itemStyle:{normal:{color:'#386AB7'}},
            data:[90,20,33,43,23, ],
        },
        {
            name:'平均登陆次数',
            type:'bar',
            itemStyle:{normal:{color:'#99cccc'}},
            data:[80, 33, 24, 35, 21,],
        },
        
    ]
};
