option = {
    backgroundColor: 'rgb(33,189,234)',
    series: [{
        type: 'pie',
        roseType: 'radius',
        label: {
            normal: {
                formatter: '{text|{b}}\n{text|{d}%}',
                rich: {
                    text: {
                        align: 'center',
                        color: '#fff',
                        align: 'center',
                        fontSize: 14,
                        lineHeight: 22
                    }
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        data:[{
            name: '内部数据',
            value: '352',
            itemStyle: {
                normal: {
                    color: '#2387ce'
                }
            }
        }, {
            name: '外部数据',
            value: '648',
            itemStyle: {
                normal: {
                    color: '#1E7AB6'
                }
            }
        }]
    }]
};