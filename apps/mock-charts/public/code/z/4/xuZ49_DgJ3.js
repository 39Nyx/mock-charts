let value = 45;
let title = '已完成';

option = {
    backgroundColor: '#0E192D',
    title: {
        text: `${title}\n${value}%`,
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 38,
            color: '#ffffff',
        }
    },
    series: [
        {
            type: 'gauge',
            radius: '40%',
            clockwise: false,
            startAngle: '-80',
            endAngle: '-439.9999',
            splitNumber: 25,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#2CFAFC'],
                        [50 / 100, '#00FFFF'],
                        [1, '#0E192D']
                    ],
                    width: 30
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 32,
                lineStyle: {
                    color: '#0E192D',
                    width: 6
                }
            },
            axisLabel: {
                show: false
            }
        },
        {
            name: "最内层虚线圈",
            type: 'pie',
            radius: ['24%', '25%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: 'red'
                }
            },
            label: {
                show: false
            },
            data: setdata()
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['31%', '31.5%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#00FFFF',
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
         {
            type: 'pie',
            name: '外层细圆环',
            radius: ['41%', '42%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#00FFFF'
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            name: "大环",
            type: 'gauge',
            splitNumber: 35,
            radius: '52%',
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                    width: 2.5
                }
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        },
    ]
};
function setdata() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 10,
                itemStyle: {
                    normal: {
                        color: 'rgb(0,255,255,.3)',
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value:100,
                itemStyle: {
                    normal: {
                        color: 'rgb(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: "rgba(0,255,255,1)"
                    }
                }
            })
        }

    }
    return dataArr
}
function startTimer() {
    timer = setInterval(()=>{
        let option = myChart.getOption();
        option.series[1].startAngle = option.series[1].startAngle - 1;
        myChart.setOption(option);
    }, 100);
}
setTimeout(startTimer, 0);