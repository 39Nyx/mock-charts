app.title = '环形图';

option = {
    title: {
        text: '数据来源',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['微博','网易','知乎']
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
                {value:100, name:'微博'},
                {value:100, name:'网易'},
                {value:100, name:'知乎'},
            ]
        }
    ]
};
