option = {
    title: {
        text: '柱状堆积配色'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
        backgroundColor:'#FFFFFF',
    yAxis: {},
    series: [{
        name:'新用户',
        type: 'bar',
        stack: '新用户',
        color:'#c12e34',
        data:[20, 82, 91, 34, 90, 30, 10]
    },
    {
        name:'首投老用户',
        type: 'bar',
        stack: '新用户',
        color:'#e87c25',
        data:[22, 18, 19, 23, 29, 33, 31]
    },
    {
        name:'留存用户',
        type: 'bar',
        stack: '新用户',
        color:'#0098d9',
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        name:'流失用户',
        type: 'bar',
        stack: '新用户',
                color:'#aaaaaa',
        data:[-220, -182, -191, -234, -290, -330, -310]
    },
    {
        name:'回流用户',
        type: 'bar',
        stack: '新用户',
                color:'#ffc000',//e6b600,F3CD3D
        data:[220, 182, 191, 234, 290, 330, 310]
    },
    {
        name:'<30天',
        type: 'bar',
        stack: '<30天',
                color:'#00ad4e',//2b821d,c6b38e,005eaa
        data:[22, -18, 91, -34, 90, -30, 31]
    }]
};