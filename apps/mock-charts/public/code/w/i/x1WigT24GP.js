var data = echarts.dataTool.prepareBoxplotData([
    [21616, 54599.5, 69534, 91504, 159980],
    [15202, 42841, 51050, 71902, 159977]
]);

option = {
    title: {
        text:'上海轨交房和非轨交房价格分布图',
        x: 'center',
        y: 20,
        textStyle:{
            color:'#3259B8',
            fontSize:16,
            fontWeight:'normal',
        },
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: [{
        height:'40%',
        left: '20%',
        right: '10%',
    },
    {   
        top:'40%',
        height:'40%',
        left: '20%',
        right: '10%',
    }],
    legent:{
        data:['毗邻轨道交通','远离轨道交通'],
        textStyle: {
            color: '#3259B8',
        },
        top:20,
    },
    yAxis: [{
        type: 'category',
        gridIndex:0,
        data: ['毗邻轨道交通'],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            rotate:0,
        },
        splitLine: {
            show: false
        }
    },
    {
        type: 'category',
        gridIndex:1,
        data: [ '远离轨道交通'],
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 16,
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8',
            }
        },
        axisTick:{
            show:false,
        },
        axisLabel:{
            rotate:0,
        },
        splitLine: {
            show: false
        }
    }],
    xAxis: [{
        type: 'value',
        gridIndex:0,
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisLabel: {
            show:false,
            formatter: '{value} CNY/㎡'
        },
        axisTick:{
            show:false,
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#3259B8',
            }},
        splitLine: {
            lineStyle: {
                color: '#A7BAFA',
            },
        }
        
    },
    {
        type: 'value',
        gridIndex:1,
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisTick:{
            show:false,
        },
        axisLabel: {
            formatter: '{value} CNY/㎡'
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8',
            }},
        splitLine: {
            lineStyle: {
                color: '#A7BAFA',
            },
        }
        
    }],
    series: [{
            name: 'Adjacent to subway',
            type: 'boxplot',
            xAxisIndex:0,
            yAxisIndex:0,
            padding:[20,0],
            boxWidth:['10%','20%'],
            data: [
                [21616, 54599.5, 69534, 91504, 159980],
                
            ],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#F02FC2' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#956FD4' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color:  'rgba(240,47,194,0.7)'// 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(149,111,212,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            
            
            tooltip: {
                formatter: function(param) {
                    return [

                        'upper: ' + param.data[5],
                        'Q3: ' + param.data[4],
                        'median: ' + param.data[3],
                        'Q1: ' + param.data[2],
                        'lower: ' + param.data[1]
                    ].join('<br/>')
                }
            }
        },
        {
            name: 'Away from subway',
            xAxisIndex:1,
            yAxisIndex:1,
            type: 'boxplot',
            data: [
                [15202, 42841, 51050, 71902, 159977]
            ],
            boxWidth:['10%','20%'],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#3EACE5' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#956FD4' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(62,172,299,0.7)'  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color:'rgba(149,111,212,0.7)'  // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            
            
            tooltip: {
                formatter: function(param) {
                    return [

                        'upper: ' + param.data[5],
                        'Q3: ' + param.data[4],
                        'median: ' + param.data[3],
                        'Q1: ' + param.data[2],
                        'lower: ' + param.data[1]
                    ].join('<br/>')
                }
            }
        },

    ]
};