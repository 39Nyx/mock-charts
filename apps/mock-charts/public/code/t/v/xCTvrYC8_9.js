 var value = 0.5;
 var data = [value, value];
 option = {
     title: {
         text: (value * 100).toFixed(0) + '{a|%}',
         textStyle: {
             fontSize: 50,
             fontFamily: 'Microsoft Yahei',
             fontWeight: 'normal',
             color: '#FFFFFF',
             rich: {
                 a: {
                     fontSize: 28,
                 }
             }
         },
         x: 'center',
         y: '35%'
     },

     series: [{
         type: 'liquidFill',
         radius: '40%',
         center: ['50%', '50%'],
         data: [0.4, 0.4],
         backgroundStyle: {
             color: {
                 type: 'radial',
                 x: 0.5,
                 y: 0.5,
                 r: 0.5,
                 colorStops: [{
                     offset: 0,
                     color: 'rgba(0, 0, 0, 0)' // 0% 处的颜色
                 }, {
                     offset: 0.5,
                     color: 'rgba(0, 0, 0, 0)' // 0% 处的颜色
                 }, {
                     offset: 1,
                     color: 'rgba(31, 222, 225, .5)' // 100% 处的颜色
                 }],
                 globalCoord: false // 缺省为 false
             }
         },
         outline: {
             borderDistance: 2,
             itemStyle: {
                 borderWidth: 0,
                 borderColor: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 0,
                     y2: 1,
                     colorStops: [{
                         offset: 0,
                         color: 'rgba(69, 73, 240, 0)'
                     }, {
                         offset: 1,
                         color: 'rgba(69, 73, 240, 1)'
                     }],
                     // globalCoord: false
                 },
                 shadowBlur: 30,
                 shadowColor: 'red',
             }
         },

         color: {
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                 offset: 1,
                 color: 'rgba(58, 71, 212, 0)'
             }, {
                 offset: 0.5,
                 color: 'rgba(31, 222, 225, .2)'
             }, {
                 offset: 0,
                 color: 'rgba(31, 222, 225, 1)'
             }],
             globalCoord: false
         },
         label: {
             normal: {
                 formatter: '',
             }
         }
     }, {
         name: 'decorationTwo',
         type: 'pie',
         color: ['rgba(31, 222, 225, 1)', 'rgba(255,255,255,0)'],
         "center": ["50%", "50%"],
         "radius": ["50%", "51%"],
         hoverAnimation: false,
         lable: {
             normal: {
                 show: false,
             },
             emphasis: {
                 show: false,
             },
         },
         labelLine: {
             normal: {
                 show: false,
             },
         },
         data: new Array(100).fill(100).map(() => {
             return {
                 name: '',
                 value: 2,
             };
         }),
     }, {
         "type": "pie",
         "center": ["50%", "50%"],
         "radius": ["50%", "52%"],
         "hoverAnimation": false,
         "startAngle": 0,
         "data": [{
                 "name": "",
                 "value": 100,
                 labelLine: {
                     show: false
                 },
                 itemStyle: {
                     color: 'rgba(31, 222, 225, 1)'
                 },
                 emphasis: {
                     labelLine: {
                         show: false
                     },
                     itemStyle: {
                         color: 'rgba(31, 222, 225, 1)'
                     },
                 }
             },
             { //画剩余的刻度圆环
                 "name": "",
                 "value": 88,
                 itemStyle: {
                     color: 'rgba(255,255,255,0)'
                 },
                 "label": {
                     show: false
                 },
                 labelLine: {
                     show: false
                 },
                 emphasis: {
                     labelLine: {
                         show: false
                     },
                     itemStyle: {
                         color: 'rgba(255,255,255,0)'
                     },
                 }
             }

         ]
     }]
 };