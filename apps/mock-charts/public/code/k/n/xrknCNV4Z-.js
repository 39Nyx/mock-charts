option = {
     series: [
         {
             name: 'pie',
             type: 'pie',
             radius: ['80%', '60%'], 
             label: {
                 normal: {
                     position: 'inside',
                     formatter: function(param) {
                         return Math.round(param.percent) + '%';
                     }
                 },

             },
             data: [37,18,6,4,35]
         }, 
     ]
 };
 myChart.setOption(option)