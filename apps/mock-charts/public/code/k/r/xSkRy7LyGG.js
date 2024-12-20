option = {
    title : {
        text: '奚梦瑶摔倒事件',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['微博','贴吧','搜狐']
    },
    series : [
        {
            name: '奚梦瑶摔倒事件组成',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:520, name:'微博'},
                {value:333, name:'贴吧'},
                {value:188, name:'搜狐'},
               
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
