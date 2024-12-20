var lineData = {
    colorList: [
        [137, 189, 27],
        [0, 136, 212],
        [219, 50, 51],
        [232, 138, 61]
      ],
    xAxis: ['13:00', '13:05', '13:10', '13:15'],
    series: [{
        name: '移动',
        data: [220, 182, 191, 134]
    }, {
        name: '电信',
        data: [120, 110, 125, 145]
    }, {
        name: '联通',
        data: [220, 182, 125, 145]
    }]
}

function getSeries(lineData){
    var seriesData = [];
      lineData.series.forEach(function(element, index) {
        var color = lineData.colorList[index];
        var seriesSingle = {
          name: element.name,
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 3
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')',
              borderColor: 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',0.2)',
              borderWidth: 12
            }
          },
          data: element.data
        }
        seriesData.push(seriesSingle);
      })
      return seriesData;
}
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: lineData.xAxis,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#51b8fe',
                width: 2
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#51b8fe',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ddd'
            }
        }
    },

    series: getSeries(lineData)
};