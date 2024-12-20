function randomData() {
    now = new Date(+now + oneMinute);
    var fatigue = Math.random() * 2 - 1;
    return {
        value: [
            [now.getHours(), now.getMinutes()].join(":"),
            Math.round(fatigue * 100) / 100
        ]
    };
}

function randomY() {
    var fatigue = Math.random() * 2 - 1;
    return Math.round(fatigue * 100) / 100;
}

var now = +new Date();
var oneMinute = 60 * 1000;
var data1 = [], data2 = [], data3 = [],
x1 = [], x2 = [], x3 = [];

//点数是一样的，x轴也是一样的
for (var i = 0; i < 30; i++) {
    var item = randomData();
    console.log(item);
    data1.push(item);
    x1.push(item.value[0])
}

console.log("data1: ");
console.log(data1);

for (var i = 0; i < 30; i++) {
    var item = randomData();
    data2.push(randomY())
    x2.push(x1[i])
}

console.log("data2: ");
console.log(data2);

for (var i = 0; i < 30; i++) {
    var item = randomData();
    data3.push(randomY())
    x3.push(x1[i])
}


var option = {
    textStyle: {
        fontSize: 24
    },
    legend: {
        data: [{
            name: "Alert State",
            icon: "square",
            textStyle: {
                color: "#222222",
                fontSize: "13px",
                fontFamily: "Arial"
            }
        }]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        name: "Time Period",
        nameLocation: "middle",
        nameGap: "40",
        nameTextStyle: {
            fontSize: "16",
            fontWeight: "normal",
            fontStyle: "normal",
            fontFamily: "Arial"
        },
        data: x1,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        max: 'dataMax',
        min: 'dataMin',
        name: "Fatigue",
        nameTextStyle: {
            fontSize: "16",
            fontWeight: "normal",
            fontStyle: "normal",
            fontFamily: "Arial"
        },
        type: "value",
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true
        }
    },
    series: [{
        name: 'Driver1',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data1,
        itemStyle: {
            normal: {
                color: '#199CD8',
                borderColor: '#fff',
                borderWith: 1,
                shadowBlur: 2,
                shadowOffsetX: 2,
                shadowOffsetY: 5
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'rgba(112, 155, 233, 0.5)',
                shadowBlur: 4,
                shadowOffsetY: 4
            }
        },
        markLine: {
            silent: true,
            symbol: false,
            animation: false,
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                yAxis: -0.10
            }],
            lineStyle: {
                normal: {
                    opacity: 0.5
                }
            }
        }
    }, 
    {
        name: 'Driver2',
        type: 'line',
        data: data2,
        smooth: true,
        lineStyle: {
                normal: {opacity: 0.5}
            }
    },
    {
        name: 'Driver3',
        type: 'line',
        data: data3,
        smooth: true,
        lineStyle: {
                normal: {opacity: 0.5}
            }
    },
    
    ]
};

var newitem;
setInterval(function() {
    // for (var j = 0; j < 5; j++) {
        newitem = randomData();
        data1.shift();
        data1.push(newitem);
        data2.shift();
        data2.push(randomY());
        
        data3.shift();
        data3.push(randomY());
      
        x1.shift();
        x1.push(newitem.value[0]);
        x2.shift();
        x2.push(newitem.value[0]);
        x3.shift();
        x3.push(newitem.value[0]);
    // }
    
    console.log("data1: ");
console.log(data1);

    myChart.setOption({
        series: [{
            data: data1
        }
        , {
            data: data2
        },{
            data: data3
        }],
        xAxis: [{
            data: x1
        }]
    });
}, 1000);

// setInterval(function() {
//     data2.shift();
//     data2.push(randomY());
    
//     data3.shift();
//     data3.push(randomY());
    
//     myChart.setOption({
//         series: [{
//             data: data2
//         },{
//             data: data3
//         }],
//         // , {
//         //     data: data2
//         // },{
//         //     data: data3
//         // }],
//         xAxis: [{
//             data: x1
//         }]
//     });
    
// }, 2000)