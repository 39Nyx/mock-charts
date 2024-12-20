option = {
    title: {
        text: '经期图表',
       
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['经期天数','周期天数']
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
        data: ['06/04','07/06','08/10','09/11','10/20','11/20','12/23']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'经期天数',
            type:'line',
            symbolSize:35,
            symbol:'circle',
            data:[7, 6, 8, 7, 8, 6, 9],
            itemStyle:{
                normal:{
                   // color:'red' 
                   borderType:"solid"
                }
            },
            label: {
            normal: {
                show: true,
                formatter: '{b}',
                position: 'inside' //值显示
            }
        },
           
          
        },
        {
            name:'周期天数',
            type:'line',
            data:[32, 35, 32, 39, 31, 33, 30],
         
          
            }
       
    ]
};
