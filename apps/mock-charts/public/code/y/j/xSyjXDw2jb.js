

 option = {
     title: {
         text: '2015年各省市小麦产量（不含港澳台）',
         subtext: '数据来源于统计年鉴，单位：万吨，大地丰收制图',
         x: 'center'
     },
     tooltip: {
         trigger: 'item'
     },

     dataRange: {
         min: 0,
         max: 4000,
         x: 'left',
         y: 'bottom',
       
         text: ['高', '低'], // 文本，默认为数值文本
         calculable: false,

         splitNumber: 0,


         color: ['orangered', 'gold','yellow', 'green', 'lightgreen', 'lightgrey']
     },
     toolbox: {
         show: true,
         orient: 'vertical',
         x: 'right',
         y: 'center',
         feature: {
             mark: {
                 show: true
             },
             dataView: {
                 show: true,
                 readOnly: false
             },
             dataZoom: {
                 show: true
             },
             restore: {
                 show: true
             },
             saveAsImage: {
                 show: true
             }
         }
     },
     roamController: {
         show: true,
         x: 'right',
         mapTypeControl: {
             'china': true
         }
     },
     series: [{
         name: '猪肉',
         type: 'map',
         mapType: 'china',
         roam: false,
         itemStyle: {
             normal: {
                 label: {
                     show: true
                 }
             },
             emphasis: {
                 label: {
                     show: true
                 }
             }
         },
         data: [{
             name: '河南',
             value: 3501
         }, {
             name: '山东',
             value: 2346.6
         }, {
             name: '河北',
             value: 1435
         }, {
             name: '安徽',
             value: 1411
         }, {
             name: '江苏',
             value: 1174
         }, {
             name: '新疆',
             value: 698.3
         }, {
             name: '陕西',
             value: 458.1
         }, {
             name: '四川',
             value: 426.3
         }, {
             name: '湖北',
             value: 420.9
         }, {
             name: '甘肃',
             value: 281
         }, {
             name: '山西',
             value: 271.4
         }, {
             name: '内蒙古',
             value: 158.3
         }, {
             name: '云南',
             value: 90.6
         }, {
             name: '贵州',
             value: 61.7
         }, {
             name: '天津',
             value: 59.8
         }, {
             name: '宁夏',
             value: 39.6
         }, {
             name: '浙江',
             value: 35.1
         }, {
             name: '青海',
             value: 34.1
         }, {
             name: '西藏',
             value: 23.4
         }, {
             name: '重庆',
             value: 22.9
         }, {
             name: '黑龙江',
             value: 21.8
         }, {
             name: '上海',
             value: 19.9
         }, {
             name: '北京',
             value: 11.1
         }, {
             name: '湖南',
             value: 9.4
         }, {
             name: '辽宁',
             value: 2.7
         }, {
             name: '江西',
             value: 2.6
         }, {
             name: '广西',
             value: 0.9
         }, {
             name: '福建',
             value: 0.6
         }, {
             name: '广东',
             value: 0.3
         }, {
             name: '吉林',
             value: 0.1
         }, {
             name: '海南',
             value: '-'
         }]
         
     }, ]
 };