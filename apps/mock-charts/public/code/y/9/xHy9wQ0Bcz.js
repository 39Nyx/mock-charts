var arr = [2,3,12]

option = {
    title: {
        text: '碾压遍数'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        left: "right",
        data: ['无数据']
    },
    xAxis: {
        type: 'category',
        name: '桩号',
        data: ['0.075', '0.1','3','15'],
        axisTick:{
            show:true,
            alignWithLabel:true,
            interval:function(index,value){
                
               
                return 2
            }
        },
        axisLable:{
            show:false,
            interval:function(index,value){
                return 2 
            }
        }

    },
    yAxis: {
        type: 'value',
        name: '遍数'
    },
    series: [{
        name: '无数据',
        type: 'line',
        data: [3, 2,4,7]
    }]
}