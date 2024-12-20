var uploadedDataURL = "/asset/get/s/data-1524127380487-rkg25LRrhG.jpg";

var uploadedDataURL = "/asset/get/s/data-1524127173139-rJTar0B2z.jpg";



function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}


option = {
    title: {
        right: '17%',
        textStyle: {
            color: '#f7e1a9',
            fontFamily: 'STHeiti'
        },
        top: 10,
        padding: 0
    },
    grid: {
        show: true,
        borderWidth: 0,
        height: 156,
        top: '15%',
        left: window.smallGridLeft,
        right: window.smallGridRight,
        background: "linear-gradient(-180deg, #6873E8 0%, #277DF4 100%)",
    },

    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#9f520e'
            }
        },
        axisLabel: window.smallXAxisLabel
    },

    tooltip: {
        show: true,
        trigger: 'axis'
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        scale: true,
        boundaryGap: window.smallYBoundaryGap,
        splitNumber: 3,
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#af4f0a'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: window.smallYAxisLabel
    },
    easing: 'linear',
    series: [{
        name: '视频分享总数',
        type: 'line',
        showSymbol: false,
        lineStyle: {
            normal: {
                color: '#f9d47f'
            }
        },
        data: data,
        markPoint: {
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            }
        }
    }]
};


setInterval(function() {

    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
    }

    myChart.setOption({
        series: [{
            data: data
        }]
    });
}, 200);