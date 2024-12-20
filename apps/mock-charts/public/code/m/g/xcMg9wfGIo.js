  var timeData = ["2020-03-23 17:00", "2020-03-23 18:00", "2020-03-23 19:00", "2020-03-23 20:00", "2020-03-23 21:00", "2020-03-23 22:00", "2020-03-23 23:00", "2020-03-24 00:00", "2020-03-24 01:00", "2020-03-24 02:00", "2020-03-24 03:00", "2020-03-24 04:00", "2020-03-24 05:00", "2020-03-24 06:00", "2020-03-24 07:00", "2020-03-24 08:00", "2020-03-24 09:00", "2020-03-24 10:00", "2020-03-24 11:00", "2020-03-24 12:00", "2020-03-24 13:00", "2020-03-24 14:00", "2020-03-24 15:00", "2020-03-24 16:00", "2020-03-24 17:00", "2020-03-24 18:00", "2020-03-24 19:00", "2020-03-24 20:00", "2020-03-24 21:00", "2020-03-24 22:00", "2020-03-24 23:00", "2020-03-25 00:00", "2020-03-25 01:00", "2020-03-25 02:00", "2020-03-25 03:00", "2020-03-25 04:00", "2020-03-25 05:00", "2020-03-25 06:00", "2020-03-25 07:00", "2020-03-25 08:00", "2020-03-25 09:00", "2020-03-25 10:00", "2020-03-25 11:00", "2020-03-25 12:00", "2020-03-25 13:00", "2020-03-25 14:00", "2020-03-25 15:00"];
  var aqiData = [42, 46, 50, 36, 83, 75, 73, 73, 74, 65, 69, 68, 74, 60, 120, 110, 89, 65, 72, 60, 121, 75, 62, 90, 78, 72, 78, 67, 83, 75, 73, 73, 74, 65, 69, 68, 74, 60, 120, 110, 89, 65, 72, 60, 208, 75, 62];
  window.seriesData = [];
  $.each(timeData, function(index, val) {
      seriesData.push({
          value: aqiData[index],
          itemStyle: {
              color: aqiLevel(aqiData[index])
          }
      })
  });

  var option = {
      title: {
          text: '实测         预测',
          left: '47%',
          top: '8%',
          textStyle: {
              color: '#333'
          }
      },
      tooltip: {
          trigger: "axis",
          formatter: function(params) {
              return params[0].name + '<br/>' + "AQI：" + params[0].value;
          }
      },
      grid: {
          top: "12%",
          left: "10%",
          right: "5%"
      },
      xAxis: [{
          type: "category",
          data: timeData,
          axisLine: {
              lineStyle: {
                  color: "#fff"
              }
          },
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#333"
              }
          }
      }, {
          show: false,
          type: "category",
          data: timeData
      }],
      yAxis: {
          type: "value",
          axisLabel: {
              show: true,
              textStyle: {
                  color: "#333"
              }
          },
          axisTick: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisLine: {
              show: false
          }
      },
      series: [{
          name: "AQI",
          type: "bar"
      }, {
          xAxisIndex: 1,
          data: seriesData,
          type: "bar",
          smooth: true,
          markArea: {
              data: [
                  [{
                      itemStyle: {
                          color: "rgba(22, 120, 225, 0.05)"
                      }
                  }, {
                      xAxis: '2020-03-24 17:00'
                  }],
                  [{
                      xAxis: '2020-03-24 17:00',
                      itemStyle: {
                          color: "rgba(0, 244, 0, 0.05)"
                      }
                  }, {}]
              ]
          }
      }]
  };

  // AQI等级
  function aqiLevel(data) {
      var color = data >= 0 && data <= 50 ? "#61D800" :
          data > 50 && data <= 100 ? "#CCB21A" :
          data > 100 && data <= 150 ? "#F5A623" :
          data > 150 && data <= 200 ? "#F12F1C" :
          data > 200 && data <= 300 ? "#9C0D71" :
          data > 300 ? "#630445" : "";
      return color;
  }