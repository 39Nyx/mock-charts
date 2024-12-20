option = {
    backgroundColor: '#fff',
 
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
         
    }, 
    legend: {
        
        x: 'right',
       itemWidth: 10,
        itemHeight: 10,
        align: 'left',
        icon: 'circle',
        data:['访问量','激活量'],
           
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['5-21','5-22','5-23','5-24','5-25','5-26','5-27','5-28','5-29'],
             
            axisLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
        splitLine: {
            lineStyle: {
                color: '#fff'
            }
        
        },
        }
    ],
     yAxis: [{
        type: 'value',
        
       
        axisLine: {
            lineStyle: {
                color: '#dbe0e6'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12,
                color:'#94999f'
                }
        },
        splitLine: {
            lineStyle: {
                color: '#fff'
            }
        }
    }],
    series : [
        {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#4b57a3'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
        
        {
            name:'访问量',
            type:'bar',
            stack:'品牌',
            itemStyle:{  
                normal:{color:'#046fb6'}  
            },
            barWidth : 42,//柱图宽度
            data:[120,132, 101, 34, 90, 60, 70,40, 62]
        },
        {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#02a39c'}  
             },
            data:[90,60, 40, 84, 60, 50, 60,70, 32]
        }, 
        {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#026a33'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
         {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#23ac39'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
         {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#92c31f'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
         {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#b0d64f'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        },
         
         {
            name:'激活量',
            type:'bar',
            stack:'品牌',
            itemStyle:{
                normal:{color:'#fbef02'}  
             },
             data:[90,60, 40, 84, 60, 50, 60,70, 32]
        }
    
    ]
};
