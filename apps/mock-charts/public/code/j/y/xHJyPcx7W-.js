 var data;
    var dates = [];
    var data2 = [];

    function format(date, fmt) {
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    ;

    var d = new Date();
    var todayDate = +new Date(d.getFullYear(), d.getMonth(), d.getDate(), 09, 30, 00);
    var ele = +new Date(d.getFullYear(), d.getMonth(), d.getDate(), 11, 30, 00);
    var third = +new Date(d.getFullYear(), d.getMonth(), d.getDate(), 13, 00, 00);

    for (var i = 0; i <= 4 * 60 * 60 / 5 + 1; i++) {
        var a = {"time": (format(new Date(todayDate), "hh:mm:ss")), "value": "0"};
        if (todayDate == ele) {
            dates.push((format(new Date(todayDate), "hh:mm:ss")) + "/" + (format(new Date(third), "hh:mm:ss")));
            todayDate = third;
        } else {
            dates.push((format(new Date(todayDate), "hh:mm:ss")));
            todayDate = todayDate * 1 + 5000;
        }
        data2.push(2);
    }

    var option = {
        backgroundColor: '#ffffff',
        grid: {
            containLabel: true,
            left: 20,
            top: '10%',
            bottom: '10%'
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLine: {
                show: false,
                lineStyle: {color: '#ccc'}
            },
            boundaryGap: true,
            splitLine: {
                show: true,//是否显示分割线
                lineStyle: {
                    type: 'solid',
                    color: '#eee'
                },
                interval: function (index, value) {
                    if (value == "09:30:00"
                            || value == "11:30:00/13:00:00"
                            || value == "15:00:00") {
                        return true;
                    }
                    return false;
                },
//                    分割线的条件
            },
            scale: true,
            axisTick: {
                show: true,
                interval: function (index, value) {
                    return false;
//                        显示刻度
                }
            },
            axisLabel: {
                interval: 0,
                formatter: function (value, index) {
                    if (value == "09:30:00") {
                        return "09:30";
                    } else if (value == "11:30:00/13:00:00") {
                        return "11:30/13:00";
                    } else if (value == "15:00:00") {
                        return "15:00"
                    } else {
                        return "";
                    }
                }
            },
        },
        yAxis: {
            type: 'value',
            min: "dataMin",
            max: "dataMax",
            splitNumber:1,
            axisLine: {lineStyle: {
                color: '#eee'
            }},
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#eee'
//                    x平行的线的颜色
                }
            },
            nameTextStyle: {
                color: 'rgb(102,102,102)'
                //y轴标题颜色
            },
            axisLabel: {
                textStyle: {
                    color: '#ccc',
                },
                formatter: function (value) {
                    if(value == 0){
                        return 0
                    }else{
                        return value.toFixed(3)
                    }

                }
            },
        },
        series: [{
            name: '11',
            type: 'line',
            hoverAnimation: false,
            showSymbol: false,//每个点的小圈圈
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#c7a975'
                    }
                }
            },

            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0,0, 0, 1, [{
                        offset: 0,
                        color: '#DEAA5A' // 0% 处的颜色
//                                color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1,
//                                color: '#F9F4EE' // 100% 处的颜色
                        color: '#ffffff' // 100% 处的颜色

                    }], false),
                    opacity: 0.4
                }
            }
//                需要获取的数据
        },
            {
                name: 'test',
                type: 'line',
                lineStyle: {
                    normal: {
                        color: "rgba(204,204,204,0)"//撑起图表的线完全透明
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0//每个点的圆的透明度
                    }
                },
                data: data2
            }],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    type: 'solid',
                    color: 'rgb(205, 174, 120)'
                }
            },
            formatter: function (p) {
                if (p[0].name == "") {
                    return;
                }
                var a = p[0].name + "<br/><span style='display: block;height: 10px;width: 10px;border-radius: 5px;background-color: rgb(205, 174, 120);'></span>收益率 : " + p[0].value;
                var nowtime = document.getElementById("nowtime");
                // 页面显示的时间是现在查看的时间
//                    $("#nowp").html(p[0].name) ;
                return a;
            },
        }
    };

  datas = [
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 1.750
  },
  {
    "time": "9:30:00",
    "value": 1.751
  },
  {
    "time": "9:30:00",
    "value": 4.750
  },
  {
    "time": "9:30:00",
    "value": 4.751
  },
  {
    "time": "9:30:00",
    "value": 4.750
  },
  {
    "time": "9:30:00",
    "value": 4.751
  },
  {
    "time": "9:30:00",
    "value": 4.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.751
  },
  {
    "time": "9:30:00",
    "value": 3.750
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.701
  },
  {
    "time": "9:30:00",
    "value": 3.700
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.71
  },
  {
    "time": "9:30:00",
    "value": 3.621
  },
  {
    "time": "9:30:00",
    "value": 3.621
  },
  {
    "time": "9:30:00",
    "value": 3.620
  },
  {
    "time": "9:30:00",
    "value": 3.621
  },
  {
    "time": "9:30:00",
    "value": 3.620
  },
  {
    "time": "9:30:00",
    "value": 3.621
  },
  {
    "time": "9:30:00",
    "value": 3.621
  },
  {
    "time": "9:30:00",
    "value": 3.520
  },
  {
    "time": "9:30:00",
    "value": 3.521
  },
  {
    "time": "9:30:00",
    "value": 3.520
  },
  {
    "time": "9:30:00",
    "value": 3.521
  }, {
  "time": "9:30:00",
  "value": 3.521
},
  {
    "time": "9:30:00",
    "value": 3.520
  },
  {
    "time": "9:30:00",
    "value": 3.521
  },
  {
    "time": "9:30:00",
    "value": 3.520
  },
  {
    "time": "9:30:00",
    "value": 3.521
  }, {
  "time": "9:30:00",
  "value": 3.521
},
  {
    "time": "9:30:00",
    "value": 3.520
  },
  {
    "time": "9:30:00",
    "value": 3.521
  },
  {
    "time": "9:30:00",
    "value": 3.520
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }, {
  "time": "9:30:00",
  "value": 3.721
},
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  },
  {
    "time": "9:30:00",
    "value": 3.720
  },
  {
    "time": "9:30:00",
    "value": 3.721
  }

]
        data = datas.map(function (item) {
            return item.value;
        });
        option.series[0].data = data.map(function (item) {
            return item.toFixed(3)
        });
        myChart.setOption(option);
  

    setInterval(function () {
//        $.get("./b.json", function (datas) {
//            var arr = datas.map(function (item) {
//                return item.value;
//            });
//        });
        data.push(3.330);
        console.log(data.map(function (item) {
            return item.toFixed(3)
        }));
        option.series[0].data = data.map(function (item) {
            return item.toFixed(3)
        });;
        myChart.setOption(option)


    }, 5000);