app.title = '热度趋势';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['9.11','9.12','9.13','9.14','9.15']
    },
    series: [
        {
            name:'9.11',
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
                {value:633, name:'9.11'},
                {value:325, name:'9.12'},
                {value:3333, name:'9.13'},
                {value:3000, name:'9.14'},
                {value:1250, name:'9.15'}
            ]
        }
    ]
};
