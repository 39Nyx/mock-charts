option = {
  title: { text: '能耗用量分览' },
  tooltip: { trigger: 'axis' },
  legend: {
    data: [
        {
            name: '2018',
            icon: 'rect',
        },
        {
            name: '2019',
            icon: 'rect',
        },
    ],
 },
  grid: {
    left: '0%',
    right: '0%',
    bottom: '10%',
    containLabel: true,
  },
  xAxis: {
    boundaryGap: false,
    data: [
      '12201',
      '12202',
      '12203',
      '12204',
      '12301',
      '12302',
      '12303',
      '12304',
      '12401',
      '12402',
      '12403',
      '12404',
    ],
    axisLabel: { color: '#333', rotate: -45 },
    axisTick: { show: false },
    axisLine: { lineStyle: { color: '#f90' } },
    splitLine: { show: false },
  },
  yAxis: [
    {
      axisLabel: { color: '#a8aab0' },
      axisLine: { lineStyle: { color: '#f90' } },
      axisTick: { show: false },
      splitLine: { show: false },
    },
  ],
  series: [
    {
      name: '2018',
      type: 'line',
      itemStyle: { opacity: 0, color: '#3A84FF' },
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#ff0' },
            { offset: 1, color: '#0ff' },
          ],
        },
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(58,132,255,.35)' },
            { offset: 1, color: 'rgba(58,132,255,0)' },
          ],
        },
      },
      data: [1, 2, 3, 3, 5, 6, 5, 3, 6, 5, 5, 4],
    },
    {
      name: '2019',
      type: 'line',
      itemStyle: { opacity: 0, color: 'rgba(255,80,124,1)' },
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#f00' },
            { offset: 1, color: '#0f0' },
          ],
        },
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(255,80,124,.35)' },
            { offset: 1, color: 'rgba(255,80,124,0)' },
          ],
        },
      },
      data: [9, 5, 7, 8, 6, 7, 8, 7, 7, 6, 8, 6],
    },
  ],
};
