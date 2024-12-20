option = {
    title: {
        text: ''
    },
    legend: {
        data:['最后一笔定期到账用户人均持有','提前留存用户人均持有','流失用户人均持有','流失/整体人均持有占比','上月同期流失/整体人均持有占比']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    backgroundColor:'#FFFFFF',
    yAxis: {},
    series:
    [
    {
        name:'最后一笔定期到账用户人均持有',
        type: 'line',
        data:[38,142,146,168,188,190,454],
        color:'#0073c2'
    },
    {
        name:'提前留存用户人均持有',
        type: 'line',
        data:[220, 300, 400, 500, 600, 700, 750],
        color:'#7BC77B'
    },
    {
        name:'流失用户人均持有',
        type: 'line',
        data:[440, 532, 610, 740, 800, 910, 960],
        color:'#ff2600'
    },
    {
        name:'上月同期流失/整体人均持有占比',
        type: 'bar',
        data:[1240, 1187, 1199, 1264, 1390, 1340, 1320],
        color:'#FEDFEF'//0098d9,CC8CBB
    },
    {
        name:'流失/整体人均持有占比',
        type: 'bar',
        data:[1240, 1187, 1199, 1264, 1390, 1340, 1320],
        color:'#FFE092'
    }
    ]
};