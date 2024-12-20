starttime='2017-01-01';
middletime1='2017-06-30';
middletime2='2017-07-01';
endtime='2017-12-31';
var data = [
    ['2017-03-29', 1],
    ['2017-05-21', 1],
    ['2017-07-12', 1],
    ['2017-07-18', 1],
    ['2017-07-27', 1],
    ['2017-08-02', 1],
    ['2017-08-10', 2],
    ['2017-08-16', 1],
    ['2017-08-17', 1],
    ['2017-08-25', 1],
    ['2017-08-30', 1],
    ['2017-09-04', 1],
    ['2017-09-18', 1],
    ['2017-09-29', 1],
    ['2017-10-11', 1],
    ['2017-10-12', 1],
    ['2017-10-13', 1],
    ['2017-11-02', 1],
    ['2017-11-03', 1],
    ['2017-11-04', 1],
    ['2017-11-13', 1],
    ['2017-11-21', 2],
    ['2017-11-29', 1],
    ['2017-12-05', 1],
    ['2017-12-07', 1],
    ['2017-12-20', 1],
    ['2017-12-27', 2]];
function labeldate() {
    var date = +echarts.number.parseDate(starttime);
    var end = +echarts.number.parseDate(endtime);
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time <= end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
           Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}
var data = data;
var labeldate=labeldate();
option = {
    legend: {
        top: '30',
        left: '100',
        data:['故障次数'],
        },
    calendar: [{
       top: 100,
        left: 'center',
        cellSize:40,
        range: [middletime2, endtime],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                opacity:0.5,
                type: 'solid'
            }
        },
        monthLabel: {
            show: true,
            fontSize:20,
            nameMap:'cn'
        },
        itemStyle: {
            normal: {
                color: '#eee',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    },
    {   top: 450,
        left: 'center',
        cellSize:40,
        range: [starttime, middletime1],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                opacity:0.5,
                type: 'solid'
            }
        },
        monthLabel: {
            show: true,
            fontSize:20,
            nameMap:'cn'
        },
        dayLabel: {
            show: false,
            margin: 20,
            firstDay: 1,
            nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        itemStyle: {
            normal: {
                color: '#eee',
                borderWidth: 1,
                borderColor: '#111'
            }
        }
    }],
    series : [
        {   name: '故障次数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data,
            symbolSize: function (val) {
                return val[1]*15;
            },
            itemStyle: {
                normal: {
                    color: '#91c7ae',
                    borderColor:'black',
                    opacity:0.9,
                }
            }
        },
        {name: '故障次数',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    var d = echarts.number.parseDate(params.value[0]);
                     return echarts.format.formatTime('dd', params.value[0]);
                },
                textStyle: {
                    color: '#000'
                }
            }
        },
        data: labeldate
    },
        {
            name: '故障次数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data,
            calendarIndex: 1,
            symbolSize: function (val) {
                return val[1]*15;
            },
            itemStyle: {
                normal: {
                    color: '#91c7ae',
                    borderColor:'black',
                    opacity:0.9,
                }
            }
        },
        {name: '故障次数',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        calendarIndex: 1,
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    var d = echarts.number.parseDate(params.value[0]);
                     return echarts.format.formatTime('dd', params.value[0]);
                },
                textStyle: {
                    color: '#000'
                }
            }
        },
        data: labeldate
    },
    ]
};
