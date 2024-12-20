option = {
  tooltip: { //提示框组件
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          label: {
              backgroundColor: '#6a7985'
          }
      },
      textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontFamily: '微软雅黑',
          fontSize: 12,
      }
  },
  title: {
      text: '公共交通人均出行次数',
      textStyle:{
          color:'#62c8cd',
          fontSize:'18',
      },
      x:12,
      y:10,
  },
  textStyle: {
      color: '#a8aab0',
      fontStyle: 'normal',
      fontFamily: '微软雅黑',
      fontSize: 12,
  },
  grid: {
      left: 15,
      right: 30,
      bottom: 25,
      top:'20%',
      containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
      axisLabel: { //坐标轴刻度标签的相关设置。
          interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
          margin:15,
      },
      axisTick:{//坐标轴刻度相关设置。
          show: false,
      },
      axisLine:{
        lineStyle:{
            color:'#fff',
            opacity:0.2
        }
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线。
          show: true,
          lineStyle: {
              color: ['#fff'],
              opacity:0.1
          }
      }
    }
  ],
  yAxis: [
    {
      max:10,
      min:0,
      interval:2,
      type: 'value',
      splitNumber: 4,
      axisLine:{
        lineStyle:{
            color:'#fff',
            opacity:0.2
        }
      },
      axisTick:{
        show: false
      },
      splitLine: { //坐标轴在 grid 区域中的分隔线。
        show: false,
      }
    }
  ],
  series: [
    {
      name: '公共交通人均出行次数',
      type: 'line',
      symbol: 'circle',
      symbolSize: 8, //空心标记的大小
      smooth: true, //是否平滑曲线显示
      smoothMonotone: 'x',//指明是在 x 轴或者 y 轴上保持单调性
      label: {//图形上的文本标签
        normal: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#b2b2b2',
            },
        },
      },
      data:[2.8,8.1,5,2,9,5,4,6,2,3,4,8],
      // symbolSize:function(value,params){
      //   return [2.8,8.1,5,2,9,5,4,6,2,3,4,8];
      // },
      lineStyle: {//线条样式
          normal: {
              width: 2,
              color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 2,
                  y2: 0,
                  colorStops: [{
                      offset: 0, color: '#4c428c' // 0% 处的颜色
                  }, {
                      offset: 0.5, color: '#6d7179' // 37% 处的颜色
                  }, {
                      offset: 0.7, color: '#7a9170' // 72% 处的颜色
                  },{
                      offset: 0.9, color: '#6d727a' // 100% 处的颜色
                  }
                  ,{
                      offset: 1, color: '#928445' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
              }
          }
      },
      itemStyle: {//折线拐点标志的样式。
        normal: {
          color: '#262c41',
          borderColor: '#4ac7f5',
          borderWidth: 2,
        }
      }
    },
  ]
};