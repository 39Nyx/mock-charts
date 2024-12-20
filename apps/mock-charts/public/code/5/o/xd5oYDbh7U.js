 var option = {
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: {
         data: ['光照强度']
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
         name: '       今日光照强度( Lx )',
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
         name: '光照强度',
         type: 'line',
         symbol: '',
         itemStyle: {
             normal: {
                 color: 'red',
                 lineStyle: {
                     color: 'red'
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
     }]
 }