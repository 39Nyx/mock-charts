option = {
    title : {
        text: '环保与收入划分城市类型',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['吸霾吃土','吸霾捞金','环保吃土','环保捞金']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:10, name:'吸霾吃土'},
                {value:4, name:'吸霾捞金'},
                {value:11, name:'环保吃土'},
                {value:6, name:'环保捞金'},
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
