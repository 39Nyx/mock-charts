option = {
    title: {
        text: ''
    },
    backgroundColor:'#FFFFFF',
    xAxis: {
        data: ['1', '2', '3', '4', '5', '6','7']
    },
    yAxis: {},
    legend:{
        data:['累计人均流失金额','目标','累计人均流失金额_上月同期']
    },
    series: [{
        name:'累计人均流失金额',
        color:'#FF3100',
        type: 'line',
        data:[210, 142, 121, 214, 240, 300, 310]
    },{
        name:'目标',
        color:'#FF3100',
        type: 'line',
        itemStyle:
        {
            normal:{
                lineStyle:
                {
                width:2,
                type:'dotted'
                }
                   }
         },
        data:[200, 200, 200, 200, 200, 200, 200]
    },{
        name:'累计人均流失金额_上月同期',
        color:'#FFBBA7',
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};