option = {
    backgroundColor:'#FFF',
    title:{
        text:'申请事项受理率'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 50,
        top:30,
        data: ['申请事项受理数']
    },
    series: [{
        name: '申请事项受理数',
        type: 'pie',
        radius: ['15%', '23%'],
        center:['15%','22%'],
        color:'#33CCFF',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 8005,
            name: '受理事项数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            }
        }, {
            value:888 ,
            name: '不受理事项数',
            label: {
                normal: {
                    formatter: '\n申请事项受理率',
                    textStyle: {
                        color: '#555',
                        fontSize: 10
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    }]
};