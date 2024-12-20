app.title = '折柱混合';

option = {
    color:['#5bcbfe','#fcc02c'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: "item",
            crossStyle: {
                color: '#999'
            }
        }
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine:{
                lineStyle:{
                    color:'#9ac4dc'
                }
            },
            splitLine:{
                show:false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '产生量（万吨）',
            splitNumber: 10,
            axisLine:{
                lineStyle:{
                    color:'#9ac4dc'
                }
            },
            axisLabel: {
                formatter: '{value}',
                color:'#9ac4dc'
            },
            splitLine:{
                show:false
            },
            axisTick:false
        },
        {
            type: 'value',
            name: '企业数量（家）',
            splitNumber: 10,
            axisLine:{
                lineStyle:{
                    color:'#9ac4dc'
                }
            },
            axisLabel: {
                formatter: '{value}',
                color:'#9ac4dc'
            },
            splitLine:{
                show:false
            },
            axisTick:false
        }
    ],
    series: [
        {
            name:'产生量（万吨）',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'企业数量（家）',
            type:'line',
            yAxisIndex: 1,
            symbol:'circle',
            symbolSize:8,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
