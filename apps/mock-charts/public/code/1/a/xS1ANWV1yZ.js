option = {

    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 335,
                name: '直接访问',
                itemStyle: {
                    normal: {
                        color: 'rgb(255,173,8'
                    }
                }
            }, {
                value: 310,
                name: '邮件营销',
                itemStyle: {
                    normal: {
                        color: '#ccc'
                    }
                }
            },

        ]
    }]
};