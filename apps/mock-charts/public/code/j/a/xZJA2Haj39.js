 var option = {
     backgroundColor: 'black',
     color: ['#2adecf'],
     textStyle: {
         color: 'rgb(222,222,222)',
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'shadow'
         }
     },
     legend: {
         data: ['报警次数', '累计百分比'],
         textStyle: {
             color: '#FFFFFF'
         }
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
             show: true
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
             name: '报警次数',
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisLabel: {}
         },
         {
             type: 'value',
             name: '累计百分比(%)  ',
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisLabel: {}
         }
     ],
     series: [{
         name: '报警次数',
         type: 'bar',
         barWidth: '20%',
         itemStyle: {
             normal: {
                 barBorderRadius: [30, 30, 0, 0],
                 color: new echarts.graphic.LinearGradient(
                     0, 1, 0, 0, [{
                             offset: 0,
                             color: '#7096DB'
                         },
                         {
                             offset: 0.5,
                             color: '#629EFD'
                         }, {
                             offset: 1,
                             color: '#44ADFC'
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
     }, {
         name: '累计百分比',
         type: 'line',
         yAxisIndex: 1,
         itemStyle: {
             normal: {
                 barBorderRadius: [30, 30, 0, 0],
                 color: 'red'
             }
         },
         data: [
             10,
             20,
             30,
             35,
             60,
             70,
             75,
             86,
             90,
             92
         ],
         markLine: {
             symbol: 'none',
             itemStyle: {
                 normal: {
                     lineStyle: {
                         type: 'dashed',
                         color: 'red'
                     },
                     label: {
                         show: true,
                         position: 'left'
                     }
                 }
             },
             large: true,
             effect: {
                 show: false,
                 loop: true,
                 period: 0,
                 scaleSize: 2,
                 color: null,
                 shadowColor: null,
                 shadowBlur: null
             },
             data: [
                 [{
                         name: '',
                         xAxis: '1444',
                         yAxis: '80'
                     },
                     {
                         name: '',
                         xAxis: '10444',
                         yAxis: '80'
                     }
                 ]
             ]
         }
     }]
 }