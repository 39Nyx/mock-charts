option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item'
    },
    series: [{
        type: 'pie',
        radius: ['85', '100'],
        hoverAnimation: false,
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [
            {
                value: 20,
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#E0E3E9',
                    }
                }
            }, {
                value: 80,
                itemStyle: {
                    normal: {
                        color: '#5170A2',
                    }
                }
            }
        ]
    }]
}