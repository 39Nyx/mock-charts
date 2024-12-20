
var custMonth=['A1线','A2线','A3线','A4线','B1线','B2线','B3线','C1线','C2线','外发A','外发B','外发C'];
var custScsl=[202.0, 204.9, 207.0, 203.2, 205.6, 706.7, 1350.6, 1620.2, 302.6, 200.0, 600.4, 300.3];
var custScxl=[12.0, 12.2, 31.3, 41.5, 41.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 16.2];

var colors = ['#5793f3', '#d14a61', '#675bba'];


option = {
    title : {
        text: '今日生产线效率统计',
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
            max: 2500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}件'
            }
        }
        ,
        {
            type: 'value',
            name: '生产效率',
            min: 0,
            max: 100,
            position: 'right',
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
            barWidth:"50%",
            itemStyle:{
	                    barBorderRadius: 10,
	                    color: "#cccc66"
	                },
	                label: {
	                    normal: {
	                        show: true,
	                        position: 'top',
	                        textStyle:{
	                            color:"#fff",
	                            fontSize:10
	                        }
	                    }
	                },
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
            itemStyle:{
	                    color: "#fff"
	                },
	                label: {
	                    normal: {
	                        show: true,
	                        position: 'top',
	                        textStyle:{
	                            color:"#fff",
	                            fontSize:10
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