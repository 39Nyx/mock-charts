 var option = {
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: {
         data: ['小时发电量', '总发电量']
     },
     grid: {
         left: '3%',
         right: '3%',
         bottom: '3%',
         top: '15%',
         containLabel: true
     },
     xAxis: [{
         data: [
             "1444",
             "2444",
             "3444",
             "4444",
             "5444",
             "6444",
             "7444",
             "8444",
             "9444",
             "10444"
         ],
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             interval: 0,
             rotate: 0
         }
     }],
     yAxis: [{
         type: 'value',
         name: '       今日发电量( KWh )',
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         splitLine: {
             show: true,
             lineStyle: {
                 type: 'dashed'
             }
         },
         axisLabel: {}
     }],
     series: [{
         name: '小时发电量',
         type: 'line',
         symbol: '',
         itemStyle: {
             normal: {
                 color: '#12cbe0',
                 lineStyle: {
                     color: '#12cbe0'
                 },
             }
         },
         data: [
             10,
             11,
             10,
             12,
             13,
             15,
             16,
             10,
             20,
             10
         ]
     }, {
         name: '总发电量',
         type: 'bar',
         barWidth: '20%',
         itemStyle: {
             normal: {
                 barBorderRadius: [30, 30, 0, 0],
                 color: new echarts.graphic.LinearGradient(
                     0, 0, 0, 1, [{
                             offset: 0,
                             color: '#00feff'
                         },
                         {
                             offset: 0.5,
                             color: '#027eff'
                         },
                         {
                             offset: 1,
                             color: '#0286ff'
                         }
                     ]
                 )
             }
         },
         data: [
             140,
             110,
             100,
             90,
             80,
             70,
             50,
             40,
             30,
             20
         ]
     }]
 }