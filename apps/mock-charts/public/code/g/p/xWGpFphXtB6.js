option = {
    title: {
        text: ''
    },
    xAxis: {
        data: ['1', '2', '3', '4', '5', '6','7']
    },
    yAxis: {},
    legend:{
        data:['累计流失率','累计流失率_时间进度','累计流失率_上月同期','累计流失用户数','累计流失用户数_时间进度','累计流失用户数_上月同期']
    },
    series: [{
        name:'累计流失率',
        color:'#FF3100',
        type: 'line',
        data:[210, 142, 121, 214, 240, 300, 310]
    },{
        name:'累计流失率_时间进度',
        color:'#FF8E73',
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
        data:[200, 220, 240, 260, 280, 300, 320]
    },{
        name:'累计流失率_上月同期',
        color:'#FFBBA7',
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    },{
        name:'累计流失用户数',
        color:'#0073c2',
        type: 'line',
        data:[140, 165, 171, 176, 180, 199, 210]
    },{
        name:'累计流失用户数_时间进度',
        color:'#57B0EE',
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
        type: 'line',
        data:[20, 82, 91, 24, 90, 30, 10]
    },{
        name:'累计流失用户数_上月同期',
                color:'#9CCCEE',
        type: 'line',
        data:[22, 18, 19, 23, 29, 33, 30]
    },]
};