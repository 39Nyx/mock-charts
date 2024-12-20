option = {
    title: {
        text: ''
    },
    backgroundColor:'#FFFFFF',
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    legend:{
        data:['日人均持有','月累计人均持有','本月人均持有目标','上月同期人均持有','上月同期累计人均持有']
        
    },
    series: [{
        name:'日人均持有',
        type: 'line',
        color:'#ADCCEC',
        data:[22, 132, 91, 34, 20, 33, 10]
    },
    {
        name:'月累计人均持有',
        color:'#FF3100',
        type: 'line',
        data:[21, 23, 28, 30, 30, 30, 32]
    },
    {
        name:'本月人均持有目标',
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
        color:'#FF8E73',
        type: 'line',
        data:[34, 34, 34, 34, 34, 34,34]
    },
    {
        name:'上月同期人均持有',
        color:'#D5E7FA',
        type: 'line',
        data:[75, 77, 21, 4, 85, 21, 6]
    },
    {
        name:'上月同期累计人均持有',
        color:'#FFB700',
        type: 'line',
        data:[90, 93, 101, 121, 132, 141, 156]
    }]
};