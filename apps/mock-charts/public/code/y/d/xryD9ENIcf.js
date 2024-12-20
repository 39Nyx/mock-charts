option = {
    backgroundColor: '#fff',
    title: {
        text: '各环节抽样批次占比',
        subtext: '抽检批次数',
        textStyle: {
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        left: 100,
        top: 35,
        data: ['食品生产', '食品销售', '食品流通'],
        textStyle: {
            color: '#000'
        }
    },
    series: [

        {
            name: '各类型数量占比',
            type: 'pie',
            radius: ['0', '35%'],
            center: ['24%', '30%'],
            color: ['#e72325', '#98e002', '#2ca3fd','#0b325c','#fb4be5','#3c24e7'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },

            },
            data: [{
                    value: 235,
                    name: '食品生产批次'
                },
                {
                    value: 179,
                    name: '食品流通批次',
                    selected: true
                },
                {
                    value: 98,
                    name: '食品销售批次',
                }
            ]
        }
    ]
};