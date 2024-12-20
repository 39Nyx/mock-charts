option = {
    title: {
        text: ''
    },
    legend: {
        data:['流失用户数_日','人均流失金额_日','流失金额_日']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    backgroundColor:'#FFFFFF',
    yAxis: {},
    series:
    [
    {
        name:'流失用户数_日',
        type: 'line',
        data:[38,142,146,168,188,190,454],
        color:'#0073c2'
    },
    {
        name:'人均流失金额_日',
        type: 'line',
        data:[420, 500, 600, 700, 230, 100,150],
        color:'#ff2600'
    },
    
    {
        name:'流失金额_日',
        type: 'bar',
        data:[540, 587, 899, 464, 590, 540, 620],
        color:'#FFD8D6'
    }
    ]
};