    var xArray = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]; //X轴线数据
    var sleepStartArray = [23, 22, 23, 5, 20, 4, 21]; //睡眠开始时间
    var sleepEndArray = [8.5, 9, 7.2, 8.1, 8.8, 7.8, 9.4]; //睡眠结束时间
    var blockbottomData = [1, 3.5]; //下块
    var blocktopData = [8.8, 10.8]; //上块
    
    var flag1 = (blocktopData[0] - blockbottomData[1]).toFixed(2);
    var flag2 = (blocktopData[1] - blockbottomData[0]).toFixed(2);;

      var zdata = []; //如果出现0点之后睡觉的情况 用此数据进行垫底
      var hideData = []; //0点之前睡觉 用此数据进行垫底
      var flag = 0; //判断是否出现0点之后睡觉的情况
      for (var i = 0; i < sleepStartArray.length; i++) {
        //将起床时间和睡眠时间相比  如果起床时间大于睡眠时间则是0点之后睡觉 反则是0点之前
        if (sleepStartArray[i]*1 > sleepEndArray[i]*1) {
          hideData.push(sleepStartArray[i] * 1 - 24 * 1);
          sleepEndArray[i] = (24 - sleepStartArray[i] *1) + sleepEndArray[i] * 1;
          zdata.push("-");
        } else {
          hideData.push("-");
          //跨了0点了！！
          flag = 1;
          zdata.push(sleepStartArray[i] * 1);
          //因为是堆叠 所以需要减去堆的值
          sleepEndArray[i] = ((sleepEndArray[i] * 1 - sleepStartArray[i] * 1).toFixed(1))*1;
        }
      }

      function getBarColor(index, params) {
            var _v;
        if (params == "yc") {
            _v = sleepEndArray[index]*1;
          if (_v <= flag1) {
            return '#e0b01e';   //橙色
          } else if (_v <= flag2) {
            return '#73bd1e';   //绿色
          } else {
            return '#343e75';   //深蓝色
          }
        } else {
            _v = params.value;
          if (_v <= flag1) {
            return '#e0b01e';
          } else if (_v <= flag2) {
            return '#73bd1e';
          } else {
            return '#343e75';
          }
        }
      }
      var option = {
        title: {
          text: '演示睡眠分析（单位:小时）',
          subtext: '起床时间',
          sublink: 'https://www.cnblogs.com/lightmusic/p/12761239.html'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value + '小时';
          }
        },
        grid: {
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisLabel: {
            color: '#ADADAD',
            fontSize: "11"
          },
          axisLine: {
            lineStyle: {
              color: '#ADADAD',
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: "#ADADAD"
            }
          },
          data: xArray
        }],
        yAxis: [{
          type: 'value',
          // min:-1,
          // max:15,
          // splineNumber:4,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#ADADAD'
            },
          },
          axisLabel: {
            show: true,
            interval: 'auto',
            color: '#ADADAD',
            fontSize: "11"
          },
          axisLine: {
            lineStyle: {
              color: '#ADADAD',
              width: 1
            },
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: function (value, index) {
                console.log(value,index);
              if (value * 1 < 0) { //如果小于0 则进行替换
                return 24 - (Math.abs(value * 1))+ ' :00';
              }
              return value+ ':00';
            }
          }
        }],
        series: [{
            name: '睡觉时间0点之前',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                color: function (params) {
                  return getBarColor(params.dataIndex, 'yc');
                }
              }
            },
            data: hideData
          },
          {
            name: "遮挡数据0点之后",
            stack:"总量",
            type: "bar",
            barGap: '-100%',
            itemStyle: {
                color: '#f3f3f3',
                borderColor: "#f3f3f3"
            },
            tooltip: {
                show: false
            },
            z: 0,
            data: zdata  
          },
          {
            name: '睡眠时长',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              // color:'#343e75',
              normal: {
                color: function (params) {
                  //三重判断 1 2.5 - 9.3 10.8
                  return getBarColor(null, params);
                }
              }
            },
            label: {
              show: true,
              position: 'inside',
            //   formatter:function(item){
            //       console.log(item);
            //     return item.value*1 + Math.abs(hideData[item.dataIndex])*1;
            //   }
            },
            tooltip: {
              show: true,
            //   formatter:function(item,index){
            //       console.log(item,index);
            //   }
            },
            data: sleepEndArray,
            z:0,
            markArea: {
              silent: false,
              itemStyle: {
                color: "rgba(45,105,132,.4)",
              },
              label: {
                show: true,
                position: 'right',
                rotate: "-60",
                fontSize: "10"
              },
              data: [
                [{
                    name: "标域一",
                    x: "星期一",
                    yAxis: blocktopData[0]
                  },
                  {
                    x: "星期日  ",
                    yAxis: blocktopData[1]

                  }
                ],
                [{
                    name: "标域二",
                    x: "星期一",
                    yAxis: blockbottomData[0]
                  },
                  {
                    x: "星期日",
                    yAxis: blockbottomData[1]

                  }
                ]
              ]
            }
          }
        ]
      };
      console.log("垫底的数据", hideData);
      console.log("结束时间", sleepEndArray);
      console.log("zdata", zdata);
      console.log("标值", flag1,flag2);