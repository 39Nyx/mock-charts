option = {
     backgroundColor: "#061a3b",
     color: ["#f9882c", "#24c5fb"],
     textStyle: {
        color: "#626c78",
        
    },
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['包租费','装修费','保洁费','物业费'],
        align: 'right',
        right:10,
        textStyle: {
            color: "#d7d7d7"
        },
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['北京','北京','北京','北京'],
            axisTick:{
            show:false
        },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
         splitLine:{
            lineStyle:{
                color:"#182841"
            }
        },
        }
    ],
    series : [
        {
            name:'包租费',
            type:'bar',
            data:[320, 332, 301, 334],
            itemStyle:{
          normal:{
              color:'#b27c22',
              barBorderRadius:2
          }  
        },
            
        },
        {
            name:'装修费',
            type:'bar',
            data:[120, 132, 101, 134],
            itemStyle:{
          normal:{
              color:'#519a25',
              barBorderRadius:2
          }  
        },
        },
        {
            name:'保洁费',
            type:'bar',
            data:[220, 182, 191, 234],
            itemStyle:{
          normal:{
              color:'#ae4c41',
              barBorderRadius:2
          }  
        },
        },
        {
            name:'物业费',
            type:'bar',
            data:[150, 232, 201, 154],
            itemStyle:{
          normal:{
              color:'#147ecc',
              barBorderRadius:2
          }  
        },
        }
    ]
};