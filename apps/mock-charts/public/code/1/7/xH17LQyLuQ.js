var category = ["2018/01", "2018/02", "2018/03", "2018/04", "2018/05"]; //当前前12个月每月月份
var lineData = [700, 750, 850, 1020, 850]; //总产能
var barData1 = [200, 300, 400, 500, 600]; //正常产能
var barData2 = [300, 200, 100, 400, 200]; //加班产能
var barData3 = [200, 250, 350, 120, 50]; //外发产能



// option
option = {
    // backgroundColor: '#0f375f',
    title : {
        text: '实际产能',
        subtext: '',
        textStyle:{
            fontSize:20,
            color:'#ccc'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        },
        formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}'
    },
    legend: {
        data: ['总产能', '正常产能', '加班产能', '外发产能'],
        textStyle: {
            color: '#ccc'
        },
        top:25,
        left:20
    },
    grid:{
        
        top:60,
        left:40,
        right:30,
        bottom:30
        
        
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: '总产能',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 10,
        label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
        data: lineData
    }, 
    {
        name: '正常产能',
        type: 'bar',
        barWidth: 20,
        stack: '广告',
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0,
                    0, 0, 1, [{
                        offset: 0,
                        color: '#FFCC00'
                    }, {
                        offset: 1,
                        color: '#66FF66'
                    }])
            }
        },
        data: barData1
    }
    ,
    
     {
        name: '加班产能',
        type: 'bar',
        barWidth: 20,
        stack: '广告',
         itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0,
                    0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(20,200,212,0.5)'
                    }, {
                        offset: 0.2,
                        color: '#FFCC00'
                    }, {
                        offset: 1,
                        color: 'rgba(20,200,212,0)'
                    }])
            }
        },
        data: barData2
    }
    ,
    {
        name: '外发产能',
        type: 'bar',
        barWidth: 20,
        stack: '广告',
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0,
                    0, 0, 1, [{
                        offset: 0,
                        color: '#9966FF'
                    }, {
                        offset: 1,
                        color: '#993399'
                    }])
            }
        },
        data: barData3
    }
    ,
    
   {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};