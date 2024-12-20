var InternetChart = {
    "webType": ["新闻", "论坛", "博客", "新浪微博", "微信", "平媒", "贴吧", "留言板", "微视频", "中正云搜", "移动媒体"],
    "maxX": 90,
    "maxY": 110,
    "splitNumX": 9,
    "splitNumY": 11,
    "data": [
        ["新浪微博", "6.20", "36.77"],
        ["新浪微博", "17.76", "30.57"],
        ["新浪微博", "29.93", "38.28"],
        ["新浪微博", "31.41", "35.46"],
        ["新浪微博", "41.87", "38.45"],
        ["新浪微博", "48.57", "39.03"],
        ["新浪微博", "57.08", "32.03"],
        ["新浪微博", "68.71", "37.38"],
        ["新浪微博", "65.42", "34.15"],
        ["新浪微博", "76.81", "30.46"],
        ["新浪微博", "81.92", "36.00"]
    ]
}
var InternetBg = {
    "webType": ["新闻", "论坛", "博客", "新浪微博", "微信", "平媒", "贴吧", "留言板", "微视频", "中正云搜", "移动媒体"],
    "hours": ["2016-12-16", "2016-12-27", "2016-12-29", "2017-03-31", "2017-05-12", "2017-09-08", "2017-09-12", "2017-09-21", "2017-10-19"]
}
var webType = InternetBg.webType;
var hours = InternetBg.hours;

var webType = InternetChart.webType;
var maxX = InternetChart.maxX;
var maxY = InternetChart.maxY;
var splitNumX = InternetChart.splitNumX;
var splitNumY = InternetChart.splitNumY;
var data = InternetChart.data;

option = {
    color: ['#f70706', '#52a41e', '#fd11f7', '#0587f5', '#8b253d', '#0168b7', '#8b7e25', '#2525a7', '#8a258b', '#25a5a7', '#a79625'],
    grid: {
        top: '10%',
        left: '3.5%',
        right: '3%',
        bottom: '4%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        showDelay: 0,
        formatter: function(params) {
            // var num = parseInt(params.seriesId.substr(params.seriesId.length-1,1))+1;
            return params.seriesName + '<br/>';
        },
        /*axisPointer:{
         show: true,
         type : 'cross',
         lineStyle: {
         type : 'dashed',
         width : 1
         }
         }*/
    },
    legend: {
        data: webType,
        textStyle: {
            fontSize: 15,
            fontFamily: 'Microsoft YaHei'
        },
        top: '10'
    },
    toolbox: {
        show: false,
        top: '-1%',
        right: '3%',
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: [{
        show: false,
        name: '时间',
        type: 'value',
        max: maxX,
        splitNumber: splitNumX,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted'
            }
        }
    }, {
        show: true,
        position: 'bottom',
        //name: '时间',
        type: 'category',
        scale: true,
        axisLabel: {
            formatter: hours,
            interval: 0,
            //rotate: 10,
            splitNumber: 15,
            fontSize: 14,
            fontFamily: 'Microsoft YaHei'
        },

        splitLine: {
            show: true,
            lineStyle: {
                show: false,
                type: 'dotted'
            }
        },
        data: hours
    }],
    yAxis: [{
        show: false,
        name: '数量',
        type: 'value',
        max: maxY,
        splitNumber: splitNumY,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted'
            }
        }
    }, {
        show: true,
        position: 'left',
        //name: '类型/数量',
        type: 'category',
        data: webType,
        scale: true,
        axisLine: {
            show: true,
            onZero: true
        },
        axisLabel: {
            show: true,
            fontSize: 14,
            fontFamily: 'Microsoft YaHei'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted'
            }
        },
        nameGap: 6
    }],
    series: function() {
        var items = [];
        for (var i = 0; i < data.length; i++) {
            var item = {
                name: data[i][0],
                type: 'scatter',
                symbolSize: 7,
                color: 'blue',
                data: [
                    [data[i][1], data[i][2]]
                ]
            };
            items.push(item);
        }
        return items;
    }()
}