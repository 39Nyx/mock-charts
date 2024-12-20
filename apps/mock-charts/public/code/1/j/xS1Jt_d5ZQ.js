option = {
    title: {
        text: '物资招标统计',
        x: 'center'
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'], // 居中设置
        radius: ['60%', '75%'], // 控制环形内半径和外半径
        data: [{
                name: 'other',
                value: 12,
                label: {
                    show: true,
                    position: 'center',
                    formatter: '成功率',
                    textStyle: {
                        baseline: 'bottom',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                }
            },
            {
                name: 'GoogleMaps',
                value: 88,
                label: {
                    show: true,
                    position: 'center',
                    formatter: function(params) {
                        return params.value + '%'
                    },
                    textStyle: {
                        baseline: 'top',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                }
            }
        ]
    }]
};