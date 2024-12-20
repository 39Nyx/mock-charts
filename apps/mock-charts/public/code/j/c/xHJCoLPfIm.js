 option = {
     backgroundColor: '#1B2D3B',

     title: {
         text: 'Rose Pie',
         left: 'center',
         top: 20,
         textStyle: {
             color: '#ccc'
         }
     },

     tooltip: {
         trigger: 'item',
         formatter: "{a} <br/>{b} : {c} ({d}%)"
     },

     //visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
     visualMap: {
         // 不显示 visualMap 组件，只用于明暗度的映射
         show: false,
         min: 80,
         max: 600,
         inRange: {
             colorLightness: [0, 1] //颜色的明暗度
         }
     },
     series: [{
         name: '访问来源',
         type: 'pie',
         radius: '55%',
         center: ['50%', '50%'],
         data: [{
                 value: 335,
                 name: '直接访问'
             },
             {
                 value: 310,
                 name: '邮件营销'
             },
             {
                 value: 274,
                 name: '联盟广告'
             },
             {
                 value: 235,
                 name: '视频广告'
             },
             {
                 value: 400,
                 name: '搜索引擎'
             }
         ].sort(function(a, b) {
             return a.value - b.value
         }), //根据value排序
         roseType: 'angle', //是否展示成南丁格尔图，通过半径区分数据大小。
         label: {
             textStyle: {
                 color: 'rgba(255, 255, 255, 0.7)'
             }

         },
         labelLine: {
             lineStyle: {
                 color: 'rgba(255, 255, 255, 0.7)'
             },
             smooth: 0.2,
             length: 10,
             length2: 20
         },
         itemStyle: {
             color: '#c23531',
             shadowBlur: 200,
             shadowColor: 'rgba(0, 0, 0, 0.5)'
         }
     }]
 };