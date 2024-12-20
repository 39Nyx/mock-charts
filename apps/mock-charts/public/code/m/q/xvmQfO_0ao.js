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
     grid: {
         left: '3%',
         right: '10%',
         bottom: '3%',
         top: '10%',
         containLabel: true
     },
     yAxis: [{
         data: [
  "CZ-NB01/01",
  "CZ-NB01/02",
  "CZ-NB01/03",
  "CZ-NB01/04",
  "CZ-NB01/05",
  "CZ-NB01/06",
  "CZ-NB01/07",
  "CZ-NB01/08",
  "CZ-NB01/09",
  "CZ-NB01/10",
  "CZ-NB01/11"
],
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisLabel: {
             interval: 0,
         }
     }],
     xAxis: [{
         type: 'value',
         name: '',
         axisTick: {
             show: false
         },
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisLabel: {
             show: true,
             interval: 0
         }
     }],
     series: [{
         name: '',
         type: 'bar',
         barGap: '10%',
         barCategoryGap: '60%',
         itemStyle: {
             normal: {
                 //每个柱子的颜色即为colorList数组里的每一项,如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                 color: function(params) {
                     var colorList = [
                         ['#1471fb', '#50bace'],
                         ['#1471fb', '#50bace'],
                         ['#1471fb', '#50bace'],
                         ['#1471fb', '#50bace'],
                         ['#1471fb', '#50bace'],
                         ['#58d5f1', '#3dd3c0'],
                         ['#58d5f1', '#3dd3c0'],
                         ['#58d5f1', '#3dd3c0'],
                         ['#58d5f1', '#3dd3c0'],
                         ['#58d5f1', '#3dd3c0'],
                         ['#58d5f1', '#3dd3c0']
                     ];
                     var index = params.dataIndex;
                     if (params.dataIndex >= colorList.length) {
                         index = colorList.length - 1;
                     }
                     return new echarts.graphic.LinearGradient(0, 0, 0, 1,
                         [{
                                 offset: 0,
                                 color: colorList[index][0]
                             },
                             // {offset: 0.5, color: colorList[index][1]},
                             {
                                 offset: 1,
                                 color: colorList[index][1]
                             }
                         ]);
                 }
             }
         },
         data: [
  80,
  114,
  210,
  320,
  540,
  650,
  760,
  850,
  960,
  1500,
  500
],
         zlevel: 11
     }]
 }