option = {
    title: {
        text: '饼图',
        x: 'center'
    },
    color: ['#63B8FF', '#708090',],
    series: [{
        name: '设备占比',
        type: 'pie',
        radius:['50%','70%'] ,
        center: ['50%', '40%'],
        label: {
            normal: {
                show:true,
                position: 'inside',
                formatter: "{b}:{d}%",
                textStyle:{
                    fontSize:'14',
                    color:'#EEEE40',
                    fontFamily:'微软雅黑',
                    fontWeight:'bold',
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        data: [{
            value: 1890,
            name: 'PC'
        }, {
            value: 310,
            name: '无线'
        }, 
        {
            value: 1890,
            name: 'keep'
        },],
    }],
};