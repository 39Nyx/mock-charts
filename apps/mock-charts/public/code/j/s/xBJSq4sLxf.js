app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['华北地区','东北地区','华东地区','中南地区','西南地区','西北地区']
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
                {value:999, name:'华北地区'},
                {value:578, name:'东北地区'},
                {value:2658, name:'华东地区'},
                {value:1887, name:'中南地区'},
                {value:709, name:'西南地区'},
                {value:394, name:'西北地区'}
            ]
        }
    ]
};
