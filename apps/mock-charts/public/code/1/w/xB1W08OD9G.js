option = {
    backgroundColor:'#fff',
    title:{
        text:'日常监管检查情况分析'
    },
    tooltip: {
       
    },
    
    series: [{
        name: '检查违规率',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['50%','50%'],
        color:'#FF4500',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 150,
            name: '违法违规主体数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a} <br/>计算公式:检查违规率=({b}/检查主体数)*100%<br/> 违法违规主体数 : {c}"
            }
        }, {
            value: 1000,
            name: '未发现违法违规主体数',
            label: {
                normal: {
                    formatter: '\n检查违规率',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#E6E6E6'
                },
                emphasis: {
                    color: '#E6E6E6'
                }
            },
        }]
    }]
};