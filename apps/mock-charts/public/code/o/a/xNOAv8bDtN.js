var datav=[3907, 40943, 41756, 42326, 52326];
option = {
    backgroundColor: '#000',
    grid: {
        containLabel: true,
        left: 0,
        right: 0,
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                color: '#a6b9ff',
                fontSize: 14,
                padding: [-60, -120, 0, 0]
            },
            data: ['直销银行服务器-4', '对公银行服务器-3', '电子商城服务器-6', '瑶瑶缴费服务器-1', '个人网银服务器-4']

        }, //辅助x轴
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['直销银行服务器-4', '对公银行服务器-3', '电子商城服务器-6', '瑶瑶缴费服务器-1', '个人网银服务器-4']
        }
    ],

    xAxis: [{
        show: false,
        min: 0,
        max: 55500,
    }],
    series: [{
            name: '重要资产受威胁TOP',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#4ff986'
                }
            },
            barWidth: '20%',
            // label: {
            //     normal: {
            //         show: true,
            //         position: ['50%', '50%'],
            //         textStyle: {
            //             color: '#f2fec3',
            //             fontWeight: 'bold',
            //             // offset:['50%',20],
            //         }
            //     }
            // },
            data: datav,
        },
        //背景
        {
            name: '辅助',
            type: 'bar',
            barWidth: '20%',
            yAxisIndex: 1,
            //颜色透明度
            itemStyle: {
                normal: {
                    color: 'rgba(101, 101, 101,0)'
                }
            },
            label: {
                normal: {
                    show: true,
                    color: '#f2fec3',
                    position: ['15%', '50%'],
                    offset: [0, -35],
                    formatter: function(d) {
                        return parseFloat(datav[d.dataIndex]).toLocaleString()
                    }
                }
            },
            tooltip: {
                show: false
            },
            //背景值
            data: ["55500", "55500", "55500", "55500", "55500"]
        },

    ]
};
