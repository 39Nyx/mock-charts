function getVirtulData(year) {
    year = year || '1910';
    var date = +echarts.number.parseDate(year + '-01-12');
    var end = +echarts.number.parseDate(year + '-04-19');
    var dayTime = 3600 * 24 * 1000;
    var data_case = [];
    var data_death = [];

    var i = 0;
    var data_1 = [7, 5, 6, 9, 27, 10, 15, 19, 21, 28, 18, 23, 27, 41, 25, 30, 33, 32, 15, 36, 18, 39, 34, 24, 26, 29, 29, 20, 29, 34, 41, 36, 38, 27, 32, 37, 37, 28, 36, 20, 27, 15, 30, 25, 18, 30, 15, 44, 11, 27, 22, 15, 34, 31, 17, 9, 23, 15, 8, 10, 3, 13, 11, 2, 3, 6, 3, 5, 4, 2, 3, 2, 0, 0, 2, 4, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1];
    var data_2 = [7, 5, 2, 5, 25, 8, 9, 10, 16, 26, 14, 16, 25, 29, 23, 14, 27, 28, 13, 29, 15, 27, 22, 22, 17, 26, 29, 20, 26, 24, 23, 26, 15, 22, 24, 23, 25, 17, 23, 12, 15, 11, 15, 14, 10, 21, 8, 24, 9, 18, 7, 6, 11, 16, 14, 7, 15, 12, 6, 9, 2, 12, 8, 0, 2, 3, 3, 5, 4, 1, 3, 2, 0, 0, 0, 2, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1];

    for (var time = date; time <= end; time += dayTime) {
        for (; i < 99; i++) {
            data_case.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                data_1[i]
            ]);
            data_death.push([
                echarts.format.formatTime('yyyy-MM-dd', time),
                data_2[i]
            ]);
            break;
        }
        i++;
    }
    return {
        case_: data_case,
        death: data_death
    };
}

var data_case = getVirtulData(1910).case_;
var data_death = getVirtulData(1910).death;

option = {
    backgroundColor: '#363636',

    title: [{
        top: 'center',
        left: '4%',
        text: '奉\n天\n省\n城\n每\n日\n疫\n情',
        textStyle: {
            fontSize: 45,
            color: 'rgba(255,255,255,0.9)'
        }
    }, {
        top: 'center',
        left: '11%',
        text: '数\n据\n来\n源\n\n︽\n东\n三\n省\n疫\n事\n报\n告\n书\n︾\n',
        textStyle: {
            fontSize: 15,
            fontWeight: 'normal',
            color: 'rgba(255,255,255,0.7)'
        }
    }],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        bottom: '12',
        left: '4%',
        orient: 'vertical',
        data: ['新增病例', '新增死亡人数'],
        textStyle: {
            fontSize: 16,
            color: '#fff'
        }
    },
    calendar: [{
        top: '5.5%',
        width: '68%',
        height: '43%',
        right: '5%',
        range: ['1910-01-01', '1910-04-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '{start}  新增病例',
            margin: 45,
            textStyle: {
                fontSize: 22,
                color: 'rgba(255,255,255,0.5)'
            }
        },
        itemStyle: {
            color: '#434e52',
            borderWidth: 1,
            borderColor: '#111'
        }
    }, {
        bottom: '3%',
        right: '5%',
        width: '68%',
        height: '43%',
        range: ['1910-01-01', '1910-04-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#000',
                width: 4,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '{start}  新增死亡人数',
            margin: 45,
            textStyle: {
                fontSize: 22,
                color: 'rgba(255,255,255,0.5)'
            }
        },
        itemStyle: {
            color: '#204051',
            borderWidth: 1,
            borderColor: '#111'
        }
    }, ],
    series: [{
            name: '新增病例',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: data_case,
            symbolSize: function(val) {
                return val[1];
            },
            showEffectOn: 'render',
            rippleEffect: {
               brushType: 'stroke',
                //color:'#cf1b1b',
                scale:2
            },
            itemStyle: {
                color: '#f4e925'
            }
        },
        {
            name: '新增死亡人数',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: data_death,
            symbolSize: function(val) {
                return val[1];
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke',
                //color:'#cf1b1b',
                //scale:2
            },
            hoverAnimation: true,
            itemStyle: {
                color: '#fa1616',
                shadowBlur: 10,
                shadowColor: '#333'
            },
        },
    ]
};