
option = {
   //backgroundColor: '#031845',
    
    tooltip: {
        //trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
       title: [{
        text: '考试通过率' + '\n{a|95%}',
        subtext: '上次通过率93%',
        /*(value * 100).toFixed(0) */
        x: 'center',
        y: '43%',
        textStyle: {
            fontSize: 22,
            fontWeight: 'normal',
            color: '#666666',
             rich: {
                 a: {
            fontSize: 32,
            fontWeight: 'normal',
            align:"center",
            color:'black'
                 }
             }
        },
        subtextStyle: {
            color:'#333333'
            
        },
    },{
            text:'测评分析',
            textStyle:{
                fontSize:22
            }
    }],
    series: [{
        type: 'pie',
        radius: ['45%', '50%'],
        center: ['50%', '50%'],
        color: ['#A9A9A9', '#D5D5D5', '#E3E3E3'],
        hoverAnimation:false,
        itemStyle:{
     normal: {
        
      }
},
        data: [{
                value: 20,
                name: '原因1'
            },
            {
                value: 30,
                name: '原因2'
            },
            {
                value: 40,
                name: '原因3'
            }
           
        ],
        labelLine: {
            normal: {
                show: false,
            }
        },
        label: {
            normal: {
                formatter: '{c}%',
                textStyle: {
                    color: '#666666',
                    fontSize:18
                }
               
            }
        }
    }]
};