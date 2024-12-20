var colorArray = [
    {
        top: '#EDC05D', //黄 //结束位置
        bottom: '#ffa800' //开始位置
    }, {
        top: '#40E2F2', //蓝色
        bottom: '#358ADB'
    },
    {
        top: '#63CE6B', //绿
        bottom: '#3A9E58'
    }, {
        top: '#F77362', //粉色
        bottom: '#EA6D92'
    }
];
option = {
    title: {
        text: '良/水源质量差别',
        textStyle: {color: '#fff'},
        top: '30px',
        left: '50px'
    },
    color: ['#EDC05D', '#40E2F2', '#63CE6B', '#F77362'],
    backgroundColor: '#0E2A43',
     tooltip: {
          show: true,
          formatter: "{b}:{c}"
        },
   grid: {
          left: '5%',
          top: '12%',
          right: '1%',
          bottom: '8%',
          containLabel: true
        },
  
    xAxis: {
        type: 'value',
        show: true,
        axisLine: { show: true, symbol: ['none', 'arrow'], lineStyle: { color: '#358ADB' } },
        position: 'bottom',
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

            },
            "splitLine": { //网格线
                "show": false
            },
            axisLine: { show: true, symbol: ['none', 'arrow'], lineStyle: { color: '#358ADB' } },
            axisLabel: {
                color: '#fff'
            },
            data: ['酚', '氯', '砷', '铅']
        }

    ],
    series: [{
            name: '水源质量差别',
            type: 'bar',
                label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{c}',
                  textStyle: {
                    color: 'white' //color of value
                  }
                }
              },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            // barGap: '30%',
            barCategoryGap: '90%',
            data: [60, 132, 89, 134, 60]
        }

    ]
};