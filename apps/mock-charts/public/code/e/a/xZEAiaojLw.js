 /**
 Created by 王丹 重庆大学
 */

 var max = 7000,
      min = 4000; // todo 
 var maxSize4Pin = 150,
      minSize4Pin = 60;
 var data = [{
         name: '凯旋城幸福里',
         value: 6312
     },
     {
         name: '置铖御府',
         value: 6400
     },
     {
         name: '恒大翡翠华庭',
         value: 6778
     },
     {
         name: '和顺人家',
         value: 4875
     },
     {
         name: '置铖荣华府',
         value: 6200
     },
     {
         name: '凤景新城',
         value: 4387
     },
     {
         name: '云易通电商小镇',
         value: 4200
     },
     {
         name: '永川协信中心',
         value: 6464
     },
     {
         name: '忆诚城市铭人',
         value: 4500
     },
     {
         name: '兴龙湖国际花园',
         value: 4300
     },
     {
         name: '文海国际天街',
         value: 5500
     },
     {
         name: '晟凡兴龙湖一号',
         value: 5300
     },
     {
         name: '昕晖香缇时光',
         value: 6500
     },
     {
         name: '善群天秀龙湾',
         value: 5371
     },
     {
         name: '天悦府',
         value: 7000
     },
     {
         name: '金科昆翔礼悦东方',
         value: 5670
     }
 ];

 var geoCoordMap = {
     '凯旋城幸福里': [105.949664, 29.375608],
     '置铖御府': [105.946502, 29.37361],
     '恒大翡翠华庭': [105.951748, 29.371532],
     '和顺人家': [105.958773, 29.370714],
     '置铖荣华府': [105.959707, 29.372351],
     '凤景新城': [105.965039, 29.374825],
     '云易通电商小镇': [105.957906, 29.379767],
     '永川协信中心': [105.950782, 29.369333],
     '忆诚城市铭人': [105.954933, 29.368703],
     '兴龙湖国际花园': [105.947189, 29.375124],
     '文海国际天街': [105.950585, 29.373149],
     '晟凡兴龙湖一号': [105.954636, 29.367019],
     '昕晖香缇时光': [105.957565, 29.3665],
     '善群天秀龙湾': [105.954582, 29.365052],
     '天悦府': [105.964643, 29.371253],
     '金科昆翔礼悦东方': [105.964293, 29.371945]
 };

 var convertData = function(data) {
     var res = [];
     for (var i = 0; i < data.length; i++) {
         var geoCoord = geoCoordMap[data[i].name];
         if (geoCoord) {
             res.push({
                 name: data[i].name,
                 value: geoCoord.concat(data[i].value)
             });
         }
     }
     return res;
 };



 option = {

     title: {
         text: '永川东站区域楼盘信息(2019.4.25)',
         left: 'center',
         textStyle: {
             color: 'black',
             fontSize: 20,
             lineHeight: 40
         }
     },
     legend: {
         orient: 'vertical',
         y: 'bottom',
         x: 'right',
         data: ['credit_pm2.5'],
         textStyle: {
             color: 'black'
         }
     },
     tooltip: {
         trigger: 'item'
     },
     bmap: {
         center: [105.955746, 29.371325],
         zoom: 17,
         roam: true,
         mapStyle: {
             styleJson: [{
                 "featureType": "poilabel",
                 "elementType": "labels",
                 "stylers": {
                     "visibility": "off"
                 }
             }, {
                 "featureType": "poilabel",
                 "elementType": "labels.icon",
                 "stylers": {
                     "visibility": "off"
                 }
             }, {
                 "featureType": "manmade",
                 "elementType": "labels",
                 "stylers": {
                     "visibility": "off"
                 }
             }, {
                 "featureType": "water",
                 "elementType": "labels.text",
                 "stylers": {
                     "fontsize": 40
                 }
             }, {
                 "featureType": "road",
                 "elementType": "geometry.fill",
                 "stylers": {
                     "color": "white"
                 }
             }, {
                 "featureType": "building",
                 "elementType": "geometry",
                 "stylers": {
                     "visibility": "on"
                 }
             }, {
                 "featureType": "green",
                 "elementType": "geometry",
                 "stylers": {
                     "visibility": "on"
                 }
             }, {
                 "featureType": "estate",
                 "elementType": "geometry",
                 "stylers": {
                     "visibility": "off"
                 }
             }, {
                 "featureType": "education",
                 "elementType": "geometry",
                 "stylers": {
                     "visibility": "on"
                 }
             }, {
                 "featureType": "education",
                 "elementType": "labels",
                 "stylers": {
                     "visibility": "on"
                 }
             }, {
                 "featureType": "shopping",
                 "elementType": "geometry",
                 "stylers": {
                     "visibility": "off"
                 }
             }]
         }
     },
     series: [{
             name: '成交均价',
             type: 'scatter',
             coordinateSystem: 'bmap',
             data: convertData(data),
             encode: {
                 value: 2
             },
             symbolSize: function(val) {
                 return val[2] / 200;
             },
             label: {
                 normal: {
                     formatter: '{b}',
                     position: 'right',
                     show: false,
                     color: 'black'
                 },
                 emphasis: {
                     show: true
                 }
             },
             itemStyle: {
                 normal: {
                     color: '#05C3F9'
                 }
             }
         },
         {
             name: '成交均价',
             type: 'scatter',
             coordinateSystem: 'bmap',
             symbol: 'pin',
             encode: {
                 value: 2
             },
             symbolSize: function(val) {
                 var a = (maxSize4Pin - minSize4Pin) / (max - min);
                 var b = minSize4Pin - a * min;
                 b = maxSize4Pin - a * max;
                 return a * val[2] + b;
             },
             label: {
                 normal: {
                     show: true,
                     textStyle: {
                         color: '#fff',
                         fontSize: 16,
                     }
                 }
             },
             itemStyle: {
                 normal: {
                     color: '#F62157',
                     opacity: 0.8 //标志颜色
                 }
             },
             zlevel: 6,
             data: convertData(data),
         },
         {
             name: 'Top 5',
             type: 'effectScatter',
             coordinateSystem: 'bmap',
             encode: {
                 value: 2
             },
             data: convertData(data.sort(function(a, b) {
                 return b.value - a.value;
             }).slice(0, 6)),
             symbolSize: function(val) {
                 return val[2] / 200;
             },
             showEffectOn: 'render',
             rippleEffect: {
                 brushType: 'stroke'
             },
             hoverAnimation: true,
             label: {
                 normal: {
                     formatter: '{b}',
                     position: 'right',
                     show: true,
                     color: 'black',
                     fontSize: 20
                 }
             },
             itemStyle: {
                 normal: {
                     color: '#05C3F9',
                     shadowBlur: 10,
                     shadowColor: '#333'
                 }
             },
             zlevel: 1
         },
         {
             name: '中交世通大厦',
             type: 'effectScatter',
             coordinateSystem: 'bmap',
             data: [{
                 name: '世通大厦',
                 value: [105.953994, 29.374664, 100]
             }],
             symbol: 'diamond',
             symbolSize: 30,
             showEffectOn: 'render',
             rippleEffect: {
                 brushType: 'stroke'
             },
             hoverAnimation: true,
             label: {
                 normal: {
                     formatter: '{b}',
                     position: 'right',
                     show: true,
                     fontSize: 20,
                     color: 'black'
                 }
             },
             itemStyle: {
                 normal: {
                     color: 'red',
                     shadowBlur: 10,
                     shadowColor: '#05C3F9'
                 }
             },
             zlevel: 2
         },
         {
             name: '永川东站',
             type: 'effectScatter',
             coordinateSystem: 'bmap',
             data: [{
                 name: '永川东站',
                 value: [105.955836, 29.377312, 100]
             }],
             symbol: 'diamond',
             symbolSize: 30,
             showEffectOn: 'render',
             rippleEffect: {
                 brushType: 'stroke'
             },
             hoverAnimation: true,
             label: {
                 normal: {
                     formatter: '{b}',
                     position: 'right',
                     show: true,
                     fontSize: 20,
                     color: 'black'
                 }
             },
             itemStyle: {
                 normal: {
                     color: 'red',
                     shadowBlur: 10,
                     shadowColor: '#05C3F9'
                 }
             },
             zlevel: 2
         },


     ]
 };