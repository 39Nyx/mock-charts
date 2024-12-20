option = {
              backgroundColor: '#3d3e3e',
              series: [
                  {
                  name: 'hour',
                  type: 'gauge',
                  startAngle: 90,
                  endAngle: -270,
                    radius: '100%', // 位置
                  min:0,
                  max: 250,
                  // splitNumber: 10,
                  axisLine: {
                      lineStyle: {
                          width: 2,
                          color: [
                              [1, '#ff0d00']
                          ],
                          // shadowColor: 'rgba(0, 0, 0, 0.5)',
                          // shadowBlur: 15
                      }
                  },
                  splitLine: {
                    show:false,
                      lineStyle: {
                          // shadowColor: '#ff0d00',
                          // shadowBlur: 3,
                          // shadowOffsetX: 1,
                          // shadowOffsetY: 2
                      }
                  },
                  axisTick: {
                          show: true,
                          // splitNumber: 5,
                          distance: 3,
                          lineStyle: {
                              color: "#ff0d00",
                              width: 1,
                              // length:10
                          },
                          length: 4,
                      }, //刻度样式
                      
                  axisLabel: {
                      fontSize: 8,
                      color: '#ff0d00', // 刻度颜色
                      distance: 70,
                      formatter: function (value) {
                          if (value === 0) {
                              return '';
                          }
                          if (value === 250) {
                              return '';
                          }
                          if (value === 125) {
                              return '0';
                          }
                          if (value === 150) {
                              return '-250';
                          }
                          if (value === 100) {
                              return '250';
                          }
                          if (value === 225) {
                              return '-63';
                          }
                          if (value === 25) {
                              return '63';
                          }
                          if (value === 200) {
                              return '-125';
                          }
                          if (value === 50) {
                              return '125';
                          }
                          if (value === 175) {
                              return '-188';
                          } if (value === 75) {
                              return '188';
                          }
                          // if (value === 0) {
                          //     return '';
                          // }
                          
                          return value;
                      }
                  },
                  
                  
                  pointer: {
                      // icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                      width: 6,
                      length: '70%',
                      offsetCenter: [0, '6%'],
                      itemStyle: {
                          color: '#1a738a',
                          shadowColor: 'rgba(0, 0, 0, 0.3)',
                          shadowBlur: 8,
                          shadowOffsetX: 2,
                          shadowOffsetY: 4
                      }
                  },
                  detail: {
                      // backgroundColor: '#fff',
                      offsetCenter: [0, '43%'],
                      valueAnimation: true,
                      formatter: function (value) {
                      
                          return  "{gray|" +"KW"+ "\n" + "}{white|"+value+ "\n" + "}{company|" + "Power"+ "}";
                      },
                      rich: {
                          gray: {
                                  fontSize: 8,
                                  color: "#ff0d00", // 内容颜色
                              },
                              white: {
                                  fontSize: 8,
                                  fontWeight: 700,
                                  color: "#000",
                                  backgroundColor: '#fff',
                                  borderColor: '#999',
                                  borderWidth: 2,
                                  margin:1,
                                  width: 15,
                                    lineHeight: 8,
                                    height: 8,
                              },
                              company: {
                                  fontSize: 8,
                                  color: "#ff0d00"
                              }
                      }
                  },
                
                  data: [{
                      value: 6
                  }],
                  markPoint: {
                          data: [{
                              x: "49.7%",
                              y: "53%",
                              symbol: 'circle',
                              symbolSize: 15,
                              itemStyle: {
                                  color: "#1a738a"
                              },
                          }]
                      },
              },

              ]
      };

