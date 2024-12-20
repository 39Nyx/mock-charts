var xAxisData = [];
var data = [];
for (var i = 9; i < 12; i++) {
    xAxisData.push('5月' + i + '日');
    data.push(Math.round(Math.random() * 500) + 200);
}
option = {
    backgroundColor:'#0F3B56',
    xAxis: [{
        data: xAxisData,
        axisLabel: {
            textStyle: {
                color: '#03a9f4'
            }
        },
        splitLine: {
            show: false
        }
    }, {
        show: false,
        data: xAxisData  
    },{
        show: false,
        data: xAxisData  
    }],
    yAxis: [{
        max: 1000,
        axisLine: {
            show: false
        }
    },{
        max: 1000,
        axisLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        silent: true,
        xAxisIndex: 1,
        barGap:'100%',
        itemStyle: {
            normal: {
                // barBorderRadius: 20,
                color: '#011725'      
            }
        },
        barWidth: 40,
        data: data.map(function (val) {
            return 1000;
        })
    },{
        type: 'bar',
        silent: true,
        xAxisIndex: 1,
        barGap:'100%',
        itemStyle: {
            normal: {
                color: '#011725'      
            }
        },
        barWidth: 40,
        data: data.map(function (val) {
            return 1000;
        })
    },{
        type: 'bar',
        data: data,
        barWidth: 40,
        barGap:'100%',
        itemStyle: {
            normal: {
                 shadowColor:'#0F3B56',
                 shadowOffsetX:20,
                 shadowBlur:0,
                 opacity:1,
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 0, 0, 0.8)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 255, 0, 0.8)'
                    }], 
                false),
                   
            }
        }
    },{
        type: 'bar',
        data: data,
        barWidth: 40,
        barGap:'100%',
        itemStyle: {
            normal: {
                shadowColor:'#0F3B56',
                 shadowOffsetX:20,
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(25, 0, 0, 0.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 0,255, 0.8)'
                    }], 
                false),
            }
        }
    }]
};