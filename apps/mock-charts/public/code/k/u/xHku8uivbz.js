option = {
    title : {
        text: '若干条评论的评价对象分布',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['产妇','家属','医院','双方（家属和医院）','其它']
    },
    series: [
        {
            name:'评价对象',
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
                {value:31, name:'产妇'},
                {value:132, name:'家属'},
                {value:85, name:'医院'},
                {value:29, name:'双方（家属和医院）'},
                {value:23, name:'其它'}
            ]
        }
    ]
};