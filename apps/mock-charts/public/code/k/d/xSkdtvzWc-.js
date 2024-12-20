
option = {
    tooltip: {
          trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
  
    legend: {
        data:['保障量','下载量','引用量']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月'],
           
        }
    ],
    yAxis: [
        {
            type: 'value',
           
            min: 0,
            max: 30000,
            interval: 5000,
           
        },
        {
            type: 'value',
          
            min: 0,
            max:1000,
            interval: 200,
           
        }
    ],
    series: [
        { itemStyle:{normal:{
            color:'#66CDCD'
            
        }},
            name:'保障量',
            type:'bar',
            data:[20000, 10000, 17000, 23200, 25060]
        },
          { itemStyle:{normal:{
            color:'#CFCFFF'
            
        }},
            name:'引用量',
            type:'bar',
            data:[25000, 16000, 18000, 23500, 25660]
        },
        {
            itemStyle:{normal:{
            color:'#FFFF99'
            
        }},
            name:'下载量',
            type:'bar',
            yAxisIndex: 1,
            data:[260, 500, 900, 264, 287]
        },
       
    ]
};
