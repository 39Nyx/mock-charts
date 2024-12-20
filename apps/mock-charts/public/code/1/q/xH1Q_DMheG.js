app.title = '2016年北京空气质量统计图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['优','良','轻度污染','中度污染','严重污染','重度污染']
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
                {value:68, name:'优'},
                {value:130, name:'良'},
                {value:78, name:'轻度污染'},
                {value:51, name:'中度污染'},
                {value:30, name:'严重污染'},
                {value:9, name:'重度污染'}
            ]
        }
    ]
};