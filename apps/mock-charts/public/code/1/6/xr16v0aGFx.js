var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,
    title:{
        text:'小学数学教案柱状图',
        subtext:'小学数学教案柱状图\n',
        itemGap:5,
        left:'40',
        textStyle:{
            fontSize:18,
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
        data:['实际值']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['一年级','二年级','三年级','四年级','五年级','六年级',]
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
            max: 80,
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
            nameTextStyle:{
                    fontSize:'',
                    fontWeight:''
                },
            axisLabel: {
                formatter: '{value} 份'
            }
        }
    ],
    series: [
        {
            name:'实际值',
            type:'bar',
            yAxisIndex: 1,barWidth:45,
            data:[ 49, 39, 53,58,53,47]
        },
       /* {
            name:'',
            type:'line',
            yAxisIndex: 2,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }*/
    ]
};