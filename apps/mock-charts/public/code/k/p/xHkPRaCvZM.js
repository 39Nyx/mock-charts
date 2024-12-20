app.title = '舆论评价客体情感倾向个数图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['支持家属','反对家属','支持医院','反对医院','其他']
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
                {value:18, name:'支持家属'},
                {value:89, name:'反对家属'},
                {value:10, name:'支持医院'},
                {value:159, name:'反对医院'},
                {value:24, name:'其他'}
            ]
        }
    ]
};
