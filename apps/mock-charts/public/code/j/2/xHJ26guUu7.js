var data = [{
    "name": "开发样A",
    "value": 80
}, {
    "name": "开发样B",
    "value": 87.8
}, {
    "name": "开发样C",
    "value": 71
}, {
    "name": "开发样D",
    "value": 80
}, {
    "name": "开发样E",
    "value": 66
}, {
    "name": "开发样F",
    "value": 80
}, {
    "name": "开发样G",
    "value": 80
}];
var xData = [],
    yData = [];
var min = 50; 
data.map(function(a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    //backgroundColor:"#111c4e",
    title : {
        text: '开发样产量汇总',
        subtext: '',
        textStyle:{
            fontSize:20,
            color:'#ccc'
        }
    },
    color: ['#3398DB'],
    
    legend: {
        data: ['直接访问', '背景'],
        show: false
    },
    grid:{
        top:40,
        left:40,
        right:30,
        bottom:30
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
             color: 'rgb(170,170,170)',
             fontSize:16
        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: min,
            max: 100,
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        textStyle:{
                            color:"#fff",
                            fontSize:15
                        }
                    },
            itemStyle: {
                
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                            {
                                offset: 0.5,
                                color: '#027eff'
                            },
                            {
                                offset: 1,
                                color: '#0286ff'
                            }
                        ]
                    )
                }
            },
            data: yData,
            zlevel: 11

        },
        {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            },
            zlevel: 9
        },
      
    ]
};
