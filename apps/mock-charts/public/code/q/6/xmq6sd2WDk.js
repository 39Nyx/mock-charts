option = {
    title: {
        text: ''
    },
    legend: {
        data:['申购','到账','日新增存量','上月同期日新增存量','月累计新增存量','时间进度','上月同期月累计新增存量']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    backgroundColor:'#FFFFFF',
    yAxis: {},
    series:
    [
    {
        name:'申购',
        type: 'line',
        data:[400,320,434,500,220,280,300],
        color:'#ADCCEC'
    },
    {
        name:'到账',
        type: 'line',
        data:[420, 500, 600, 700, 800, 900, 950],
        color:'#FFBBA7'
    },
    {
        name:'时间进度',
        type: 'line',
        data:[300, 300, 300, 300, 300, 300, 300],
        color:'#FF8E73',
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
        name:'上月同期日新增存量',
        type: 'bar',
        data:[240, 187, 199, 264, 390, 340, 320],
        color:'#D8F3FF'
    },
    {
        name:'日新增存量',
        type: 'bar',
        data:[240, 187, 199, 264, 390, 340, 320],
        color:'#A4E4FF'//0098d9,CC8CBB
    },
    {
        name:'月累计新增存量',
        type: 'line',
        data:[32,122,116,138,148,150,114],
        color:'#FF3100'
    },
    {
        name:'上月同期月累计新增存量',
        type: 'line',
        data:[138,142,146,168,188,190,180],
        color:'#FFB700'
    }
    ]
};