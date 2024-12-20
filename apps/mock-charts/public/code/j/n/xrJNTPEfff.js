option = {
    title : {
        text: '“港中大前学生会长辱华”事件情感分析对象',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['政府','校方','网民','女学生','港独分子']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:63, name:'政府'},
                {value:41, name:'校方'},
                {value:1, name:'网民'},
                {value:21, name:'女学生'},
                {value:174, name:'港独分子'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0)'
                }
            }
        }
    ]
};
