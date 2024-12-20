var data = echarts.dataTool.prepareBoxplotData([
    [30645,
54699,
66480,
86502,
159424,],
   [19747,
47590,
60778,
85884,
159949,],
[15202,
40968.5,
52101,
77910.75,
159978,],
[18038,
36700.5,
49396,
79378,
149669,],
]);

option = {
    title: {
        text:'Dispersion of house price according to the number of living rooms',
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
    grid: {
        left: '15%',
        right: '10%',
        
    },
    xAxis: {
        type: 'category',
        data: ['No living room','1 living rooms','2 living rooms','3 living rooms'],

        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
            
        },
        axisTick:{
            show:false,
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8',
            }
        },
        splitLine: {
            show: false
        }
    },
    
    yAxis: {
        type: 'value',
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisLabel:{
            formatter:'{value} CNY/㎡',
        },
        axisTick:{
            show:false,
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
        
    },
    series: [{
            name: 'boxplot',
            type: 'boxplot',
            data: [
       [30645,
54699,
66480,
86502,
159424,],
   [19747,
47590,
60778,
85884,
159949,],
[15202,
40968.5,
52101,
77910.75,
159978,],
[18038,
36700.5,
49396,
79378,
149669,],
],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#F02FC2' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#3EACE5' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(240,47,194,0.7)'  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(62,172,299,0.7)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            tooltip: {
                formatter: function(param) {
                    return [

                        'Upper: ' + param.data[5] + ' CNY/㎡' ,
                        'Q3: ' + param.data[4] + ' CNY/㎡',
                        'Median: ' + param.data[3] + ' CNY/㎡',
                        'Q1: ' + param.data[2] + ' CNY/㎡',
                        'Lower: ' + param.data[1] + ' CNY/㎡'
                    ].join('<br/>')
                }
            }
        },

    ]
};