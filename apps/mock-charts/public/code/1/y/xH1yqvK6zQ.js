var array=[4000, 1000];
var array1=[6470, 6470];
option = {
    backgroundColor: '#262D45',
    animation: false,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        }
    },
    xAxis: {
        splitNumber: 25,
        type: 'category',
        axisLine: {
            lineStyle: {
                width:2,
                type: 'solid',
                color:'#fff'
            }
        },
        axisLabel: {
            show: true,
            rotate: 0,
            textStyle: {
                color: '#fff',
                fontSize:42
            }
        },
        axisTick: {
            show: true,
            length:8,
            lineStyle:{
                width:2,
                type:'solid',
                color:'#fff'
            }
        },
        splitLine: {
            lineStyle: {
                width:6,
                type: 'solid',
                color: '#fff'
            }
        },
        data: ['投入', '产出']
    },
    yAxis: {
        show:false
    },
    series: [{
        name: '目标',
        type: 'bar',
        barGap: '-100%',
        barWidth: '30%',
        label: {
            normal: {
                textStyle: {
                    color: '#682d19'
                },
                position: 'left',
                show: false,
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: '#262D45',
                borderWidth: 2,
                borderColor: '#FFFFFF'

            }
        },
        data: [100,100]
    }, {
        name: '实际',
        type: 'bar',
        silent: true,
        barGap: '-100%',
        barWidth: '30%',
        data: [80,90],
        itemStyle: {
            normal: {
                color: '#2BBC33',
                borderWidth: 2,
                borderColor: '#FFFFFF'
            }
        },

    }]
}