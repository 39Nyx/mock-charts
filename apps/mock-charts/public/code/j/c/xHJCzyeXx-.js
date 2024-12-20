option = {
    tooltip: {
        show:false,
        trigger: 'axis'
    },
    legend: {
        data:['值', '数']
    },
    xAxis:  [
        {
        type: 'value',
        boundaryGap: false,
        splitLine:{
            show:false
        }
    },
    {
        type: 'value',
        show: false,
        boundaryGap: false,
        splitLine:{
            show:false
        }
    },
    ],
    yAxis: {
        show:false,
        type: 'value',
        interval:1,
        max:3,
        splitLine:{
            show:false
        },
        axisTick:{
            show:false
        }
    },
    series: [
        {
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            showSymbol: false,
            name:'值',
            type:'line',
            data:[
                [0,0],
                [1,0],
                [2,1],
                [3,0],
                [4,1],
                [5,0],
                [6,0]
                ],
        },
        {
            smooth: true,
            xAxisIndex:1,
            symbolSize: 1,
            symbol: 'circle',
            showSymbol: false,
            name:'数',
            type:'line',
            data:[
                [0,0],
                [1,0],
                [2,1],
                [3,0],
                [4,0],
                ],
        }
    ]
};
