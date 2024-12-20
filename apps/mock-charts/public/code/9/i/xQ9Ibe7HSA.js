
var  xList = [],yList = [];
for(let i = 0 ;i< 24;i++){
    xList.push(`${i}`);
    yList.push((500+Math.random()*500).toFixed(0));
}

var bgColor ='#102A6D'
option = {
    backgroundColor: bgColor,
    title: {
        text: '',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#F1F1F3'
        },
        left: '6%'
    },
    tooltip: {
        show:false,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        show:false,
    },
    grid: {
        left: '1%',
        right: '2%',
        bottom: '8%',
        top:'14%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.65)'
            }
        },
        data:xList,
        axisLabel:{
            textStyle:{
            	fontSize:12
            }
        },
    }],
    yAxis: [{
        type: 'value',
        // interval: 40,
        // max:120,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color:bgColor|| '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'rgba(255,255,255,0.65)',
                fontSize: 12
            }
        },
        splitLine: {
            lineStyle: {
                color:'rgba(255,255,255,0.15)' ,
                type:'dotted'
            }
        }
    }],
    series: [{
        name: '24小时订单变化',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,187,253,1)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0,187,253,0)'
                }], false),
                shadowColor: 'rgba(228, 139, 76, 0.1)',
                shadowBlur: 10
            }
        },
        symbolSize:0,  
        itemStyle: {
            normal: {
                color:'#00BBFD'|| 'rgb(82, 191, 255)',
                borderColor:'#00BBFD'
            },
        },
        data: yList,
    } ]
};