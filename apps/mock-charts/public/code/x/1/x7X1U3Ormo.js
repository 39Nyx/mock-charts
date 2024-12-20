let bgColor = "#fff";
let title = '（万人）';
let color = [
    "#0090FF",
    "#36CE9E",
    "#FFC005",
    "#FF515A",
    "#8B5CFF",
    "#00CA69"
];
let echartData = [{
        name: "1",
        value1: 5,
        value2: 8880888
    },
    {
        name: "2",
        value1: 4,
        value2: 1723888
    },
    {
        name: "3",
        value1: 3,
        value2: 18889888
    },
    {
        name: "4",
        value1: 2,
        value2: 2489888
    },
    {
        name: "5",
        value1: 1,
        value2: 11889888
    },
    {
        name: "6",
        value1: 2,
        value2: 2889888
    },
    {
        name: "7",
        value1: 3,
        value2: 16669888
    },
    {
        name: "8",
        value1: 18889888,
        value2: 7989888
    }
];

let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}

let total = 18889888

let xAxisData = echartData.map(v => v.name);
//  ["1", "2", "3", "4", "5", "6", "7", "8"]
let yAxisData1 = echartData.map(v => v.value1);
// [100, 138, 350, 173, 180, 150, 180, 230]
let yAxisData2 = echartData.map(v => v.value2);
// [233, 233, 200, 180, 199, 233, 210, 180]
const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

option = {
    // backgroundColor: bgColor,
    color: color,
    // legend: {
    //     right: 10,
    //     top: 10
    // },
    title: [{
        text: '{val|' + formatNumber(total) + '} {name|' + title + '}',
        top: '1%',
        left: '1%',
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#666666',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: '#333333',
                }
            }
        }
    }],
    tooltip: {
        show: true,
        trigger: "axis",
        formatter: function(params) {
            let html = '';
            params.forEach(v => {
                // console.warn(v, color[v.componentIndex])
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}.${v.name}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                万元`;
            })



            return html
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        // axisPointer: {
        //     type: 'shadow',
        //     shadowStyle: {
        //         color: '#ffffff',
        //         shadowColor: 'rgba(225,225,225,1)',
        //         shadowBlur: 5
        //     }
        // }
        // alwaysShowContent: true,
        axisPointer: {
            type: 'line',
            lineStyle: {
                type: 'dashed',
                color: color[0]
            }
        }
    },
    grid: {
        // top: 100,
        // containLabel: true
        bottom: '70%',
        left: '1.5%',
        right: '1.5%'
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            formatter: '{value}月',
            textStyle: {
                color: "#999"
            }
        },
        axisLine: {
            show:false
        },
        axisTick: {
            show: false
        },
        data: xAxisData
    }],
    yAxis: [{
        type: "value",
        // name: '单位：万千瓦时',
        axisLabel: {
            show:false,
            // textStyle: {
            //     color: "#666"
            // }
        },
        nameTextStyle: {
            color: "#666",
            fontSize: 12,
            lineHeight: 40
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#ddd"
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: "2019",
        type: "line",
        smooth: true,
        showSymbol: false,
        symbolSize: 10,
        zlevel: 3,
        lineStyle: {
            normal: {
                width: 5,
                color: color[0],
                shadowBlur: 1,
                shadowColor: hexToRgba(color[0], 0.1),
                shadowOffsetX: 120,
                shadowOffsetY: 5
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: hexToRgba(color[0], 0.5)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[0], 0)
                        }
                    ],
                    false
                ),
                shadowColor: hexToRgba(color[0], 0.1),
                shadowBlur: 10
            }
        },
        data: yAxisData2,
        markPoint: {
            symbol:'path://M170.666667 85.333333 853.333333 85.333333C900.266667 85.333333 938.666667 123.733333 938.666667 170.666667L938.666667 682.666667C938.666667 729.6 900.266667 768 853.333333 768L682.666667 768 512 938.666667 341.333333 768 170.666667 768C123.733333 768 85.333333 729.6 85.333333 682.666667L85.333333 170.666667C85.333333 123.733333 123.733333 85.333333 170.666667 85.333333Z',
            symbolKeepAspect: false,
            symbolSize: [80,50],
            symbolOffset: [0,-36],
            silent: false,
            label:{
                show: true,
                offset:[0,-5]
            },
            data: [{
                    type: 'max',
                    name: '最大值'
                }]
            }
    }]
};

// setTimeout(function (){
//     console.log(myChart)
//   myChart.dispatchAction({
//         type: 'showTip',
//         seriesIndex: 0,
//         dataIndex: 2
//     });

// }, 600);
