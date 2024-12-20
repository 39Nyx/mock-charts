ImageUrl = "http://upload-images.jianshu.io/upload_images/3026741-c39e9d05b41c3c7a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"


option = {
    title:{
        text:"广州大学数据分析",
        subtext:"各大通讯运营商使用占比-Acring"
    },
    
    legend:{
      data: ["联通", "电信", "移动"]  
    },
      backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
     graphic: {
         elements: [{
             type: 'image',
             style: {
                 image: ImageUrl,
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
         data: [{
             value: 1324,
             name: '联通'
         }, {
             value: 996,
             name: '电信'
         }, {
             value: 9209,
             name: '移动'
         }, ],
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
 }