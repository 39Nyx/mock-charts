option = {
    title: {
        text: '和小伙伴比较一下综测成绩吧'
    },
    tooltip: {},
    legend: {
        data: ['student A', 'student B']
    },
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
        indicator: [
           { name: '德育', max: 1000},
           { name: '智育', max: 5000},
           { name: '体育', max: 100},
           { name: 'G项', max: 200},
         
        ]
    },
    series: [{
        name: 'student A vs student B',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [800, 4000, 80, 20],
                name : 'student A'
            },
             {
                value : [700, 4500, 70, 80],
                name : 'student B'
            }
        ]
    }]
};