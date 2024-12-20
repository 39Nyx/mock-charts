option = {
    backgroundColor: '#fff',
    legend: {
        data: ['D3', 'Three', 'Chart', 'Echarts', 'Highcharts']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#000',
                borderRadius: 5,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '易上手', max: 10},
           { name: '图表类型', max: 10},
           { name: '受欢迎', max: 77},
           { name: '灵活性', max: 10},
        //   { name: '更新频率', max: 10}
        ],
        splitArea: {
            areaStyle: {
                color: ['#fff', '#fff', '#fff', '#fff']
            }
        },
    },
    series: [{
        type: 'radar',
        data : [
            {
                value : [2, 10, 76.8, 10, 8],
                name : 'D3'
            },
            {
                value : [1, 10, 42.8, 10, 8],
                name : 'Three'
            },
            {
                value : [8, 2, 37.8, 3, 8],
                name : 'Chart'
            },
            {
                value : [10, 6, 28.5, 6, 9],
                name : 'Echarts'
            },
            {
                value : [8, 5, 7.7, 4, 8],
                name : 'Highcharts'
            },
        ]
    }]
};