


option = {
    color:['#12cbf6','#3498db','#2ecc71'],
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
        type: 'value',
        max:1000,
        show: false,
    },
    yAxis: [{
        type: 'category',
        show: false,
    },{
         type: 'category',
        show: false,
    }
    ],
    grid: {
        top: '10%',
        left: '8%',
        right: '2%',
        bottom: '30',
        containLabel: true
      },
    series: [
    // {
    //     name: '辅助',
    //     type: 'bar',
    //     barWidth:'20%',
    //     yAxisIndex: 1,
    //     itemStyle: {
    //       normal: {
    //         color: 'rgba(229, 242, 253,0.9)',
    //       },
    //       emphasis: {
    //         color: 'rgba(229, 242, 253,0.9)',
    //       }
    //     },
    //     label: {
    //       normal: {
    //         show: false,
    //       }
    //     },
    //     tooltip: {show: false},
    //     data: [1000] //背景值
    
    //   },
    {
        type: 'bar',
        name: '数量1',
        data: [120],
        stack: '总量',
        barWidth:'20%',
        z: 10,
    }, 
    {
        type: 'bar',
        name: '数量2',
        data: [460],
        stack: '总量',
        barWidth:'20%',
        z: 10,
    },
    {
        type: 'bar',
        name: '数量3',
        data: [240],
        stack: '总量',
        barWidth:'20%',
        z: 10,
    }, 
 
  
    ]
};