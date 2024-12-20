option = {
    title: {
        text: '任务完成数统计',
        subtext:'数据来源，纯属猜想，请勿当真',
        sublink:'https://www.baidu.com/s?word=%E9%AA%9A%E5%B9%B4%E4%BD%A0%E5%A4%AA%E5%B9%B4%E8%BD%BB%E4%BA%86',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: " {a}:{c}<br/>&nbsp;&nbsp;&nbsp;占比:{d}%",
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        textStyle: {
            color: '#000',
            fontSize: 12
        }
    },
    series: [{
        name: '正常数据数',
        type: 'pie',
        radius: ['30%', '70%'],
        center: ['50%', '100%'],
        startAngle: 180,
        data: [{
            value: 5,
            name: '未开始数'
        }, {
            value: 20,
            name: '正常进行数'
        }, {
            value: 5,
            name: '延期进行数'
        }, {
            value: 30,
            name: '正常完成数'
        }, {
            value: 10,
            name: '延期完成数'
        }, {
            value: 5,
            name: '终止数'
        }, {
            value: 75,
            name: ''
        }],
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 2,
                label: {
                    position: 'inner',
                    textStyle: {
                        color: '#FFF',
                        fontSize: 12
                    }
                },
                labelLine: {
                    show: false
                }
            }
        }
    }]
};