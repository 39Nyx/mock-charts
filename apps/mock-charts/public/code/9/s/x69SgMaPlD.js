option = {
    backgroundColor: 'black',
    color: ['#4d8fea', '#95e7ff'],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        data: ['逆变器输入电量', '逆变器输出电量'],
        orient: 'vertical',
        right: '1%',
        textStyle: {
            color: '#fffff'
        }
    },
    calculable: true,
    series: [{
        name: '',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        // min: 0,
        // max: 100,
        // minSize: '0%',
        // maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
            normal: {
                show: true,
                position: ''
            },
            emphasis: {
                textStyle: {
                    fontSize: 20
                }
            }
        },
        labelLine: {
            normal: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 1,
                label: {
                    show: true,
                    textStyle: {
                        fontWeight: 300,
                        fontSize: 12,
                        color: '#fff' //文字的字体大小
                    },
                }
            }
        },
        data: [{
                value: 100,
                name: '逆变器输入电量'
            },
            {
                value: 50,
                name: '逆变器输出电量'
            }
        ]
    }]
};