option = {
    backgroundColor:'#FFF',
    title:{
        text:'申请事项办结率'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 50,
        top:30,
        data: ['申请事项办结数']
    },
    series: [{
        name: '申请事项办结数',
        type: 'pie',
        radius: ['30%', '40%'],
        center:['20%','30%'],
        color:'#33CCFF',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 8005,
            name: '申请事项已办结数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 30
                    }
                }
            }
        }, {
            value:888 ,
            name: '申请事项未办结数',
            label: {
                normal: {
                    formatter: '\n申请事项办结率',
                    textStyle: {
                        color: '#555',
                        fontSize: 16
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