option = {
    title: {
        text: ''
    },
    legend: {
        data:['线_本月累计','线_上月同期累计','线_目标','柱_本月','柱_上月同期']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    backgroundColor:'#FFFFFF',
    yAxis: {},
    series:
    [
    {
        name:'线_本月累计',
        type: 'line',
        data:[38,142,146,168,188,190,454],
        color:'#FF3100'
    },
    {
        name:'线_上月同期累计',
        type: 'line',
        data:[420, 500, 600, 700, 800, 900, 950],
        color:'#FFB700'
    },
    {
        name:'线_目标',
        type: 'line',
        data:[440, 532, 610, 740, 800, 910, 960],
        color:'#FF8E73',
        smooth:false, 
        itemStyle:
        {
            normal:{
                lineStyle:
                {
                width:3,
                type:'dotted'
                }
                   }
         }
    },
    {
        name:'柱_上月同期',
        type: 'bar',
        data:[1240, 1187, 1199, 1264, 1390, 1340, 1320],
        color:'#D8F3FF'
    },
    {
        name:'柱_本月',
        type: 'bar',
        data:[1240, 1187, 1199, 1264, 1390, 1340, 1320],
        color:'#A4E4FF'//0098d9
    }
    ]
};