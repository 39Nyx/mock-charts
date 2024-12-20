option = {
    backgroundColor: '#fff',
    title: {
        text: '检查类型违规占比',
        textStyle: {
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        left: 10,
        top: 35,
        data: ['日常检查', '专项检查', '飞行检查', '临时检查', '督导检查', '其他检查'],
        textStyle: {
            color: '#000'
        }
    },
    series: [

        {
            name: '各类型注销数量占比',
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
                    name: '日常检查'
                },
                {
                    value: 179,
                    name: '专项检查'
                },
                {
                    value: 98,
                    name: '飞行检查',
                },
                {
                    value: 298,
                    name: '临时检查',
                },
                {
                    value: 18,
                    name: '督导检查',
                },
                {
                    value: 38,
                    name: '其他检查',
                    selected: true
                }

            ]
        }
    ]
};