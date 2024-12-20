option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: ['厂家A']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: 'AP在线率', max: 100},
           { name: '终端速率', max: 100},
           { name: '安全评价', max: 100},
           { name: '无线环境', max: 100},
           { name: '信道', max: 100}
        ],
        radius:30
    },
    series: [{
        name: '评分指数',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [98, 55, 60, 77, 88],
                name : ['评分指数']
            }
        ]
    }]
};