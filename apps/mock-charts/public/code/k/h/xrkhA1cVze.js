option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Others','PRH','Private tenants','Owner-occupiers']
    },
    series: [
        {
            name:'Poor households - housing characteristic',
            type:'pie',
            radius: ['40%', '70%'],
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
                {value:1074, name:'Others'},
                {value:15060.5, name:'PRH'},
                {value:1130.2, name:'Private tenants'},
                {value:23995.3, name:'Owner-occupiers'}
            ]
        }
    ]
};
