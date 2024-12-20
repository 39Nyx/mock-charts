app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['爱情','动画','动作','惊悚','剧情','科幻','奇幻','喜剧','灾难','战争']
    },
    series: [
        {
            name:'各类型电影总票房比较',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:520947, name:'爱情'},
                {value:513440, name:'动画'},
                {value:2738861, name:'动作'},
                {value:31510, name:'惊悚'},
                {value:240932, name:'剧情'},
                {value:1224820,name:'科幻'},
                {value:1056945,name:'奇幻'},
                {value:1927314,name:'喜剧'},
                {value:44745,name:'灾难'},
                {value:246927,name:'战争'},
            ]
        }
    ]
};
