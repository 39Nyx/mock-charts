var colors = ['orange', '#5793f3', 'black'];
      
        option = {
            color: colors,

            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                data: ['麦汁浓度', '浊度','压差',]
            },
            grid: {
                top: 80,
                left: 150,
                bottom:200
            },

            xAxis: [
                {
                    axisTick: {
                        alignWithLabel: true
                    },
                    name: '年份',
                    nameLocation: 'center',//名称居中或者建议使用"middle"
                    nameGap: 30,
                    nameTextStyle: {
                      
                        fontSize: 14,
                        lineHeight: 30,
                        verticalAlign:' bottom'
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: colors[0]
                        }
                    },

                    boundaryGap: false,
                    splitLine: {
                        show: true,
                    },
                    type: 'category',
                    
                  //data: ['1985', '1990', '1995', '2000', '2005', '2010', '2015'],
                    data: ['1986', '1987', ' 1988', '1989', '1990', '1991', ' 1992', '1993', ' 1994', ' 1995', '1996', '1997', '1998', '1999', '2000', ' 2001', '2002 ', '2003', '2004', ' 2005', '2006', ' 2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']

                },
                  {
                      boundaryGap: false,
                      position: 'bottom',
                      offset: 60,
                      name: '年份',
                      nameLocation: 'center',//名称居中或者建议使用"middle"
                      nameGap: 30,
                      nameTextStyle: {

                          fontSize: 14,
                          lineHeight: 30,
                          verticalAlign: ' bottom'
                      },
                      splitLine: {
                          show: true,
                      },
                      axisLine: {
                          onZero: false,
                          lineStyle: {
                              color: colors[1]
                          }
                      },
                      type: 'category',
                      data: ['26', '226', '426', '626', '826','1026']
                  },
                   {
                       boundaryGap: false,
                       position: 'bottom',
                       offset: 120,
                       splitLine: {
                           show: true,
                       },
                       axisLine: {
                           onZero: false,
                           lineStyle: {
                               color: colors[2]
                           }
                       },
                       type: 'category',
                       data: ['52.65263', '551.65263', '1051.65263', '1551.65263']
                   }

            ],
            yAxis: [
                {
                    type: 'value',
                    name: '麦\n汁\n浓\n度\n%',
                    min: 0,
                    max: 600,
                    position: 'left',
                    axisLine: {
                        lineStyle: {
                            color: colors[0]
                        }
                    }
                },
                {
                    type: 'value',
                    name: '浊\n度\nmg/L',
                    min: 0,
                    max: 25,
                    position: 'left',
                    offset: 60,
                    axisLine: {
                        lineStyle: {
                            color: colors[1]
                        }
                    }
                }, {
                    type: 'value',
                    name: '压\n差\nmmWS',
                    min: 0,
                    max: 12,
                    position: 'left',
                    offset: 120,
                    axisLine: {
                        lineStyle: {
                            color: colors[2]
                        }
                    }
                },

            ],
            series: [
                {
                    name: '麦汁浓度',
                    type: 'line',
                    // symbol: 'none',
                    // smooth: true,
                    markArea: {
                        silent: true,

                    },
                    // data: [19, 17, 15, 13, 12, 6, 3, 1, 0.5, 0.4, 0.3, 0.1]
                    data: [286.2185728, 324, 369, 407,23, 10, 20, 1, 15, 17,286.2185728, 324,23, 10, 20, 1,286.2185728, 324,23, 15, 17, 369, 407, 286.2185728, 324, 369, 407,20,40 ]
                },
                {
                    name: '浊度',
                    type: 'line',
                    // symbol: 'none',
                    //smooth: true,
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    markArea: {
                        silent: true,

                    },
                    data: [23, 10, 20, 1, 15, 17]
                },
                 {
                     name: '压差',
                     type: 'line',
                     // symbol: 'none',
                     //smooth: true,
                     xAxisIndex: 2,
                     yAxisIndex: 2,
                     markArea: {
                         silent: true,

                     },
                     data: [1, 12, 3, 7]
                 }
            ]
        };