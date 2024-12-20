let data1 = [{
        value: 100,
        name: '误报'
    },
    {
        value: 50,
        name: '测试'
    },
    {
        value: 160,
        name: '报警'
    }
]
let data2 = [{
        value: 100,
        name: '误报'
    },
    {
        value: 50,
        name: '测试'
    },
    {
        value: 90,
        name: '火警'
    },
    {
        value: 70,
        name: '其他'
    }
]
option = {
    backgroundColor: '#030d2e',
    color: ['#f33346', '#3656b2', '#299dff', '#00e6e6', '#299dff'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        show: false,
        orient: 'vertical',
        x: 'left',
        data: ['误报', '测试', '报警', '火警', '其他']
    },
    grid: {
        top: 10,
        left: 0,
        bottom: 0,
        right: 0,
        containLabel: true
    },
    series: [{
            name: '报警来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            minAngle: 5,
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data1
        },
        {
            name: '报警来源',
            type: 'pie',
            radius: ['55%', '65%'],
            minAngle: 5,
            labelLine: {
                length: 0,
                length2: 5
            },
            label: {
                normal: {
                    formatter: '{a|{b}}{abg|}\n{hr|}\n {c}; {per|{d}%}',
                    //backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: {
                            color: '#fff',
                            //lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#fff',
                            //backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: data2
        }
    ]
}