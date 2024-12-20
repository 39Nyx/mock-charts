var data = 90;
option = {
    backgroundColor: '#151e29',
    tooltip: {
      formatter: '{c}%',
      // zlevel: 2
    },
    series: [
      { // 刻度与内部指针
        name: '',
        type: 'gauge',
        radius: '85%',
        startAngle: 180,
        endAngle: 0,
        splitNumber: 6, // 分割段数，默认为5
        axisLine: { // 坐标轴线
          show: true,
          lineStyle: { // 属性lineStyle控制线条样式
            color: [
              [0.6, '#1e97e2'],
              [0.9, '#eac42d'],
              [1, '#f95448']
            ],
            opacity: 0
          }
        },
        axisTick: { // 坐标轴小标记
          splitNumber: 5, // 每份split细分多少段
          length: 5, // 属性length控制线长
          lineStyle: { // 属性lineStyle控制线条样式
            color: 'rgba(255, 255, 255, 0.25)',
            width: 0.8
          }
        },
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
          show: false
        },
        splitLine: { // 分隔线
          show: false
        },
        pointer: {
          width: 3
        },
        itemStyle: {
          normal: {
            color: 'rgb(158, 173, 192)'
          }
        },
        title: {
          show: true,
          offsetCenter: [0, '-40%'], // x, y，单位px
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            fontWeight: 'bolder'
          }
        },
        detail: {
          formatter: '{value}%',
          offsetCenter: [0, '-50%'],
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bolder'
          }
        },
        data: [{
          name: '',
          value: data
        }]
      },
      { // 与刻度分离的外层圆弧
        type: 'gauge',
        radius: '90%',
        startAngle: 180,
        endAngle: 0,
        splitNumber: 6, // 分割段数，默认为5
        axisLine: {
          show:true,
          lineStyle:{
            color:[
              [0.6, '#1e97e2'],
              [0.9, '#eac42d'],
              [1, '#f95448'],
            ],
            width:1
          }
        },
        splitLine:{
          show: true,
          length: 3,
          lineStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel:{//刻度标签
          show:false
        },
        pointer:{//指针
          show: false
        },
        detail:{
          show:false
        },
      },
      {
        name: '进度展示条',
        type: 'pie',
        radius: ['75%', '85%'],
        avoidLabelOverlap: false,
        startAngle: 180,
        zlevel: 1,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [{
          // 展示数据
          value: data / 2,
          name: '显示进度条',
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 1,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(25,132,205,0.8)' // 0% 处的颜色
                },{
                  offset: 1,
                  color: 'rgba(00,00,00, 0.8)' // 100% 处的颜色
                }],
                globalCoord: true // 缺省为 false
              }
            }
          }
        }, {
          // 占位数据(写死)
          value: 100-data/2,
          name: '空白部分',
          itemStyle: {
            normal: {
              color: 'transparent'
            }
          }
        }]
      }
    ]
  }

myChart.setOption(option, true);
