const set = [
    ['日期', '指标满意度', '全部评论数'],
    ['2019/10/2', 92.37, 6406],
    ['2019/10/3', 82.96, 3861],
    ['2019/10/4', 69.82, 2840],
    ['2019/10/5', 55.63, 3541],
    ['2019/10/6', 84.92, 3284],
    ['2019/10/7', 81.1, 693],
    ['2019/10/8', 25, 1175],
    ['2019/10/9', 62.99, 2128],
    ['2019/10/10', 64.99, 8489],
    ['2019/10/11', 17.67, 1834],
    ['2019/10/12', 96.43, 8441],
    ['2019/10/13', 8.21, 8806],
    ['2019/10/14', 47.49, 2503],
    ['2019/10/15', 20.6, 4572],
    ['2019/10/16', 71.05, 2139],
    ['2019/10/17', 0.45, 3285],
    ['2019/10/18', 55.26, 6758],
    ['2019/10/19', 51.88, 8896],
    ['2019/10/20', 52.73, 6975],
    ['2019/10/21', 66.67, 1217],
    ['2019/10/22', 63.91, 1560],
    ['2019/10/23', 42.62, 2388],
    ['2019/10/24', 32.75, 8847],
    ['2019/10/25', 32.35, 4596],
    ['2019/10/26', 41.6, 2322],
    ['2019/10/27', 26.29, 5093]
];

option = {
    // backgroundColor: '#fff',
    dataset: {
        source: set
    },
    grid: {
        top: 64,
        bottom: 48,
        right:48
    },
    legend:{
        left:0,
        top:4
    },
    dataZoom: [{
        xAxisIndex: 0,
        height: 16,
        bottom: 8
    }],
    xAxis: {
        type: 'category'
    },
    yAxis:[ {
        type: 'value',
        name: '指标满意度(%)'
    },{
        type:'value',
        name:'全部评论数'
    }
    ],
    series: [{
        type: 'line',
        smooth:true,
    },{
        type: 'line',
        smooth:true,
        yAxisIndex:1
    }]
};

myChart.resize({
    width: 536,
    height: 320
})