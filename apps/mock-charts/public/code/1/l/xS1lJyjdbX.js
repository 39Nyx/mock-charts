var data = [50, 80, 40, 60, 90];

option = {
    title: {
        text: '雷达图例子'
    },
    tooltip: {},
    legend: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [{
                name: '支气管扩张剂',
                max: 100
            },
            {
                name: '止咳祛痰药',
                max: 100
            },
            {
                name: '吸入或全身用糖皮质激素',
                max: 100
            },
            {
                name: '抗生素与抗感染药物',
                max: 100
            },
            {
                name: 'β受体阻滞剂',
                max: 100
            }
        ]
    },
    series: [{
        type: 'radar',
        data: [{
            value: data
        }]
    }]
};