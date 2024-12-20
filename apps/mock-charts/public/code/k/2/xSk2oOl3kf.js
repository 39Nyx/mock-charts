/*
    @songcxa
    @2017-11-17
*/
option = {
    title: {
        text: '占比pie',
        textStyle: {
            color: '#fff',
            fontSize: 16
        },
        left: 'center',
        bottom: 0
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        show: false,
        orient: 'vertical',
        left: 'left',
        data: ['占有率']
    },
    series: [{
        name: '饼图二',
        type: 'pie',
        radius: ['60%', '70%'],

        data: [{
            value: 30,
            name: '占有率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 50,
                        color: '#fff'
                    },
                    position: 'center',
                    align: 'center',
                    verticalAlign: 'middle'
                }
            }
        }, {
            value: 70,
            name: '占位',
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
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
            hoverAnimation: false
        }]
    }]
};