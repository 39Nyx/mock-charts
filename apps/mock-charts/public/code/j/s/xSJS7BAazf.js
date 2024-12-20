
option = {
   backgroundColor:'#00204B',
    tooltip : {
        trigger: 'axis',
    },
    legend:{  data: ['病单','暂停单','正常单'],
          textStyle: {
            color: '#fff'
        }
    },  

    grid: {
        left: '30%',
        right: '35%',
        top: '70%',
        bottom: '10%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        show:false
        
    },
    yAxis: {
        type: 'category',
        data: ['病单','暂停单','正常单'],
        axisTick: {
            show: false
        },    
        axisLine: {
            show: false,
            lineStyle: {
                color: '#FFFFFF'
            }
        },
         splitLine: {
            show: false,
        },
         axisLabel: {
            margin: 10,
           
        }
     
    },
    series: [
        {
        type: 'bar',
        barWidth: 25,
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter:function(param){
                    return param.value[0]
                }
            }

        },
        data: [
              {
                 name:'正常单',
                 value: [1000,'正常单'],
                 label: {
                     normal:{
                         color:'#FFFFFF'
                     }
                 },
                 itemStyle:{
                      normal:{
                         color:'#86D13B'
                     }
                 }
            }, {
                name:'暂停单',
                 value: [200,'暂停单'],
                 label: {
                     normal:{
                         color:'#FFFFFF'
                     }
                 },
                 itemStyle:{
                      normal:{
                         color:'#FFD93E'
                     }
                 }
            }, {
                name:'病单',
                 value: [1,'病单'],
                  label: {
                     normal:{
                         color:'#FFFFFF'
                     }
                 },
                 itemStyle:{
                      normal:{
                         color:'#FF473D'
                     }
                 }
            },
            
            
            
            ]
        },
          
      
        {
        type: 'pie',
        center: ['50%', '40%'],
        radius: ['25%', '39%'],

              data:[
               {
                 name:'正常单',
                 value: [1000,'正常单'],
                 label: {
                     normal:{
                         color:'#FFFFFF'
                     }
                 },
                 itemStyle:{
                      normal:{
                         color:'#86D13B'
                     }
                 }
            }, {
                name:'暂停单',
                 value: [200,'暂停单'],
                 label: {
                     normal:{
                         color:'#FFFFFF'
                     }
                 },
                 itemStyle:{
                      normal:{
                         color:'#FFD93E'
                     }
                 }
            }, {
                name:'病单',
                 value: [1,'病单'],
                  label: {
                     normal:{
                         color:'#FFFFFF'
                     }
                 },
                 itemStyle:{
                      normal:{
                         color:'#FF473D'
                     }
                 }
            },
            ]
    },


  
    ]
};