option = {
  title: {
    text: 'Bar Chart with Negative Value'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: 80,
    bottom: 30
  },
  xAxis: {
    type: 'value',
    position: 'top',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
   
  },
  series: [
    {
      name: 'Cost',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        formatter: '{b}'
      },
 
    }
  ],
   dataset: { 
     source: 
     [
        ['ten', -0.07],
        ['nine', -0.09],
        ['eight', 0.2],
        ['seven', 0.44],
        ['six', -0.23],
        ['five', 0.08],
        ['four', -0.17],
        ['three', -0.47],
        ['two', -0.36],
        ['one', 0.18],
        ['six', -0.09],
        ['five', 0.2],
    ]
  },
};


