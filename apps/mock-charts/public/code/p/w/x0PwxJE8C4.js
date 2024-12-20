option = {
    backgroundColor: '#fff',
    title: {
        text: '折线图Z标记最值'
    },
    xAxis: {
        type: 'category',
        splitLine: true,
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#F2F5FB',
            type: 'solid'
          }
        },
        axisLabel: {
          interval: 2,
          fontSize: 8,
          color: '#828CA2',
          margin: 11,
          fontWeight: 400
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    yAxis: {
        type: 'value',
        axisTick: false,
        splitNumber: 2,
        scale: true,
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: '#F2F5FB'
          }
        },
        axisLabel: {
            show: true,
            color: '#C7C7C7',
            verticalAlign: 'middle'
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        type: 'line',
        showSymbol: true,
        symbol: 'none',
        symbolSize: 7,
        hoverAnimation: false, // 拐点动画
        lineStyle: {
          normal: {
            width: 1.5,
            color: '#4C7AFE',
            opacity: 0.9
          }
         },
         itemStyle: {
          normal: {
            color: '#F7B50A',
            borderWidth: 1.5
          }
        },
        areaStyle: {
          normal: {
            opacity: 0.2
          }
        },
        smooth: false,
        markPoint: {
          symbol: 'roundRect',
          symbolKeepAspect: false,
          zlevel: 1,
          symbolOffset: ['65%', '0%'],
          label: {
              show: true,
              fontSize: 10,
              fontWeight: 500
          },
          itemStyle: {
            color: 'rgba(18,28,50,0.6)'
        },
          data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
          ]
        },
        markLine: {
          animation: false,
          label: {
            show: false
          },
          lineStyle: {
            type: 'solid',
            width: 1
          },
          data: []
        },
        data:[{
            value: 220
        }, {
            value: 182,
            symbol: 'emptyCircle',
            itemStyle: {
                color: '#5A85FE'
            }
        }, {
            value: 191
        }, {
            value: 234
        }, {
            value: 290
        }, {
            value: 330,
            symbol: 'emptyCircle',
            itemStyle: {
                color: '#5A85FE'
            }
        }, {
            value: 310
        }]
    }]
};