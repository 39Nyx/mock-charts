option = {
    title: {
        text: 'Awesome Chart'
    },
    backgroundColor:'#FFFFFF',
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    legend:{
        data:['提前留存率','提前留存率_上月','流失率','流失率_上月']
    },
    series: [{
        name:'提前留存率',
        color:'#7BC77B',
        type: 'line',
        data:[20, 12, 11, 34, 20, 30, 30]
    },
    {
        name:'提前留存率_上月',
        type: 'line',
        color:'#B3E3B3',
        data:[20, 82, 91, 23, 32, 33, 45]
    },
    {
        name:'流失率',
        type: 'line',
        color:'#D277A5',
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        name:'流失率_上月',
        type: 'line',
        color:'#FCBADC',
        data:[225, 132, 151, 294, 190, 230, 110]
    },]
};