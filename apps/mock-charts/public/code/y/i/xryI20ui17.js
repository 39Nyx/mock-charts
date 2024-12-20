var itemStyle={
                normal: {
                     color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                    
                },
                emphasis: {
                   color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                }
            }
            
option = {
     legend: {data: ['预报','实测']},
    xAxis: {
        data: ['1h', '2h', 'T1', 'now', 'T2', '3h', '4h'],
        // axisTick: { alignWithLabel: true},
    },
    yAxis: [{
        name: 'wO',
    },
    {
        name: 'P',
        inverse: true,
        nameLocation: 'start'
    }],
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310],
        markArea: {data: [[{xAxis:'T1',yAxis:0},{xAxis:'T2',yAxis:'350'}]]}
    },
    {
        name: '实测',
        type: 'bar',
        itemStyle,
        yAxisIndex: 1,
        data:[{name:'1h',value:220}, 
        {name:'2h',value:182},
        {name:'T1',value:191},
        {name:'now',value:234}]
    },
    {
        name: '预报', type: 'bar',yAxisIndex: 1,data:[]
    }]
};