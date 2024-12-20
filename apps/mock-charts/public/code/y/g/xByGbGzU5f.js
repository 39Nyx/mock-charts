

option = {
    backgroundColor: '#fff',
    title: {
        text: '检查覆盖与违规情况'
    },
    tooltip: {},

    series: [{
        name: '检查覆盖与违规情况',
        type: 'pie',
        radius: ['18%', '32%'],
        center: ['20%', '20%'],
        color: '#FF4500',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 28,
            name: '检查违规数',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>计算公式:占比率=({b}/检查覆盖总数)*100%<br/> 检查违规率 : {c}%"
            }
        }, {
            value: 72,
            name: '检查覆盖率',
            label: {
                normal: {
                    formatter: '\检查覆盖与违规情况',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
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