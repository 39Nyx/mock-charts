var tsiDataURL = '/asset/get/s/data-1589533736008-WZ3EgDUbv.json';
var osmDataURL = '/asset/get/s/data-1589533720302-oCMku6fij.json';
var predDataURL = '/asset/get/s/data-1641456689985-UD6wiTlH5.json';
$.getJSON(osmDataURL, function (osmroad) {
  $.getJSON(tsiDataURL, function (data_1) {
    $.getJSON(predDataURL, function (predData) {
      predData = predData.slice(6);
      myChart.showLoading();
      var turn = 1;
      var option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            realtime: false,
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 700,
            symbol: 'diamond',
            symbolSize: 13,
            left: null,
            right: '1%',
            bottom: 'auto',
            width: 55,
            height: null,
            data: [],
            lineStyle: {
              show: true,
              color: '#20dbfd',
            },
            itemStyle: {
              show: true,
              color: '#20dbfd',
            },
            label: {
              fontSize: 14,
              position: -10,
              color: '#20dbfd',
            },
            tooltip: {
              formatter: 1,
            },
            animation: true,
          },

          visualMap: {
            min: 0,
            max: 90,
            text: ['拥挤', '畅通'],
            realtime: false,
            calculable: true,
            seriesIndex: 0,
            inRange: {
              color: ['#9DCC42', '#FFFE03', '#F7941D', '#E9420E', '#FF0000'],
            },
            bottom: '3%',
            left: '3%',
            textStyle: {
              fontWeight: 'bold',
              color: '#9DCC42',
            },
          },

          //bmap组件是百度地图的参数
          bmap: {
            center: [121.501206, 31.203083],
            zoom: 12,
            roam: true,
            //地图个性化设置
            mapStyle: {
              styleJson: darkTheme,
            },
          },
          series: [],
        },
        animationDurationUpdate: 3000,
        animationEasingUpdate: 'quinticInOut',
        options: [],
      };

      function matchdata(osmroad, datak) {
        var data = [];
        for (var i = 0; i < datak.length; i += 1) {
          var value = datak[i];
          var v = {};
          v.coords = osmroad[i].coords;
          v.value = value;
          data.push(v);
        }
        return data;
      }
      //读取数据

      var option1 = {
        options: [],
      };

      function avgData(startIdx, len, data_1) {
        var data = [];
        for (var i = 0; i < data_1[startIdx].length; i++) {
          var tmp = 0;
          for (var j = 0; j < len && startIdx + j < data_1.length; j++) {
            tmp += data_1[startIdx + j][i];
          }
          data.push(Math.floor(tmp / len));
        }
        return data;
      }
      function orginazeData(hours) {
        if (sw) span = 9;
        else span = 6;
        var times = [];
        var turnNum = hours * 2;
        for (let k = 0, time = 0; k < data_1.length; k += turnNum, time += hours) {
          times.push((time + span).toString() + ':00');
          var datak = avgData(k, turnNum, data_1);
          var data = matchdata(osmroad, datak);
          var opt1 = {
            title: {
              text:
                '  上\n  海\n  出\n  租\n  车\n  客\n  流\n  量\n' +
                ((time + span) % 24) +
                ':00\n  至\n' +
                ((time + span + hours) % 24) +
                ':00',
              left: '1%',
              top: '2%',
              textStyle: {
                color: '#9DCC42',
                fontSize: 40,
              },
            },
            toolbox: {
              show: true,
              itemGap: 20,
              right: '12%',
              itemSize: 30,
              iconStyle: {
                borderWidth: 1,
                borderColor: '#fff',
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10,
                borderType: 'solid',
              },
              feature: {
                mytime1: {
                  show: true,
                  title: '1小时',
                  iconStyle: { borderWidth: turn == 1 ? 2 : 1 },
                  icon:
                    'path://M899.5 899.5h-775v-775h775v775z M137 137v750h750V137H137m-25-25h800v800H112V112z M597.681 335.009c0-7.67-2.36-13.569-7.08-17.109a35.115 35.115 0 0 0-20.061-5.9c-3.54 0-6.49 1.77-10.029 4.13-3.54 2.95-6.49 5.31-8.26 7.08a75.758 75.758 0 0 0-11.211 13.569c-3.54 4.72-7.67 9.44-11.209 13.569-11.209 12.979-23.009 27.139-35.988 41.3-13.569 14.749-26.549 27.729-38.938 39.528-1.18 1.18-2.95 2.36-4.13 3.54l-4.72 2.36c-1.77 1.18-3.54 1.77-4.72 2.95l-5.31 3.54c-2.95 2.36-5.31 4.13-7.08 5.9-2.36 2.36-2.95 4.13-2.95 5.9 0 7.08 2.95 12.389 10.03 16.519 5.9 4.72 12.979 6.49 20.059 6.49a31.985 31.985 0 0 0 14.756-3.543c4.13-2.36 8.26-5.9 12.979-10.619 2.95-3.54 6.49-7.67 11.209-12.979l11.8-12.979c2.95-2.95 7.67-7.67 13.569-14.159s12.389-14.159 20.649-23.009c-1.77 9.44-3.54 20.649-4.72 33.628-2.36 12.979-4.13 25.959-5.9 40.118l-4.72 41.888c-1.18 14.159-2.36 27.729-2.95 39.528-1.18 22.419-2.36 44.838-2.95 67.257q-1.77 33.628-1.77 58.407c0 9.44 2.36 16.519 7.67 21.829 5.31 5.9 12.389 8.26 21.829 8.26a43.479 43.479 0 0 0 15.929-3.54c4.72-2.36 7.67-5.31 7.67-8.85 0-1.77-0.59-5.31-0.59-11.209a149.392 149.392 0 0 1-2.36-18.879 116.91 116.91 0 0 1-2.36-21.239 132.008 132.008 0 0 1-1.18-20.649c0-41.3 1.18-82.6 4.72-124.484 3.54-41.3 10.03-82.6 20.649-123.3a106.366 106.366 0 0 1 2.95-11.209l2.36-11.209 1.77-11.209c-0.002-3.547 0.588-7.086 0.588-11.216z',
                  onclick: function () {
                    turn = 1;
                    option1 = {
                      options: [],
                    };
                    orginazeData(turn);
                  },
                },
                mytime2: {
                  show: true,
                  title: '3小时',
                  iconStyle: { borderWidth: turn == 3 ? 2 : 1 },
                  icon:
                    'path://M899.5 899.5h-775v-775h775v775z M137 137v750h750V137H137m-25-25h800v800H112V112z M657.703 576.92a85.081 85.081 0 0 0-6.987-34.934 112.5 112.5 0 0 0-20.378-26.783 144.785 144.785 0 0 0-30.858-18.632 235.7 235.7 0 0 0-39.01-13.392c18.632-12.227 32.023-25.036 40.175-37.846 7.569-12.809 11.645-27.948 11.645-46q0-24.454-10.48-41.921a83.792 83.792 0 0 0-27.948-27.365 137.352 137.352 0 0 0-38.428-13.974c-13.974-2.329-27.948-4.076-41.921-4.076-11.063 0-22.707 1.747-34.935 4.076-12.809 3.493-23.872 6.987-34.352 11.645a112.161 112.161 0 0 0-26.2 16.3c-6.987 5.822-9.9 12.227-9.9 18.049 0 6.4 1.747 12.227 6.4 16.885q6.114 6.987 13.974 6.987c4.658 0 11.063-1.165 18.632-4.658l10.48-5.24c3.493-1.747 6.987-3.493 11.063-5.822 8.151-4.076 16.885-8.151 27.365-12.809a72.374 72.374 0 0 1 28.53-6.4c6.987 0 13.974 1.164 21.543 2.329a63.6 63.6 0 0 1 20.961 6.987A47.5 47.5 0 0 1 561.63 374.3a47.5 47.5 0 0 1 5.822 23.29c0 11.645-2.911 22.125-8.151 30.277a87.655 87.655 0 0 1-20.375 23.293c-8.151 6.4-16.3 11.645-25.036 15.138-9.316 4.076-16.885 6.987-23.29 8.151a73.787 73.787 0 0 1-19.8 2.329h-8.73c-5.822 0-11.063 1.165-16.3 2.329-5.822 1.747-9.316 3.493-11.063 5.24q-5.24 5.24-5.24 13.974c0 6.987 2.911 12.809 9.316 18.049 5.822 5.24 11.645 7.569 18.049 7.569a39.141 39.141 0 0 0 13.974-2.329 121.947 121.947 0 0 0 13.392-4.658 131.023 131.023 0 0 1 13.974-4.658 58.658 58.658 0 0 1 14.556-1.747 44.323 44.323 0 0 1 12.227 1.747 68.1 68.1 0 0 0 11.645 2.911 223.811 223.811 0 0 1 23.29 8.151 134.883 134.883 0 0 1 22.125 12.227 83.352 83.352 0 0 1 16.3 18.632 53.9 53.9 0 0 1 6.4 25.619c0 15.721-3.493 29.112-9.9 40.175a98.842 98.842 0 0 1-26.783 29.112 108.382 108.382 0 0 1-36.1 16.885 132.12 132.12 0 0 1-39.01 5.822c-14.556 0-30.277-2.911-46.579-9.316a62.636 62.636 0 0 1-16.885-7.569c-5.24-2.911-10.48-5.822-15.721-9.316-3.493-1.747-6.4-3.493-8.734-4.658a63.512 63.512 0 0 1-6.4-3.493c-4.658-2.329-8.734-4.076-11.645-4.076-5.822 0-10.48 2.329-14.556 6.4-4.658 4.076-6.4 9.316-6.4 15.721 0 6.987 2.329 13.392 7.569 18.049a46.313 46.313 0 0 0 15.719 12.811 149.475 149.475 0 0 0 25.036 9.9c9.316 3.493 19.214 5.822 29.694 8.151a264.49 264.49 0 0 0 29.694 5.24 132.026 132.026 0 0 0 24.454 2.329 180.016 180.016 0 0 0 57.06-9.316c18.632-5.822 36.1-13.974 51.237-25.619a145.407 145.407 0 0 0 37.263-42.5q13.975-24.458 13.975-57.646z',
                  onclick: function () {
                    option1 = {
                      options: [],
                    };
                    turn = 3;
                    orginazeData(turn);
                  },
                },
                mytime3: {
                  show: true,
                  title: '5小时',
                  iconStyle: { borderWidth: turn == 5 ? 2 : 1 },
                  icon:
                    'path://M899.5 899.5h-775v-775h775v775z M137 137v750h750V137H137m-25-25h800v800H112V112z M651.656 567.014c0-30.946-12.607-55.587-36.676-74.5-12.607-8.6-25.788-14.327-40.115-16.619a380.238 380.238 0 0 0-44.126-2.865c-13.754 0-28.08 1.719-41.834 4.011q-20.63 5.158-44.7 12.034c1.719-21.777 3.438-41.834 5.731-60.172l4.585-57.88c20.63-1.719 40.115-4.011 58.453-6.3l54.441-8.6q5.158-0.86 12.034-1.719a49.158 49.158 0 0 0 12.607-1.146l12.034-2.292a25.706 25.706 0 0 0 10.888-2.865 20 20 0 0 0 5.158-3.438 16.459 16.459 0 0 0 1.146-6.877c0-2.292-1.719-5.158-4.585-8.6a76.24 76.24 0 0 0-10.888-8.023l-13.754-6.877c-4.585-1.146-8.6-2.292-10.888-2.292a24.372 24.372 0 0 0-6.3 1.146 27.935 27.935 0 0 1-6.3 2.292l-7.45 2.292c-2.865 1.146-5.158 1.719-6.877 2.292a378.036 378.036 0 0 1-48.138 9.169 400 400 0 0 1-51.576 2.865c-4.011-3.438-7.45-6.3-10.315-7.45-3.438-1.146-7.45-2.292-10.888-2.292a29.107 29.107 0 0 0-9.742 1.719 52.264 52.264 0 0 0-9.169 3.438q-5.163 10.323-6.882 30.955c-1.719 14.327-2.865 29.8-3.438 45.845-1.146 17.191-2.292 33.81-2.292 49.855-1.147 16.046-1.72 28.654-2.293 37.25l-1.146 7.45-1.146 8.023a80.6 80.6 0 0 0-1.715 16.045c0 1.719 0.573 3.438 2.292 5.731 1.146 2.292 3.438 4.011 5.731 5.731a42.743 42.743 0 0 0 6.877 4.011 13.062 13.062 0 0 0 6.3 1.719 36.95 36.95 0 0 0 11.46-1.719 72.37 72.37 0 0 0 10.315-4.585c3.438-1.719 7.45-4.011 11.461-6.3a126.2 126.2 0 0 1 12.035-5.156c11.461-3.438 22.35-6.3 33.238-7.45a304.949 304.949 0 0 1 34.384-2.292 113.037 113.037 0 0 1 27.507 3.433 79.162 79.162 0 0 1 23.5 10.316c6.877 4.585 12.034 10.888 16.619 18.911 4.011 8.023 6.3 17.765 6.3 29.226a103.619 103.619 0 0 1-9.169 43.556c-6.877 12.607-14.9 22.923-25.215 30.946-10.315 8.6-22.35 14.9-35.53 19.484a128.972 128.972 0 0 1-41.261 6.3c-13.754 0-26.361-1.719-36.676-5.158a134.677 134.677 0 0 1-28.653-12.034 54.192 54.192 0 0 1-11.461-6.3c-3.438-1.719-6.3-3.438-9.169-5.158a61.559 61.559 0 0 1-8.6-4.011 42.318 42.318 0 0 0-6.877-1.146c-5.731 0-9.742 2.292-13.181 5.731-4.011 4.585-5.731 9.742-5.731 16.046a23.326 23.326 0 0 0 6.877 17.192c4.585 5.158 9.742 9.169 16.046 11.461q6.877 3.438 20.63 6.877a177.1 177.1 0 0 0 26.365 6.87c9.169 1.719 18.338 3.438 27.507 4.585 8.6 1.146 16.046 2.292 21.777 2.292a218.274 218.274 0 0 0 61.891-8.6c19.484-5.731 36.676-14.327 51.576-26.934q21.49-17.192 34.384-44.7c8.023-18.33 12.607-39.534 12.607-64.749z',
                  onclick: function () {
                    option1 = {
                      options: [],
                    };
                    turn = 5;
                    orginazeData(turn);
                  },
                },
                mytime4: {
                  show: true,
                  title: '切换预测值',
                  iconStyle: { color: sw ? 'ff0000' : 'fff' },
                  icon:
                    'path://M192 672c19.2 0 32 12.8 32 32v128c0 19.2-12.8 32-32 32s-32-12.8-32-32v-128c0-19.2 12.8-32 32-32zM416 480c19.2 0 32 12.8 32 32v320c0 19.2-12.8 32-32 32s-32-12.8-32-32V512c0-19.2 12.8-32 32-32zM608 608c19.2 0 32 12.8 32 32v192c0 19.2-12.8 32-32 32s-32-12.8-32-32v-192c0-19.2 12.8-32 32-32zM832 448c19.2 0 32 12.8 32 32v352c0 19.2-12.8 32-32 32s-32-12.8-32-32V480c0-19.2 12.8-32 32-32z M1000.448 25.088h-2.56l-189.952 27.136h-2.048c-4.608 0-8.704 3.584-9.216 8.192-0.512 3.072 0.512 6.656 3.584 8.704l55.296 55.296-320 320-165.376-165.376-2.048-2.048c-2.56-2.56-4.608-4.608-7.168-6.144-7.168-5.632-13.824-8.192-20.992-8.192-8.704 0-17.92 4.608-27.136 13.824-2.56 2.56-5.12 5.632-7.168 8.192L170.496 420.352c-18.432 18.432-18.432 35.84 0 54.272 9.216 9.216 18.432 13.824 27.136 13.824s17.92-4.608 27.136-13.824L340.992 358.4l164.864 164.864c0.512 1.024 1.536 1.536 2.048 2.56 9.216 9.216 18.432 13.824 27.136 13.824s17.92-4.608 27.136-13.824l347.648-347.648 53.248 53.248c1.536 2.048 4.096 3.072 6.656 3.072 2.048 0 4.096-1.024 5.632-2.048 1.536-1.536 2.56-3.584 3.072-6.144L1008.64 35.84c0.512-5.12-3.072-9.728-8.192-10.752z',
                  onclick: function () {
                    sw = !sw;
                    if (sw) {
                      option1.options = option1.options.map((option) => {
                        var text = option.title.text;
                        option.title.text = '  预\n  测\n' + getSwitchedTimes(text);
                        var datak = avgData(k, turnNum, predData);
                        var data = matchdata(osmroad, datak);
                        option.series.data = data;
                        return option;
                      });
                      myChart.setOption(option1);
                      var timelineNow = option.baseOption.timeline.data;
                      var newTimeline = getSwitchedTimeline(timelineNow);
                      option.baseOption.timeline.data = newTimeline;
                      option.baseOption.timeline.tooltip.formatter = times;
                      myChart.setOption(option);
                    } else {
                      option1.options = option1.options.map((option) => {
                        var text = option.title.text;
                        option.title.text = getOldTimes(text);
                        var datak = avgData(k, turnNum, data_1);
                        var data = matchdata(osmroad, datak);
                        option.series.data = data;
                        return option;
                      });
                      myChart.setOption(option1);
                      var timelineNow = option.baseOption.timeline.data;
                      var newTimeline = getOldTimeline(timelineNow);
                      option.baseOption.timeline.data = newTimeline;
                      option.baseOption.timeline.tooltip.formatter = times;
                      myChart.setOption(option);
                    }
                  },
                },
              },
            },
            series: [
              {
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: true,
                silent: true,
                lineStyle: {
                  color: 'rgb(200,200,200)',
                  opacity: 1,
                  width: 2,
                },
                progressiveThreshold: 0,
                progressive: 0,
                data: data,
              },
            ],
          };
          option1.options.push(opt1);
        }

        option.baseOption.timeline.data = times;
        option.baseOption.timeline.tooltip.formatter = times;
        myChart.setOption(option);
        myChart.setOption(option1);
      }

      orginazeData(turn);
      if (!app.inNode) {
        // 添加百度地图插件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
      }
      myChart.hideLoading();
    });
  });
});

var sw = false;
getSwitchedTimes = (text) => {
  var nums = text.replace(/[^0-9]/gi, '');
  var time1 = 0,
    time2 = 0;
  if (nums.length === 6) {
    time1 = parseInt(nums[0]) + 3;
    time2 = parseInt(nums[3]) + 3;
  } else if (nums.length === 7) {
    time1 = nums[1] == '0' ? parseInt(nums[0]) + 3 : parseInt(nums.substr(0, 2)) + 3;
    time2 = nums[1] == '0' ? parseInt(nums.substr(3, 2)) + 3 : parseInt(nums[4]) + 3;
  } else {
    time1 = parseInt(nums.substr(0, 2)) + 3;
    time2 = parseInt(nums.substr(4, 2)) + 3;
  }
  time1 = time1 % 24;
  time2 = time2 % 24;
  return `  上\n  海\n  出\n  租\n  车\n  客\n  流\n  量\n${time1}:00\n  至\n${time2}:00\n`;
};

getOldTimes = (text) => {
  var nums = text.replace(/[^0-9]/gi, '');
  if (nums.length === 6) {
    var time1 = parseInt(nums[0]) - 3;
    var time2 = parseInt(nums[3]) - 3;
  } else if (nums.length === 7) {
    time1 = nums[1] == '0' ? parseInt(nums[0]) - 3 : parseInt(nums.substr(0, 2)) - 3;
    time2 = nums[1] == '0' ? parseInt(nums.substr(3, 2)) - 3 : parseInt(nums[4]) - 3;
    console.log(nums);
  } else {
    var time1 = parseInt(nums.substr(0, 2)) - 3;
    var time2 = parseInt(nums.substr(4, 2)) - 3;
  }
  time1 = time1 < 0 ? time1 + 24 : time1;
  time2 = time2 < 0 ? time2 + 24 : time2;
  return `  上\n  海\n  出\n  租\n  车\n  客\n  流\n  量\n${time1}:00\n  至\n${time2}:00\n`;
};

getSwitchedTimeline = (line) => {
  return line.map((value) => {
    if (value.length === 4) {
      return (parseInt(value[0]) + 3).toString() + ':00';
    } else {
      return (parseInt(value.substr(0, 2)) + 3).toString() + ':00';
    }
  });
};

getOldTimeline = (line) => {
  return line.map((value) => {
    if (value.length === 4) {
      return (parseInt(value[0]) - 3).toString() + ':00';
    } else {
      return (parseInt(value.substr(0, 2)) - 3).toString() + ':00';
    }
  });
};

var darkTheme = [
  {
    featureType: 'water',
    elementType: 'all',
    stylers: {
      color: '#044161',
    },
  },
  {
    featureType: 'land',
    elementType: 'all',
    stylers: {
      color: '#091934',
    },
  },
  {
    featureType: 'boundary',
    elementType: 'geometry',
    stylers: {
      color: '#064f85',
    },
  },
  {
    featureType: 'railway',
    elementType: 'all',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'highway',
    elementType: 'geometry',
    stylers: {
      color: '#004981',
    },
  },
  {
    featureType: 'highway',
    elementType: 'geometry.fill',
    stylers: {
      color: '#005b96',
      lightness: 1,
    },
  },
  {
    featureType: 'highway',
    elementType: 'labels',
    stylers: {
      visibility: 'on',
    },
  },
  {
    featureType: 'arterial',
    elementType: 'geometry',
    stylers: {
      color: '#004981',
      lightness: -39,
    },
  },
  {
    featureType: 'arterial',
    elementType: 'geometry.fill',
    stylers: {
      color: '#00508b',
    },
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'green',
    elementType: 'all',
    stylers: {
      color: '#056197',
      visibility: 'off',
    },
  },
  {
    featureType: 'subway',
    elementType: 'all',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'manmade',
    elementType: 'all',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'local',
    elementType: 'all',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'arterial',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'boundary',
    elementType: 'geometry.fill',
    stylers: {
      color: '#029fd4',
    },
  },
  {
    featureType: 'building',
    elementType: 'all',
    stylers: {
      color: '#1a5787',
    },
  },
  {
    featureType: 'label',
    elementType: 'all',
    stylers: {
      visibility: 'off',
    },
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: {
      color: '#ffffff',
    },
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.stroke',
    stylers: {
      color: '#1e1c1c',
    },
  },
  {
    featureType: 'administrative',
    elementType: 'labels',
    stylers: {
      visibility: 'on',
    },
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: {
      visibility: 'off',
    },
  },
];
