app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
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
        data:['计划产量','已完成','次品','能源费用']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1日','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            interval: 5,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name:'计划产量',
            type:'bar',
            data:[9.0, 54.9, 71.0, 123.2, 125.6, 116.7, 135.6, 162.2, 132.6, 120.0, 116.4, 13.3]
        },
        {
            name:'已完成',
            type:'bar',
            stack: '产量',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'次品',
            type:'bar',
              stack: '产量',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 5.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'能源费用',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
