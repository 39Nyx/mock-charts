
var custMonth=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
var custScsl=[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3];
var custScxl=[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2];

var colors = ['#5793f3', '#d14a61', '#675bba'];


option = {
    title : {
        text: '工厂生产效率',
        subtext: '',
        textStyle:{
            fontSize:20,
            color:'#ccc'
        }
    },
    grid:{
        top:70,
        left:40,
        right:50,
        bottom:30
    },

    
    
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['生产数量','生产效率'],
        top:25,
        textStyle:{
            color:"#ccc"
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: custMonth,
            axisLine: {
	                lineStyle: {
	                    color: '#ccc'
	                }
	            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '生产数量',
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}件'
            }
        },
        
        {
            type: 'value',
            name: '生产效率',
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'生产数量',
            type:'bar',
            data:custScsl,
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        
        {
            name:'生产效率',
            type:'line',
            yAxisIndex: 1,
            data:custScxl,
             markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};