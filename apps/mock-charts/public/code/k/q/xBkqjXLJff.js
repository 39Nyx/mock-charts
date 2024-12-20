option = {
    title : {
        text: '奚梦瑶摔倒事件',
        subtext: '受众分析',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['粉丝','媒体','明星','观众','本人']
    },
    series : [
        {
            name: '奚梦瑶摔倒事件组成',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:252, name:'粉丝'},
                {value:500, name:'媒体'},
                {value:188, name:'明星'},
                {value:625, name:'观众'},
                {value:1, name:'本人'}
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
