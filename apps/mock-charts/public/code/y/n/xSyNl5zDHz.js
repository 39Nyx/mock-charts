option = {
    title: {
        text: 'svg与canvas耗能检测',
        subtext: 'DNS可视化分析系统'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['cpu','内存','gpu','scpu','s内存','sgpu'],
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['1','2','3','4','5','6']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'cpu',
            type:'line',
            data:[12, 13, 16, 17, 19, 21],
            itemStyle: {
              color: 'red'  
            },
            lineStyle: {
                color: 'red'
            }
        },
        {
            name:'内存',
            type:'line',
            itemStyle: {
              color: 'red'  
            },
            lineStyle: {
                color: 'red'
            },
            data:[763, 777, 761, 783, 771,748]
        },
        {
            name:'gpu',
            type:'line',
            itemStyle: {
              color: 'red'  
            },
            lineStyle: {
                color: 'red'
            },
            data:[160, 150, 140, 190, 150,170]
        },
        {
            name:'scpu',
            type:'line',
            itemStyle: {
              color: 'blue'  
            },
            lineStyle: {
                color: 'blue'
            },
            data:[12, 16, 17, 19, 21, 24]
        },
        {
            name:'s内存',
            type:'line',
            itemStyle: {
              color: 'green'  
            },
            data:[826, 830, 840, 845, 847,848]
        },
        {
            name:'sgpu',
            type:'line',
            itemStyle: {
              color: 'green'  
            },
            data:[200, 210, 240, 250, 270,280]
        }
    ]
};
