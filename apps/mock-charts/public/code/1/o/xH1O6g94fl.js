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
                {value:1778.2, name:'Others'},
                {value:71128, name:'PRH'},
                {value:3870.2, name:'Private tenants'},
                {value:27823.6, name:'Owner-occupiers'}
            ]
        }
    ]
};
