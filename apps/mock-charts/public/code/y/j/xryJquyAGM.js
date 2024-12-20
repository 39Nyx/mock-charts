option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip:{
      trigger:'item'  
    },
    legend:{
      data:['mid','up','类型2mid',"类型2up"]  
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        name:'mid',
        type: 'bar',
        stack:'sun',
        data:[220, 182, 191, 234, 290, 330, 310]
    },{
        name:'up',
        type: 'bar',
        stack:'sun',
        data:[22, 18, 19, 23, 29, 33, 31]
    },{
        name:'类型2up',
        type: 'bar',
        stack:'sun2',
        data:[220, 182, 191, 234, 290, 330, 310]
    },{
        name:'类型2mid',
        type: 'bar',
        stack:'sun2',
        data:[221, 28, 139, 123, 129, 133, 131]
    } 
    ],  
    label: {
      normal: {
          show: true,
          position: 'top'
           
      }
   }
};