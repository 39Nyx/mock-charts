option = {
    title: {
        text: '产邀配色'
    },
    legend: {
        data:['本月累计ROI','日ROI','本月ROI目标','日CPS','本月累计CPS','日人均持有','本月累计人均持有']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    backgroundColor:'#FFFFFF',
    yAxis: {},
    series:
    [
    {
        name:'日CPS',
        type: 'line',
        data:[400,320,434,500,220,280,300],
        color:'#ADCCEC'
    },
    {
        name:'本月累计CPS',
        type: 'line',
        data:[420, 500, 600, 700, 800, 900, 950],
        color:'#4b83bf'
    },
    {
        name:'本月ROI目标',
        type: 'line',
        data:[300, 300, 300, 300, 300, 300, 300],
        color:'#723761',
        smooth:false, 
        itemStyle:
        {
            normal:{
                lineStyle:
                {
                width:2,
                type:'dotted'
                }
                   }
         }
    },
    {
        name:'日ROI',
        type: 'bar',
        data:[240, 187, 199, 264, 390, 340, 320],
        color:'#FEDFEF'//0098d9,CC8CBB
    },
     {
        name:'本月累计ROI',
        type: 'bar',
        data:[240, 187, 199, 264, 390, 340, 320],
        color:'#FCBADC'
    },
    {
        name:'日人均持有',
        type: 'line',
        data:[32,122,116,138,148,150,114],
        color:'#FF9F88'
    },
    {
        name:'本月累计人均持有',
        type: 'line',
        data:[138,142,146,168,188,190,180],
        color:'#E93D14'
    }
    ]
};