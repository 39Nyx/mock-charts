option = {
    title: {
        text: ''
    },
    xAxis: {
        data: ['1', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    legend:{
        data:['提前留存用户数','未提前留存_流失用户数','未提前留存_留存用户数','未选择用户数','滞后留存用户数','流失率','上月同期流失率']
    },
        backgroundColor:'#FFFFFF',
    yAxis: {},
    series: [{
        name:'提前留存用户数',
        type: 'bar',
        stack: '新用户',
        color:'#ffc000',
        data:[20, 82, 91, 34, 90, 30, 10]
    },
    {
        name:'未提前留存_流失用户数',
        type: 'bar',
        stack: '新用户',
        color:'#aaaaaa',//e87c25
        data:[220, 180, 190, 230, 290, 330, 301]
    },
    {
        name:'未提前留存_留存用户数',
        type: 'bar',
        stack: '新用户',
        color:'#0098d9',
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        name:'未选择用户数',
        type: 'bar',
        stack: '新用户',
                color:'#00ad4e',//e87c25
        data:[520, 482, 391, 234, 190, 30, 10]
    },
    {
        name:'滞后留存用户数',
        type: 'bar',
        stack: '新用户',
                color:'#A0DBF5',//e6b600,F3CD3D
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        name:'流失率',
        type: 'line',
                color:'#FF6C51',//2b821d,c6b38e,005eaa
        data:[1132, 880, 561,504, 400, 330, 231]
    },
    ,
    {
        name:'上月同期流失率',
        type: 'line',
                color:'#FFA392',//2b821d,c6b38e,005eaa
        data:[1122, 860, 521,454, 300, 230, 200]
    }]
};