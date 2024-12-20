var dataArr = 60
  var range = 100
  var colorSet = {
    color: '#68C7FE'
  }
option = {
    backgroundColor: 'transparent',
    grid: {
      left: '5%',
      right: '5%',
      bottom: '2%',
      top: '2%',
      width: '100%',
      height: '100%'
      // containLabel: true
    },
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    title: {
      show: true,
      text: '{a|60}%\n{b|问题案件}',
      textStyle: {
        rich: {
          a: {
            color: '#282828',
            fontSize: 14
          },
          b: {
            color: '#282828',
            fontSize: 14
          }
        }
      },
      left: '40%',
      top: '50%'
    },
    series: [
      {
        name: '内部进度条',
        type: 'gauge',
        center: ['50%', '60%'],
        radius: '70%',

        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [dataArr / range, colorSet.color],
              [1, '#606266']
            ],
            width: 8
          }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false

        },
        splitLine: {
          show: false
        },
        itemStyle: {
          show: false
        },
        detail: {
          show: false
        },
        pointer: {
          show: false,
          length: '75%',
          radius: '20%',
          width: 10 // 指针粗细
        }
      },
      {
        name: '外部刻度',
        type: 'gauge',
        center: ['50%', '60%'],
        radius: '80%',
        min: 0, // 最小刻度
        max: range, // 最大刻度
        splitNumber: 10, // 刻度数量
        startAngle: 225,
        endAngle: -45,
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: [
              [1, 'rgba(0,0,0,0)']
            ]
          }
        }, // 仪表盘轴线
        axisLabel: {
          show: true,
          color: '#606266',
          distance: -20
        }, // 刻度标签。
        axisTick: {
          show: true,
          splitNumber: 5,
          lineStyle: {
            color: colorSet.color, // 用颜色渐变函数不起作用
            width: 1
          },
          length: -5
        }, // 刻度样式
        splitLine: {
          show: true,
          length: -10,
          lineStyle: {
            color: colorSet.color // 用颜色渐变函数不起作用
          }
        }, // 分隔线样式
        detail: {
          show: false
        },
        pointer: {
          show: false
        }
      }
    ]
};