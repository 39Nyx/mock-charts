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
        data:['博客数量']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '每月数量',
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
                formatter: '{value} 篇'
            }
        },
      
    ],
    series: [
        {
            name:'发布数',
            type:'bar',
            data:[0.0, 25.0, 33.0, 23.0, 6.0, 14.0, 44.0, 32.0, 12.0, 0.0, 0.0, 0.0, 0.0]
        },
      
    ]
};
