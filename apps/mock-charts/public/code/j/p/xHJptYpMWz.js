 var giftImageUrl = 'text=情绪分析'
 myChart.setOption({
     graphic: {
         elements: [{
             type: 'image',
             style: {
                 image: giftImageUrl,
                 width: 30,
                 height: 30
             },
             left: 'center',
             top: 'center'
         }]
     },
     series: [{
         type: 'pie',
         radius: [30, '55%'],
         center: ['50%', '50%'],
         roseType: 'radius',
         color: ['#f2c955', '#00a69d', '#46d185', '#ec5845'],
         data: [ {
             value: 28.7,
             name: '积极'
         }, {
             value: 20.3,
             name: '客观'
         }, {
             value: 51,
             name: '消极'
         }],
         label: {
             normal: {
                 textStyle: {
                     fontSize: 14
                 },
                 formatter: function(param) {
                     return param.name + ':\n' + Math.round(param.percent) + '%';
                 }
             }
         },
         labelLine: {
             normal: {
                 smooth: true,
                 lineStyle: {
                     width: 2
                 }
             }
         },
         itemStyle: {
             normal: {
                 shadowBlur: 30,
                 shadowColor: 'rgba(0, 0, 0, 0.4)'
             }
         },

         animationType: 'scale',
         animationEasing: 'elasticOut',
         animationDelay: function(idx) {
             return Math.random() * 200;
         }
     }]
 });