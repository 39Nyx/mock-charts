
var custMonth=['上海'];
var custScsl=[4200.0];
var custScxl=[80.0];

var colors = ['#5793f3', '#d14a61', '#675bba'];


option = {
    title : {
        text: '当前工厂效率汇总',
        subtext: '',
        textStyle:{
            fontSize:20,
            color:'#ccc'
        }
    },
    grid:{
        top:70,
        left:50,
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
            max: 5000,
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
            max: 100,
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
            barWidth:150,
            yAxisIndex: 0,
            data:custScsl,
            color:'#4422dd',
            label: {
	                normal: {
	                    formatter:'AVG:{c}',
	                    show: true,
	                    position: 'top',
	                    textStyle:{
	                        color:'#ff0000',
	                        fontSize:20
	                    }
	                }
	                
	            },
            markLine : {
                data : [
                    {type : 'average', 
                    name: '平均值',
                        lineStyle:{
                            color:"#eeff55"
                        }
                    }
                ]
            }
        },
        
        {
            name:'生产效率',
            type:'line',
            yAxisIndex: 1,
            data:custScxl,
            label: {
	                normal: {
	                    formatter:'AVG:{c}%',
	                    show: true,
	                    position: 'top',
	                    textStyle:{
	                        color:'#ffff00',
	                        fontSize:20
	                    }
	                }
	                
	            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};