option = {
    title : {
        text: '微博讨论对象',
       
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['舆论','司法','媒体','舆论与司法关系','事件人物']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:59, name:'舆论'},
                {value:42, name:'司法'},
                {value:18, name:'媒体'},
                {value:45, name:'舆论与司法关系'},
                {value:5, name:'事件人物'}
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
