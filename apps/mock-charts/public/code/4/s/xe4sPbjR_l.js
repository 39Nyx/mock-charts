option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
        data: [820, 932, 901, 934, '-', '-', 1320],
        type: 'line',
        smooth:false,
        z:-1,
        connectNulls: true,
        lineStyle:{
            type:'dashed',
            color:'#999',
            width:1.5,
            opacity:0.5
        }
    },
        {
        data: [820, 932, 901, 934, '-', '-', 1320],
        type: 'line',
        z:10,
        smooth:false,
        // connectNulls: true,
        lineStyle:{
            color:"#1991fc",
            // type:'dashed'
            width:2
        }
    },
    
    ]
};
