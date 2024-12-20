   var data1 = [650000, 1028787] //, 1222067
   var data2 = [360000, 767938] //, 1132715

   var data4 = [0, 0.58] //, 0.19
   var data5 = [0, 1.13] //, 0.48
   var Xdata = ['2018/12/31', '2019/12/31'] //, '2020/7/8'
   option = {
       backgroundColor: 'white',
       color: ['#bf242a', '#1685a9', '#1DCACF', '#6E7FDD'],
       tooltip: {
           trigger: 'axis',
           axisPointer: { // 坐标轴指示器，坐标轴触发有效
               type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
           },
       },
       legend: {
           show: true,
           top: '20px'
       },
       grid: { //图表的位置
           left: '3%',
           right: '10%',
           top: '10%',
           bottom: '5%',
           containLabel: true
       },
       yAxis: [{
               name: '设备数/用户数',
               nameTextStyle: { //y轴上方单位的颜色
                   color: '#6E7FDD'
               },
               type: 'value',
               axisLabel: { //坐标轴刻度标签的相关设置。
                   interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                   margin: 15,
                   textStyle: {
                       color: '#41555d',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 16,
                   }
               },
               axisLine: {
                   lineStyle: {
                       color: '#41555d'
                   }
               },
               splitLine: {
                   lineStyle: {
                       color: 'rgba(27,63,129,.4)'
                   },
               },
               show: true

           },
           {
               name: '增长率(%)',
               // 单位 显示位置
               // nameLocation: 'start',
               nameTextStyle: { //y轴上方单位的颜色
                   color: '#6E7FDD'
               },
               type: 'value',
               axisLabel: { //坐标轴刻度标签的相关设置。
                   interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                   margin: 15,
                   formatter: function (value, index) {
                        return value * 100 + '%';
                    },
                   textStyle: {
                       color: '#c32136',
                       fontStyle: 'normal',
                       fontFamily: '微软雅黑',
                       fontSize: 14,
                   }
               },
               axisLine: {
                   lineStyle: {
                       color: '#c32136'
                   }
               },
               splitLine: {
                   lineStyle: {
                       color: 'rgba(195,33,54,.4)'
                   },
               },
           }
       ],
       xAxis: [{
           type: 'category',
           axisLabel: { //坐标轴刻度标签的相关设置。
               interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
               margin: 15,
               textStyle: {
                   color: '#41555d',
                   fontStyle: 'normal',
                   fontFamily: '微软雅黑',
                   fontSize: 16,
               }
           },
           axisLine: {
               lineStyle: {
                   color: 'rgba(27,63,129,.4)'
               }
           },
           data: Xdata,
       }],
       series: [{
               name: '设备数量',
               type: 'bar',
               barWidth: '58',
               data: data1,
               label: {
                   show: true,
                   position: 'top',
                   fontSize: 16
               }

           }, {
               name: '用户数量',
               type: 'bar',
               barWidth: '58',
               data: data2,
               label: {
                   show: true,
                   position: 'top',
                   fontSize: 16
               }

           },
           {
               name: '设备数量增长率',
               type: 'line',
               data: data4,
               yAxisIndex: 1,
               z: 99,
               // symbol: 'none',
               color: '#ea5506',
               lineStyle: {
                   width: 4
                //   shadowColor: 'rgba(65,11,11,.6)', //设置折线阴影
                //   shadowBlur: 2,
                //   shadowOffsetY: 8,
               },
               symbolSize: 10,
               symbol: 'circle',
               label: {
                    show: true,
                    formatter: function (parm) {
                        return parseInt(parm.value * 100) + '%';
                    },
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: '#ea5506',
                    padding: [4,6,0],
                    borderRadius: 4
                }
           },
           {
               name: '用户数量增长率',
               type: 'line',
               data: data5,
               yAxisIndex: 1,
               z: 99,
               color: '#1fab89', //#ccff33
               lineStyle: {
                   width: 4
               },
               symbolSize: 10,
               symbol: 'circle',
               label: {
                    show: true,
                    formatter: function (parm) {
                        return parseInt(parm.value * 100) + '%';
                    },
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: '#1fab89',
                    padding: [4,6,0],
                    borderRadius: 4
                }
           }
       ]
   };