var weatherIcons = {
    'Sunny': './data/asset/img/weather/sunny_128.png',
    'Cloudy': './data/asset/img/weather/cloudy_128.png',
    'Showers': './data/asset/img/weather/showers_128.png'
};
//w：100% h:245
option = {
        backgroundColor:'#1E3350',
        legend:{
            itemWidth:20,
            itemHeiht:20,
            data:[
                    {
                        name:'TPS',
                        textStyle:{
                            color:'#fff',
                            fontSize:20,
                        },
                        icon:'image://'+weatherIcons.Sunny,
                    }
                ],
            left:40,
            selectedMode:false,
             
         },
        //坐标轴网格设置
        // grid: {
        //   left: '6%',
        //   right: '7%',
        //   top: '18%',
        //   bottom: '6%',
        //   containLabel: true,
        // },
        //提示框组件。
        // tooltip: {
        //     trigger: 'axis'
        // },
        tooltip: {
            trigger: 'axis',
            formatter: function(data)
            {
                return 'TPS：'+data[0].value + '<br/>' + '时间：'+data[0].axisValue ; 
            }
        },
        textStyle: {
          fontSize: '14',
          fontWeight: 'normal',
          color: '#BCBEBD',
        },
        xAxis: {
            axisTick: {show: false},
            //X轴设置
            axisLine:{
                lineStyle:{
                    color:'rgb(56,77,104)',
                },    
            },
            type: 'category',
            //坐标轴两边留白策略
            boundaryGap: false,
            //坐标轴在 grid 区域中的分隔线。
            splitLine:{
                show: true,
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                  color: 'rgb(56,77,104)',
                  type:'value',
                }  
            },
        
          data: ['09:00','09:10','09:20','09:30','09:40','09:50','10:00',
          '10:10','10:20','10:30'],
        },
        yAxis: {
          //axisLine: {show: false},
          axisLine:{
                lineStyle:{
                    color:'rgb(56,77,104)',
                    type:'dotted',
                },    
          },
          axisTick: {show: false},
          type: 'value',
          max:30,
          min:0,
          minInterval: 10 ,
          splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
              color: 'rgb(56,77,104)',
              type:'solid',
            }
          },
       
        },
        series: [{
          name: 'TPS',
          type: 'line',
          //是否显示平滑曲线
          smooth: true,
          //标记的图形是否显示
          showSymbol: true,
          //标记的图形
          symbol:'circle',
          symbolSize:1,
          itemStyle: {
            normal: {
            color: '#fff',
              lineStyle: {
                color: '#0480FA',
              },
              borderColor:'#0480FA',
            }
          },
        //   areaStyle: {
        //     normal: {
        //       color: {
        //         type: 'linear',
        //         x: 0,
        //         y: 0,
        //         x2: 0,
        //         y2: 1,
        //         colorStops: [{
        //           offset: 0,
        //           color: 'rgba(39,93,127, 0.5)',
        //         }, {
        //           offset: 1,
        //           color: 'rgba(29,52,83, 0)',
        //         }],
        //         globalCoord: false
        //       },
        //     }
        //   },
        
          data: [8, 10, 9, 14, 12, 20, 24, 20, 10, 7],
        }]
};