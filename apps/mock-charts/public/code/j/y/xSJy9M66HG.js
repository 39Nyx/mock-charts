option = {
    backgroundColor:'#FFFFFF',
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
        data:['违规数','同比','环比']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '违规数（家）',
            min: 0,
            max: 450,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '同比/环比（%）',
            min: -30,
            max: 30,
            interval: 5,
            position: 'right',
            axisLabel: {
                formatter: '{value}',
            }
        }
    ],
    series: [
        {
            name:'违规数',
            type:'bar',
            itemStyle:{normal:{color:'#386AB7'}},
            data:[200, 240, 220, 210, 230, 290, 310, 340,320, 300,  250, 210],
        },
        {
            name:'同比',
            type:'line',
            yAxisIndex: 1,
            itemStyle:{normal:{color:'#99cccc'}},
            data:[4.6, 3.7, 2.4, -4.4, 1.2, 3.2, 6, 3.2, -0.1, 2.4, 0.3, 2.1]
        },
        {
            name:'环比',
            type:'line',
            yAxisIndex: 1,
            itemStyle:{normal:{color:'#ff9933'}},
            data:[6, 20, -8, -4,9.5,26,10.3,9.6,-5.8,-6.2,-16.6,-16]
        }
    ]
};
