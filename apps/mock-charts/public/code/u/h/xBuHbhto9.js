 function timeParse(time, format) {
     if (time === "" || time === undefined || time === null) {
         return '';
     };
     var t = new Date(time);
     t = t.getFullYear() > 0 ? t : new Date(Date.parse(time.replace(/-/g, "/"))); // Safari 出现日期转换的问题
     var tf = function(i) {
         return (i < 10 ? '0' : '') + i
     };
     return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
         switch (a) {
             case 'yyyy':
                 return tf(t.getFullYear());
             case 'MM':
                 return tf(t.getMonth() + 1);
             case 'mm':
                 return tf(t.getMinutes());
             case 'dd':
                 return tf(t.getDate());
             case 'HH':
                 return tf(t.getHours());
             case 'ss':
                 return tf(t.getSeconds());
         }
     })
 }
 let markData = [{
     name: "早餐",
     xAxis: 1569979320000
 }, {
     name: "午餐",
     xAxis: 1569990120000
 }, {
     name: "晚餐",
     xAxis: 1570016300000
 }]

  option = {
     tooltip: {
         trigger: 'item',
         axisPointer: {
             show: true,
             type: 'cross',
             lineStyle: {
                 type: 'dashed',
                 width: 1
             },
             label: {
                 backgroundColor: "rgba(50, 50, 50, 0.8)"
             }
         },
         formatter: function(e) {
             let value = e.value;
             if (e.seriesIndex === 0) { // 血糖值
                 return e.marker + "血糖值：" + value[1] + "<br/>时间：" + timeParse(value[0], "MM-dd HH:mm:ss");
             } else if (e.seriesIndex === 1) { // 用药记录
                 return e.marker + "剂量：" + value[1] + "<br/>时间：" + timeParse(value[0], "MM-dd HH:mm:ss");
             } else {
                 return e.marker + "饮食记录：" + value[1] + "<br/>时间：" + timeParse(value[0], "MM-dd HH:mm:ss");
             }
         }
     },
     dataZoom: [{
         // realtime: false, // 拖动时，是否实时更新系列的视图。如果设置为 false，则只在拖拽结束的时候更新。
         startValue: 0,
         xAxisIndex: [0, 1],
         minValueSpan: 3600 * 24 * 1000,
         maxValueSpan: 3600 * 24 * 1000,
         top: "51%"
     }],
     grid: [{
         left: '8%',
         right: 50,
         height: '35%'
     }, {
         left: '8%',
         right: 50,
         top: '58%',
         height: '35%'
     }],
     xAxis: [{
         type: 'time',
         boundaryGap: true,
         interval: 3600 * 4 * 1000,
         min: 1569945600000,
         max: 1570536000000,
         splitLine: {
             show: false
         },
         axisLine: {
             lineStyle: { // 轴上的线样式
                 color: '#ccc'
             }
         },
         axisLabel: {
             color: "#333"
         }
     }, {
         gridIndex: 1,
         type: 'time',
         boundaryGap: true,
         interval: 3600 * 4 * 1000,
         min: 1569945600000,
         max: 1570536000000,
         axisLine: {
             onZero: true
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         position: 'bottom',

         axisLine: {

             lineStyle: { // 轴上的线样式
                 color: '#ccc'
             }
         },
         axisLabel: {
             show: false,
             color: "#333"
         }
     }],
     yAxis: [{
         name: '血糖（mmol/L）',
         nameGap: 40,
         nameTextStyle: {
             color: "#333"
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             show: true,
             color: "#333",
             interval: 'auto'
         },
         axisLine: {
             lineStyle: { // 轴上的线样式
                 color: '#ccc'
             }
         },
         splitLine: {
             lineStyle: {
                 color: '#dedede'
             }
         }
     }, {
         name: '', // 隐藏的Y轴
         gridIndex: 1,
         max: 20,
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
             show: false
         }
     }, {
         name: '胰岛素（IU）',
         nameGap: 40,
         nameTextStyle: {
             color: "#333"
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             show: true,
             color: "#333",
             interval: 'auto'
         },
         axisLine: {
             lineStyle: { // 轴上的线样式
                 color: '#ccc'
             }
         },
         splitLine: {
             show: false
         }
     }],
     series: [{
             type: 'line',
             yAxisIndex: 0,
             color: ['#ED5358'],
             smooth: true,
             symbol: "roundRect",
             symbolSize: 8,
             data: [
                 [1569945600000, 20],
                 [1569960000000, 31],
                 [1569974400000, 21],
                 [1569988800000, 3],
                 [1570003200000, 1],
                 [1570017600000, 5],
                 [1570032000000, 6],
                 [1570046400000, 2],
                 [1570060800000, 2],
                 [1570075200000, 8],
                 [1570089600000, 1],
                 [1570104000000, 6],
                 [1570118400000, 8],
                 [1570132800000, 5],
                 [1570147200000, 12],
                 [1570161600000, 12],
                 [1570176000000, 0],
                 [1570190400000, 9],
                 [1570204800000, 10],
                 [1570219200000, 5],
                 [1570233600000, 0],
                 [1570248000000, 9],
                 [1570262400000, 22],
                 [1570276800000, 1],
                 [1570291200000, 3],
                 [1570305600000, 9],
                 [1570320000000, 7],
                 [1570334400000, 8],
                 [1570348800000, 14],
                 [1570363200000, 17],
                 [1570377600000, 28],
                 [1570392000000, 11],
                 [1570406400000, 21],
                 [1570420800000, 26],
                 [1570435200000, 12],
                 [1570449600000, 28],
                 [1570464000000, 15],
                 [1570478400000, 28],
                 [1570492800000, 18],
                 [1570507200000, 39],
                 [1570521600000, 1],
                 [1570536000000, 30]
             ]
         },
         {
             type: 'scatter',
             yAxisIndex: 2,
             color: ['#0073cf'],
             symbol: "image://data:image/png;base64,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",
             symbolSize: 25,
             data: [
                 [1569945600000, 1],
                 [1569960000000, 5],
                 [1569974400000, 4],
                 [1569988800000, 8],
                 [1570003200000, 8],
                 [1570017600000, 7],
                 [1570032000000, 2],
                 [1570046400000, 8],
                 [1570060800000, 6],
                 [1570075200000, 4],
                 [1570089600000, 1],
                 [1570104000000, 4],
                 [1570118400000, 6],
                 [1570132800000, 1],
                 [1570147200000, 7],
                 [1570161600000, 3],
                 [1570176000000, 8],
                 [1570190400000, 0],
                 [1570204800000, 5],
                 [1570219200000, 7],
                 [1570233600000, 7],
                 [1570248000000, 4],
                 [1570262400000, 0],
                 [1570276800000, 3],
                 [1570291200000, 8],
                 [1570305600000, 7],
                 [1570320000000, 7],
                 [1570334400000, 6],
                 [1570348800000, 5],
                 [1570363200000, 5],
                 [1570377600000, 3],
                 [1570392000000, 7],
                 [1570406400000, 7],
                 [1570420800000, 8],
                 [1570435200000, 7],
                 [1570449600000, 4],
                 [1570464000000, 2],
                 [1570478400000, 4],
                 [1570492800000, 7],
                 [1570507200000, 7],
                 [1570521600000, 4],
                 [1570536000000, 8]
             ],
             markLine: {
                 silent: true,
                 symbol: "diamond",
                 symbolSize: 10,
                 label: {
                     color: "#333",
                     formatter: function(e) {
                         let item = markData[e.dataIndex];
                         return `${item.name}\n${timeParse(e.value, 'HH:mm')}\n`; // "早餐\n"+ timeParse(e.value, 'HH:mm')+"\n";
                     }
                 },
                 lineStyle: {
                     normal: {
                         color: "#999",
                         type: 'solid'
                     }
                 },
                 data: markData
             }
         }, {
             name: '表格饮食记录',
             type: 'scatter',
             xAxisIndex: 1,
             yAxisIndex: 1,
             animation: false,
             symbol: "rect",
             symbolSize: [150, 240],
             itemStyle: {
                 color: "transparent"
             },
             label: {
                 show: true,
                 position: "insideTop",
                 formatter: function(e) {
                     return [
                         '{x|x} {a|牛奶牛奶200ml 23:00}',
                         '{x|x} {a|油条200ml 12:00}',
                         '{x|x} {a|豆浆100ml 13:00}',
                         '{x|x} {a|炒粉200k 23:00}',
                         '{x|x} {a|炒粉200k 23:00}',
                         '{x|x} {a|炒粉200k 23:00}',
                         '{x|x} {a|炒粉200k 23:00}',
                         '{x|x} {a|豆浆100ml 13:00}'
                     ].join('\n')
                 },
                 rich: {
                     a: {
                         color: "#333",
                         lineHeight: 29,
                         verticalAlign: "top",
                     },
                     x: {
                         lineHeight: 29,
                         verticalAlign: "top",
                         width: 10,
                         height: 10,
                         backgroundColor: '#4D9AFE', // 4D9AFE
                         borderRadius: 5
                     }
                 }
             },
             markLine: {
                 silent: true,
                 symbol: "diamond",
                 symbolSize: 5,
                 label: {
                     color: "#333",
                     formatter: function(e) {
                         return "";
                     }
                 },
                 lineStyle: {
                     normal: {
                         color: "#ccc",
                         type: 'solid'
                     }
                 },
                 data: [{
                     "xAxis": 1569945600000
                 }, {
                     "xAxis": 1569960000000
                 }, {
                     "xAxis": 1569974400000
                 }, {
                     "xAxis": 1569988800000
                 }, {
                     "xAxis": 1570003200000
                 }, {
                     "xAxis": 1570017600000
                 }, {
                     "xAxis": 1570032000000
                 }, {
                     "xAxis": 1570046400000
                 }, {
                     "xAxis": 1570060800000
                 }, {
                     "xAxis": 1570075200000
                 }, {
                     "xAxis": 1570089600000
                 }, {
                     "xAxis": 1570104000000
                 }, {
                     "xAxis": 1570118400000
                 }, {
                     "xAxis": 1570132800000
                 }, {
                     "xAxis": 1570147200000
                 }, {
                     "xAxis": 1570161600000
                 }, {
                     "xAxis": 1570176000000
                 }, {
                     "xAxis": 1570190400000
                 }, {
                     "xAxis": 1570204800000
                 }, {
                     "xAxis": 1570219200000
                 }, {
                     "xAxis": 1570233600000
                 }, {
                     "xAxis": 1570248000000
                 }, {
                     "xAxis": 1570262400000
                 }, {
                     "xAxis": 1570276800000
                 }, {
                     "xAxis": 1570291200000
                 }, {
                     "xAxis": 1570305600000
                 }, {
                     "xAxis": 1570320000000
                 }, {
                     "xAxis": 1570334400000
                 }, {
                     "xAxis": 1570348800000
                 }, {
                     "xAxis": 1570363200000
                 }, {
                     "xAxis": 1570377600000
                 }, {
                     "xAxis": 1570392000000
                 }, {
                     "xAxis": 1570406400000
                 }, {
                     "xAxis": 1570420800000
                 }, {
                     "xAxis": 1570435200000
                 }, {
                     "xAxis": 1570449600000
                 }, {
                     "xAxis": 1570464000000
                 }, {
                     "xAxis": 1570478400000
                 }, {
                     "xAxis": 1570492800000
                 }, {
                     "xAxis": 1570507200000
                 }, {
                     "xAxis": 1570521600000
                 }, {
                     "xAxis": 1570536000000
                 }]
             },
             data: [
                 [1569952800000, 10],
                 [1569967200000, 10],
                 [1569981600000, 10],
                 [1569996000000, 10],
                 [1570010400000, 10],
                 [1570024800000, 10],
                 [1570039200000, 10],
                 [1570053600000, 10],
                 [1570068000000, 10],
                 [1570082400000, 10],
                 [1570096800000, 10],
                 [1570111200000, 10],
                 [1570125600000, 10],
                 [1570140000000, 10],
                 [1570154400000, 10],
                 [1570168800000, 10],
                 [1570183200000, 10],
                 [1570197600000, 10],
                 [1570212000000, 10],
                 [1570226400000, 10],
                 [1570240800000, 10],
                 [1570255200000, 10],
                 [1570269600000, 10],
                 [1570284000000, 10],
                 [1570298400000, 10],
                 [1570312800000, 10],
                 [1570327200000, 10],
                 [1570341600000, 10],
                 [1570356000000, 10],
                 [1570370400000, 10],
                 [1570384800000, 10],
                 [1570399200000, 10],
                 [1570413600000, 10],
                 [1570428000000, 10],
                 [1570442400000, 10],
                 [1570456800000, 10],
                 [1570471200000, 10],
                 [1570485600000, 10],
                 [1570500000000, 10],
                 [1570514400000, 10],
                 [1570528800000, 10],
                 [1570543200000, 10]
             ]
         }
     ]
 };