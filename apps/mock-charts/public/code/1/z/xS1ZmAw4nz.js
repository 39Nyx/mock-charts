 var hours = ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7']
      var days = ['防火墙', 'IDS/IPS', '防病毒', '数据库审计', '堡垒机', '终端防护']

      var data = [
        [0, 0, 5], [0, 1, 10], [0, 2, 15], [0, 3, 12], [0, 4, 5], [0, 5, 10],
        [1, 0, 5], [1, 1, 10], [1, 2, 15], [1, 3, 12], [1, 4, 5], [1, 5, 10],
        [2, 0, 5], [2, 1, 10], [2, 2, 15], [2, 3, 12], [2, 4, 5], [2, 5, 10],
        [3, 0, 5], [3, 1, 10], [3, 2, 15], [3, 3, 12], [3, 4, 5], [3, 5, 10]
      ]
      data = data.map(function (item) {
        return [item[1], item[0], item[2]]
      })

option =  {
            /* title: {
             text: 'Punch Card of Github',
             link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
             },
             legend: {
             data: ['Punch Card'],
             left: 'right'
             },*/
          tooltip: {
            position: 'top',
            formatter: function (params) {
              return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]]
            }
          },
          grid: {
            left: 2,
            bottom: 10,
            right: 10,
            top: 0,
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: hours,
//            boundaryGap: false,
            splitLine: {
              show: true,
              lineStyle: {
                color: '#999',
                type: 'solid'
              }
            },
            axisLine: {
              show: false
            }
          },
          yAxis: {
            type: 'category',
            data: days,
            axisLine: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#999',
                type: 'solid'
              }
            },
            axisLabel:{
                color:'#4bc7eb',
                fontSize: 18,
                backgroundColor:'#0a3a5c',
                //padding:[25,10,25,10],
                // align:'right',
                width:'100',
                height:60,
                rich:'{b}'
            }
          },
          series: [{
            name: 'Punch Card',
            type: 'scatter',
            symbolSize: function (val) {
              return val[2] * 2
            },
            data: data.slice(6),
            animationDelay: function (idx) {
              return idx * 5
            },
            itemStyle: {
              normal: {
                color: '#FFFF07'
              }
            }
          }, {
            name: 'Top 5',
            type: 'effectScatter',
            data: data.slice(0, 6),
            symbolSize: function (val) {
              console.log(val)
              return val[2] / 1
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#FFFF07',
                shadowBlur: 1,
                shadowColor: '#333'
              }
            },
            zlevel: 1
          }]
        }