option = {
    backgroundColor:'#fff',
    title:{
        text:'新办率'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 50,
        top:30,
        data: ['新办率']
    },
    series: [{
        name: '新办率',
        type: 'pie',
        radius: ['60%', '70%'],
        color:'#00EE76',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 1573,
            name: '新办事项数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 50
                    }
                }
            }
        }, {
            value: 8005,
            name: '其他事项数',
            label: {
                normal: {
                    formatter: '\n新办率',
                    textStyle: {
                        color: '#555',
                        fontSize: 20
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