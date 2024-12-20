option = {
    title: {
        text: '',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:['vv','使用时长'],
        x: 'left'
    },
    
    color: ['#fbad0a','#16b358'],
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {xAxisIndex: 'all'}
    },

    grid: [{
        left: 50,
        right: 50,
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '55%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: ['11/24', '11/25', '11/26', '11/27', '11/28', '11/29', '11/30', '12/01', '12/02', '12/03', '12/04', '12/05', '12/06', '12/07', '12/08']
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: false},
            data: ['11/24', '11/25', '11/26', '11/27', '11/28', '11/29', '11/30', '12/01', '12/02', '12/03', '12/04', '12/05', '12/06', '12/07', '12/08'],
            position: 'bottom'
        }
    ],
    yAxis : [
        {
            name : 'vv',
            type : 'value',
            
        },
        {
            gridIndex: 1,
            name : '使用时长',
            type : 'value',
            inverse: false
        }
    ],
    series : [
        {
            name:'vv',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:[120, 132, 101, 234, 190, 230, 210, 120, 132, 101, 134, 90, 230, 210, 228]
        },
        {
            name:'使用时长',
            type:'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            smooth: true,
            areaStyle: {normal: {}},
            hoverAnimation: false,
            data:[120, 132, 101, 234, 190, 230, 210, 120, 132, 101, 134, 90, 230, 210, 228]
        }
    ]
};