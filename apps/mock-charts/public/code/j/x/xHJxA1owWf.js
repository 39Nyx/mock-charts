option = {
    title : {
        text: '新浪微博评论主体分析',
        subtext: ' ',
        x:'center'
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['支持林心如','指责林心如','指责网友','指责周杰','中立态度']
    },
    series: [
        {
            name:'访问来源',
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
                {value:4, name:'支持林心如'},
                {value:52, name:'指责林心如'},
                {value:18, name:'指责网友'},
                {value:6, name:'指责周杰'},
                {value:20, name:'中立态度'}
            ]
        }
    ]
};