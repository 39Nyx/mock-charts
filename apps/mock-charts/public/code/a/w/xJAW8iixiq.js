/*
 * 仪表盘所需数据
 */
var data = {
    value: 0.5,
    total:125000
}
//////////////////////////////////////////////////

option = {
    backgroundColor: '#fff',
    title: {
        show: true,
        text: `当前在线用户量:${data.total}`,
        left: '15px',
        bottom: '20px',
        textStyle: {
            color: '#414957',
            fontSize: 16,
            fontFamily: '"Microsoft Yahei","微软雅黑"',
        }
    },
    series: [{
            name: "仪表盘",
            type: "gauge",
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [data.value, '#5DD1FA'], //外环基础色
                        [1, "#f7f9fc"]
                    ],
                    width: 20
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                formatter: function(value) {
                        return `${value*100}%`
                },
                offsetCenter: [0, 0],
                textStyle: {
                    fontSize: '32',
                    fontWeight: '600',
                    color: '#c9c9c9'
                }
            },
            title: {
                offsetCenter: [0, "100%"],
            },
            pointer: {
                show: false,
                length: '75%',
                width: 20, //指针粗细
            },
            data: [{
                "name": "",
                "value": data.value,
            }]
        }
    ]
}