option = {
    title: {
      //  x: 'center',
       // text: '',
        
    },
    // tooltip: {
    //  //   trigger: 'item'
    // },
    // toolbox: {
    //     show: true,
    //     feature: {
    //         //dataView: {show: true, readOnly: false},
    //         //restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
  
    grid:{
    left:0,
  //  top:0,
    right:0,
    bottom:0
},
    xAxis: [
        {
         
         axisTick:{
           show:false,  
         },
            axisLine:{
                
              lineStyle:{
                  color:'#ccc',
                  width:2,
              },
            },
       axisLabel: {
            textStyle: {
                color: '#666'
            }
        },
            type: 'category',
          //  show: false,
           	data: ["18-22岁",
           	"23-30岁","30-40岁",
           	"40-50岁","50-60岁","60岁以上"],//['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false
        }
    ],
    series: [
        {
            name: '',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#3F9EFF',
                    label: {
                        show: true,
                        position: 'top',
                        color:'#666',
                        formatter: '{c}人'
                    }
                }
            },
            data: [592,1074,770,424,281,115],//[12,21,10,4,12,5,6,5,25,23,7],
     
        }
    ]
};
