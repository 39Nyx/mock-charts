// BISECTING_K_MEANS scatter
var data = {
    "series": {
      "系列一": {
          "center": [1, 3],
          "data":   [ [1, 2], [2, 3] ]
      },
      "系列二": {
          "center": [1, 4],
          "data":   [ [2, 4], [2.5, 5] ]
      }
    }
}

var legends = Object.keys(data.series)
var series = legends.map(key => {
    return {
        name: key,
        data: data.series[key].data,
        type: 'scatter',
        markPoint: {
            data: [
                {
                    name: '中心点',
                    coord: data.series[key].center
                }
            ]
        }
    }
})

option = {
    legend: {
        data: legends
    },
    xAxis: {
    },
    yAxis: {
    },
    tooltip: {
        show: true  
    },
    series: series
}