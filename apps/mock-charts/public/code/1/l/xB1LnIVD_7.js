var custCjName=['车间A','车间B','车间C','车间D','车间E'];
var custCjValue=[3100,2500, 2800, 2300, 1500];
var custCjxl=[12.0, 12.2, 31.3, 41.5, 41.3];
var colors = ['#5793f3', '#d14a61', '#675bba'];
option = {
    title : {
        text: '车间生产效率',
        subtext: '',
        textStyle:{
            fontSize:20,
            color:'#ccc'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    
    toolbox: {
        show : false,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    grid:{
        top:70,
        left:60,
        right:60,
        bottom:30
    },
    xAxis : [
        {
            type : 'category',
            data : custCjName,
            axisLine: {
	                lineStyle: {
	                    color: '#ccc'
	                }
	            }
        }
        
    ],
    yAxis : [
        {
            type : 'value',
            name: '生产数量',
            min: 0,
            max: 5000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: "#3388ff"
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
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series : [
        {
            name:'生产数量',
            yAxisIndex: 0,
            type:'bar',
            barWidth: '30%',
            itemStyle:{
                barBorderRadius: 10,
                color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#ff9955'
                            },
                            {
                                offset: 0.5,
                                color: '#dd9900'
                            },
                            {
                                offset: 1,
                                color: '#9900cc'
                            }
                        ]
                    )
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
            data:custCjValue,
           
            markLine : {
                data : [
                    {type : 'average', 
                    name: '平均值'
                    }
                ],
                label:{
                    textStyle:{
                            color:"#fff"
                        }
                }        
            }
        }
        ,
        {
            name:'生产效率',
            type:'line',
            yAxisIndex: 1,
            data:custCjxl,
            itemStyle:{
	                    color: "#00ff00"
	                },
	                label: {
	                    normal: {
	                        show: true,
	                        position: 'top',
	                        textStyle:{
	                            color:"#00ff00",
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
