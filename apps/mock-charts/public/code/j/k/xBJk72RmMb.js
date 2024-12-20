      var dataAll = [
        [[23.5, 83]]
      ];
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: 'black'
            },
            lineStyle: {
              color: '#666'
            }
          }
        },
        grid: {
          top: '10%',
          bottom: '10%',
          borderWidth:0
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: 0,
            data: [20, 27.5, 35, 42.5, 50, 57.5, 65, 72.5, 80],
            axisLabel: {
              formatter: function (data, idx) {
                if (idx % 2 === 0) {
                  return data;
                }
              }
            },
            splitLine:{
              show:false
            }
          },
          {
            type:'value',
            gridIndex: 0,
            min:20,
            max:80,
            axisLabel:{
              show:false
            },
            splitLine:{
              show:false
            },
            axisTick:{
              show:false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            interval: 15,
            min: 46,
            max: 134,
            position: 'left',
            splitLine:{
              show:false
            },
            axisLabel: {
              show: true,
            }
          },
          {
            type: 'value',
            min: -4,
            max: 2,
            position: 'right',
            axisLabel: {
              show: true,
            },
            splitLine:{
              show:false
            }
          }
        ],
        series: [
          {
            type: 'scatter',
            symbol:'path://path://M 26.458333,55.095237 141.36309,171.5119 77.107142,113.30357 131.53571,54.339286 30.238094,176.04762 74.839284,111.79167 Z',
            symbolSize:25,
            xAxisIndex: 1,
            yAxisIndex: 0,
            data: dataAll[0],
          },
          {
            type: 'line',
            symbol: 'none',
            z: 3,
            areaStyle: {
              normal: {
                color: 'red'
              }
            },
            data: [66, 66, 66, 66, 66, 66, 66, 66, 66]
          },
          {
            type: 'line',
            symbol: 'none',
            z: 2,
            areaStyle: {
              normal: {
                color: 'yellow'
              }
            },
            data: [81, 81, 81, 81, 81, 81, 81, 81, 81]
          },
          {
            type: 'line',
            symbol: 'none',
            z: 1,
            areaStyle: {
              normal: {
                color: 'green'
              }
            },
            data: [134, 134, 134, 134, 134, 134, 134, 134, 134]
          },
          {
            name: 'T值',
            type: 'line',
            smooth: true,
            symbol: 'none',
            color: 'black',
            zleve: 4,
            label: {
              normal: {
                show: true
              }
            },
            data: [105, 103, 91, 91, 91, 91, 91]
          }
        ]
      };