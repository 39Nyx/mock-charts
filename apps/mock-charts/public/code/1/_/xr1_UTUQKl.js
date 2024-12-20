var colors = ['#d14a61', '#675bba'];

option = {
    color: colors,
    title:{
        text:'七十四整体数量柱状图',
        subtext:'七十四整体数量柱状图',
        itemGap:5,
        left:'40',
        textStyle:{
            fontSize:16,
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        right: '5%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['理论值','实际值']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: false
            },
            data: ['语文','英语']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 500,
            show:false,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '',
            show:false,
            min: 0,
            max: 500,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '',
            nameLocation:'middle',
           // nameRotate:0,
            min: 0,
            max: 80,
            position: 'left',
            axisLine: {
                lineStyle: {
            //        color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} 份'
            }
        }
    ],
    series: [
        /*{
            name:'理论值',
            type:'bar',
            barGap:0,
            barWidth:45,
            data:[20.0, 40.9, 70.0]
        },*/
        {
            name:'实际值',
            type:'bar',
            yAxisIndex: 2,barWidth:45,
            data:[ 31, 68]
        },
       /* {
            name:'',
            type:'line',
            yAxisIndex: 2,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }*/
    ]
};