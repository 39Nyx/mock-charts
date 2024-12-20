 let imgBar = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAECAYAAADiWU2TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRBNUZFMDA3ODJGMTExRUFCRkM1QjQ2RTgyOTc3QTc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRBNUZFMDA4ODJGMTExRUFCRkM1QjQ2RTgyOTc3QTc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REE1RkUwMDU4MkYxMTFFQUJGQzVCNDZFODI5NzdBNzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REE1RkUwMDY4MkYxMTFFQUJGQzVCNDZFODI5NzdBNzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6/5sE8AAAASUlEQVR42mLkUjBiGIyABYi/Q9mMQPwfiWbAwmZA4mMDuNQjm82AhY2hlwXNov9YDPuPx0G4PMGAppcBixl45UAO4xqMUQkQYAAiXhlho+bjlwAAAABJRU5ErkJggg=='
 let g_cellBarImg0_y = new Image();
 g_cellBarImg0_y.src = imgBar;
 let dataBar2 = [10, 20, 40, 60, 80];
 let dataBarShadow2 = [];
 let yMax2 = Math.max.apply(null, dataBar2);
 for (var i = 0; i < dataBar2.length; i++) {
     dataBarShadow2.push(yMax2);
 }

 option = {
     backgroundColor: "#031223",
    
    
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         },
         formatter: "{b} :{c}",
     },
     grid: {
         left: '5px',
         right: '5px',
         bottom: '5px',
         top: '50px',
         containLabel: true,

     },
     xAxis: [{
         type: 'category',                                     
         data: ['断网', '断电', '非法操作', '钥匙开门', '非法人员'],

         axisTick: {
             alignWithLabel: true,
             show: false,
         },
         axisLine: {
             show: false
         },
         axisLabel: {
             interval: 0, // 解决x轴名称过长问题
             textStyle: {
                 color: '#c8d8e3'
             }
         }
     }],
     yAxis: [{
             show: false
         },
        
     ],
     series: [
          {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [17, 3],
            symbolOffset: [-6, 0],
            zlevel: 3,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#24c1ff'
                }
            },
            data: [{
                    value: 10,
                    symbolPosition: 'end'
                }, {
                    value: 20,
                    symbolPosition: 'end'
                }, {
                    value: 40,
                    symbolPosition: 'end'
                },
                {
                    value: 60,
                    symbolPosition: 'end'
                },
                {
                    value: 80,
                    symbolPosition: 'end'
                }
            ]
        },
         {
             name: '动环资产',
             type: 'bar',
             zlevel: 2,
             barWidth: '18', //去掉这个则会显示柱状阴影
              label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#c8d8e3'
                }
            },
             itemStyle: {
                 normal: {
                     color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(30,89,115,1)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(30,89,115,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'transparent'
                            }
                        ]
                    )
                 },
                 
             },
             data: dataBar2,
         },
         {
             name: '背景',
             type: 'bar',
             barWidth: '40',
             zlevel:0,
             barGap: '-160%',
             data: dataBarShadow2,
             itemStyle: {
                 color: {
                     image: g_cellBarImg0_y,
                     repeat: 'repeat'
                 }
                 /*normal: {
                     color: function(params) {
                         var num = myColor.length
                         return myColor[params.dataIndex % num]
                     }
                 }*/
             },

         },

     ]
 };