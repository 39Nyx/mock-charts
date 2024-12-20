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
        data: ['专业','态度','明星蹭热度','鼓励','批评']
    },
    series : [
        {
            name: '奚梦瑶摔倒事件组成',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:160, name:'专业'},
                {value:260, name:'态度'},
                {value:130, name:'明星蹭热度'},
                {value:60, name:'鼓励'},
                {value:260, name:'批评'}
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
