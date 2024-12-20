var xAxisData = ['1111', '2222', '3333', '4444', '5555', '6666', '7777'];

var option = {
    title: [{
        text: 'TAT团队思维',
        top: '10',
        textStyle: {
            fontSize: 18,
        },
        left: 'center'
    }, {
        top: '380',
        left: '23%',
        text: '分析型',
        textAlign: 'center',
        textStyle:{
            fontSize:14
        }
    }, {
        top: '380',
        left: '73%',
        text: '创新型',
        textAlign: 'center',
        textStyle:{
            fontSize:14
        }
    }, {
        top: '780',
        left: '23%',
        text: '关联型',
        textAlign: 'center',
        textStyle:{
            fontSize:14
        }
    }, {
        top: '780',
        left: '73%',
        text: '程序型',
        textAlign: 'center',
        textStyle:{
            fontSize:14
        }
    }],
    grid: [{
            show: false,
            top: '60',
            left: '3%',
            containLabel: true,
            width: '45%',
            height: '300'
        },
        {
            show: false,
            top: '60',
            left: '52%',
            containLabel: true,
            width: '45%',
            height: '300'
        },
        {
            show: false,
            top: '460',
            left: '3%',
            containLabel: true,
            width: '45%',
            height: '300'
        },
        {
            show: false,
            top: '460',
            left: '52%',
            containLabel: true,
            width: '45%',
            height: '300'
        },
    ],
    xAxis: [{
            gridIndex: 0,
            axisTick: {
                alignWithLabel: true
            },
            data: xAxisData,
            axisLabel: {
                rotate: -60
            }
        },
        {
            gridIndex: 1,
            axisTick: {
                alignWithLabel: true
            },
            data: xAxisData,
            axisLabel: {
                rotate: -45
            }
        },
        {
            gridIndex: 2,
            axisTick: {
                alignWithLabel: true
            },
            data: xAxisData,
            axisLabel: {
                rotate: -45
            }
        },
        {
            gridIndex: 3,
            axisTick: {
                alignWithLabel: true
            },
            data: xAxisData,
            axisLabel: {
                rotate: -45
            }
        },
    ],
    yAxis: [{
            gridIndex: 0,
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 1,
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 2,
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 3,
            splitLine: {
                show: false
            }
        },
    ],

    series: [{
            type: 'bar',
            barMaxWidth:'30',
            name: '1111111',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [7, 8, 9, 3, 2, 3, 3]
        },
        {
            type: 'bar',
            barMaxWidth:'30',
            xAxisIndex: 1,
            yAxisIndex: 1,
            name: '222222',
            data: [2, 8, 9, 3, 9, 3, 1]
        },
        {
            type: 'bar',
            barMaxWidth:'30',
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: '33333',
            data: [2, 8, 9, 3, 9, 3, 1]
        },
        {
            type: 'bar',
            barMaxWidth:'30',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: [2, 8,9, 3, 9, 3, 1]
        }
    ]
};