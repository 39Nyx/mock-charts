option = {
    color: ['#6ecdfb', '#ae9ffe'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'horizontal',
        bottom: '15%',
        itemGap: 40,
        data: ['读iops', '写iops']
    },
    series: [{
        name: 'iops',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        clockwise: false,
        label: {
            normal: {
                position: 'inside',
                formatter: '{d}%',
                fontSize: 24
            }
        },
        data: [{
                value: 335,
                name: '读iops'
            },
            {
                value: 310,
                name: '写iops'
            },
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};