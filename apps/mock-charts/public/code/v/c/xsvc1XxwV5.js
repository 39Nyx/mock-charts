const headers = ['2011-09-30', '2011-10-31', '2011-11-30', '2011-12-31', '2012-01-31', '2012-02-29', '2012-03-31', '2012-04-30', '2012-05-31', '2012-06-30', '2012-07-31', '2012-08-31', '2012-09-30', '2012-10-31', '2012-11-30', '2012-12-31', '2013-01-31', '2013-02-28', '2013-03-31', '2013-04-30', '2013-05-31', '2013-06-30', '2013-07-31', '2013-08-31', '2013-09-30', '2013-10-31', '2013-11-30', '2013-12-31', '2014-01-31', '2014-02-28', '2014-03-31', '2014-04-30', '2014-05-31', '2014-06-30', '2014-07-31', '2014-08-31', '2014-09-30', '2014-10-31', '2014-11-30', '2014-12-31', '2015-01-31', '2015-02-28', '2015-03-31', '2015-04-30', '2015-05-31', '2015-06-30', '2015-07-31', '2015-08-31', '2015-09-30', '2015-10-31'];

const srcData = [24.9654,null,null,16.7573,null,null,10.9466,null,null,7.6162,null,null,7.0672,null,null,12.0246,null,null,8.4632,null,null,9.5515,null,null,10.5731,null,null,6.8437,null,null,6.1885,null,null,6.857,null,null,6.6064,null,null,4.6705,null,null,-0.4302,null,null,0.0367,null,null,-5.9624,null]
const subData = [13.8,13.2,12.4,12.8,null,21.3,11.9,9.3,9.6,9.5,9.2,8.9,9.2,9.6,10.1,10.3,null,null,8.9,9.3,9.2,8.9,9.7,10.4,10.2,10.3,10,9.7,null,null,8.8,8.7,8.8,9.2,9,6.9,8,7.7,7.2,7.9,7.4477,6.06,5.6,5.9,6.1,6.8,6,6.1,5.7,5.6]
const thirdData = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1.5,1.8,1.9,1.8,1.8,1.7,1.6,1.6,1.7,1.8,1.8,1.8,2,1.7,1.7,1.6,1.7,1.7,1.7,1.6,1.5,1.4,1.3,1.3,1.2,1.574,1.4596,1.4699,1.5758,1.6943,1.6845,1.703,1.6362,1.4731]
const fourthData = [6.52, 5, 2.72, 1.69, 0.73, 0.03, -0.32, -0.7, -1.4, -2.08, -2.87, -3.48, -3.55, -2.76, -2.2, -1.94, -1.64, -1.63, -1.92, -2.62, -2.87, -2.7, -2.27, -1.62, -1.34, -1.51, -1.42, -1.36, -1.64, -2, -2.3019, -2.0042, -1.4464, -1.1092, -0.8688, -1.2038, -1.7996, -2.2428, -2.6928, -3.3152, -4.3202, -4.7976, -4.5603, -4.5725, -4.607, -4.8135, -5.3692, -5.9227, -5.945, -5.9]
const fifthData = [51.2, 50.4, 49, 50.3, 50.5, 51, 53.1, 53.3, 50.4, 50.2, 50.1, 49.1705, 49.8, 50.2, 50.6, 50.6, 50.4, 50.1, 50.9, 50.6, 50.8, 50.1, 50.3, 51, 51.1, 51.4, 51.4, 51, 50.5, 50.2, 50.3, 50.4, 50.8, 51, 51.7, 51.1, 51.1, 50.8, 50.3, 50.1, 49.8, 49.9, 50.1, 50.1, 50.2, 50.2, 50, 49.7, 49.8, 49.8]
const sixthData = [17.1, 15.9, 13.8, 13.4, -0.5, 18.4, 8.9, 4.9, 15.3, 11.3, 1, 2.7, 9.9, 11.6, 2.9, 14.1, 25, 21.8, 10, 14.7, 1, -3.1, 5.1, 7.2, -0.3, 5.6, 12.7, 4.3, 10.5, -18.1, -6.6, 0.8, 7.1, 7.2, 14.4, 9.4, 15.3, 11.6, 4.7, 9.7, -3.5, 48.2, -15.1, -6.6, -3.4, 1.5, -9.2, -5.8, -3.9, -7]

const getValueExtend = (data, bindZero) => {
    let min = Math.min(...data);
    let max = Math.max(...data);
    if (min > 0 && bindZero) {
        min = 0;
    }
    if (max < 0 && bindZero) {
        max = 0;
    }
    return [min, max];
};

const roundNumber = echarts.number.round;
const getPrecision = echarts.number.getPrecision;
const niceValueExtend = (extend, splitNumber = 5) => {
    const [min, max] = extend;
    const span = max - min;
    const interval = span / splitNumber;
    const niceInterval = echarts.number.nice(interval, true);
    
    const precision = getPrecision(niceInterval);
    const niceMin = roundNumber(Math.floor(min / niceInterval) * niceInterval, precision);
    const niceMax = roundNumber(Math.ceil(max / niceInterval) * niceInterval, precision);
    
    return {
        min: niceMin,
        max: niceMax,
        interval: niceInterval
    };
};

const subNice = (value) => {
    const ticks = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
    const exponent = echarts.number.quantityExponent(value);
    const exp10 = Math.pow(10, exponent);
    const f = value / exp10; // 1 <= f < 10
    
    let nf;
    for (let i = 0; i < ticks.length; i++) {
        const item = ticks[i];
        if (f <= item) {
            nf = item;
            break;
        }
    }
    
    let niceValue = nf * exp10;

    // Fix 3 * 0.1 === 0.30000000000000004 issue (see IEEE 754).
    // 20 is the uppper bound of toFixed.    
    if (exponent >= -20) {
        if (exponent < 0) {
            niceValue = niceValue.toFixed(-exponent);
        } else {
            niceValue = niceValue.toFixed(0);
        }
    }
    
    return Number(niceValue);
};

const subNiceValueExtend = (extend, splitNumber) => {
    const [min, max] = extend;
    const span = max - min;
    const interval = span / (splitNumber - 1);
    const niceInterval = subNice(interval);
    const precision = getPrecision(niceInterval);
    const niceMin = roundNumber(Math.floor(min / niceInterval) * niceInterval, precision);
    const niceMax = roundNumber(niceMin + splitNumber * niceInterval, precision);
    return {
        min: niceMin,
        max: niceMax,
        interval: niceInterval
    };
};

const nice = niceValueExtend(getValueExtend(srcData, true));
const count = (nice.max - nice.min) / nice.interval;
const sub = subNiceValueExtend(getValueExtend([
    ...subData, 
    ...thirdData,
    ...fifthData,
    ...sixthData,
    ], true), count);

const GAP = 2;
const renderCircleSymbolItem = (params, api) => {
    var bandWidth = api.size([0, 0])[0];
    var symbolSize = 8;
    var point = api.coord([api.value(0), api.value(1)]);

    return {
        type: 'circle',
        transition: ['shape'],
        shape: {
            cx: point[0],
            cy: point[1],
            r: symbolSize / 2,
        },
        invisible: symbolSize > bandWidth / GAP,
        style: api.style({
            fill: api.visual('color'),
            stroke: 'none',
            lineWidth: 0
        }),
    };
};

const renderDiamondSymbolItem = (params, api) => {
    var bandWidth = api.size([0, 0])[0];
    var symbolSize = 8;
    var point = api.coord([api.value(0), api.value(1)]);

    return {
        type: 'rect',
        transition: ['shape'],
        originX: point[0],
        originY: point[1],
        rotation: Math.PI / 4,
        shape: {
            x: point[0] - symbolSize / 2,
            y: point[1] - symbolSize / 2,
            width: symbolSize,
            height: symbolSize
        },
        invisible: symbolSize > bandWidth / GAP,
        style: api.style({
            fill: api.visual('color'),
            stroke: 'none',
            lineWidth: 0
        }),
    };
};

const renderRectSymbolItem = (params, api) => {
    var bandWidth = api.size([0, 0])[0];
    var symbolSize = 8;
    var point = api.coord([api.value(0), api.value(1)]);

    return {
        type: 'rect',
        transition: ['shape'],
        originX: point[0],
        originY: point[1],
        rotation: 0,
        shape: {
            x: point[0] - symbolSize / 2,
            y: point[1] - symbolSize / 2,
            width: symbolSize,
            height: symbolSize
        },
        invisible: symbolSize > bandWidth / GAP,
        style: api.style({
            fill: api.visual('color'),
            stroke: 'none',
            lineWidth: 0
        }),
    };
};

const renderTriangleSymbolItem = (params, api) => {
    var bandWidth = api.size([0, 0])[0];
    var symbolSize = 8;
    var point = api.coord([api.value(0), api.value(1)]);
    const x0 = point[0];
    const y0 = point[1];
    const cosTheta = Math.cos(Math.PI / 6);
    const sinTheta = Math.sin(Math.PI / 6);
    const r = symbolSize * 0.7;

    return {
        type: 'polygon',
        transition: ['style'],
        originX: point[0],
        originY: point[1],
        rotation: Math.PI,
        shape: {
            points: [
                [x0, y0 - r],
                [x0 + r * cosTheta, y0 + r * sinTheta],
                [x0 - r * cosTheta, y0 + r * sinTheta],
            ],
        },
        invisible: symbolSize > bandWidth / GAP,
        style: api.style({
            fill: api.visual('color'),
            stroke: 'none',
            lineWidth: 0
        }),
    };
};

const renderInvTriangleSymbolItem = (params, api) => {
    var bandWidth = api.size([0, 0])[0];
    var symbolSize = 8;
    var point = api.coord([api.value(0), api.value(1)]);
    const x0 = point[0];
    const y0 = point[1];
    const cosTheta = Math.cos(Math.PI / 6);
    const sinTheta = Math.sin(Math.PI / 6);
    const r = symbolSize * 0.7;

    return {
        type: 'polygon',
        transition: ['style'],
        originX: point[0],
        originY: point[1],
        shape: {
            points: [
                [x0, y0 - r],
                [x0 + r * cosTheta, y0 + r * sinTheta],
                [x0 - r * cosTheta, y0 + r * sinTheta],
            ],
        },
        invisible: symbolSize > bandWidth / GAP,
        style: api.style({
            fill: api.visual('color'),
            stroke: 'none',
            lineWidth: 0
        }),
    };
};

option = {
    color: [
      '#7cb5ec',
      '#434348',
      '#f7a35c',
      '#8085e9',
      '#f15c80',
      '#c4ccd3',
      '#e4d354',
      '#2b908f',
      '#f45b5b',
      '#91e8e1'
    ],
    animation: true,
    legend: {
        type: 'scroll',
        bottom: 18,
    },
    grid: {
        top: 64,
        bottom: 64,
        left: 32,
        right: 32,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: headers,
        axisLine: {
            lineStyle: {
                color: '#CCD6EB'
            }
        },
        axisLabel: {
            color: '#787B8A'
        }
    },
    yAxis: [
        {
            type: 'value',
            min: nice.min,
            max: nice.max,
            interval: nice.interval,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#CCD6EB'
                }
            },
            axisTick: {show: true},
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#E6E6E6'
                }
            },
            axisLabel: {
                color: '#787B8A'
            }
        },
        {
            type: 'value',
            min: sub.min,
            max: sub.max,
            interval: sub.interval,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#CCD6EB'
                }
            },
            axisTick: {show: true},
            splitLine: {
                show: false,
            },
            axisLabel: {
                color: '#787B8A'
            }
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    series: [
        {
            type: 'bar',
            name: 'xxx',
            data: srcData,
            symbol: 'circle',
            showSymbol: false,
            symbolSize: 10,
            connectNulls: true,
            z: 0
        },
        // {
        //     type: 'custom',
        //     name: 'xxx',
        //     data: srcData,
        //     renderItem: renderCircleSymbolItem,
        //     tooltip: {
        //         show: false
        //     },
        //     z: 1
        // },
        {
            type: 'line',
            name: 'yyy',
            data: subData,
            symbol: 'diamond',
            showSymbol: false,
            symbolSize: 12,
            connectNulls: true,
            yAxisIndex: 1,
            z: 2
        },
        {
            type: 'custom',
            name: 'yyy',
            data: subData,
            renderItem: renderDiamondSymbolItem,
            tooltip: {
                show: false
            },
            yAxisIndex: 1,
            z: 3
        },
        {
            type: 'line',
            name: 'zzz',
            data: thirdData,
            symbol: 'triangle',
            showSymbol: false,
            symbolSize: 10,
            symbolRotate: 180,
            connectNulls: true,
            yAxisIndex: 1,
            z: 4
        },
        {
            type: 'custom',
            name: 'zzz',
            data: thirdData,
            renderItem: renderTriangleSymbolItem,
            tooltip: {
                show: false
            },
            yAxisIndex: 1,
            z: 5
        },
         {
            type: 'line',
            name: 'aaa',
            data: fifthData,
            symbol: 'triangle',
            showSymbol: false,
            symbolSize: 10,
            symbolRotate: 0,
            connectNulls: true,
            yAxisIndex: 1,
            z: 6
        },
        {
            type: 'custom',
            name: 'aaa',
            data: fifthData,
            renderItem: renderInvTriangleSymbolItem,
            tooltip: {
                show: false
            },
            yAxisIndex: 1,
            z: 7
        },
         {
            type: 'line',
            name: 'bbb',
            data: sixthData,
            symbol: 'rect',
            showSymbol: false,
            symbolSize: 10,
            connectNulls: true,
            yAxisIndex: 1,
            z: 8
        },
        {
            type: 'custom',
            name: 'bbb',
            data: sixthData,
            renderItem: renderRectSymbolItem,
            tooltip: {
                show: false
            },
            yAxisIndex: 1,
            z: 9
        }
    ]
};

console.log('...ggg...', myChart);

myChart.on('legendselectchanged', (params) => {
    console.log(params);
    option.legend = {
        ...option.legend,
        selected: {...params.selected},
    };
    
    const sub = subNiceValueExtend(getValueExtend([
        ...(params.selected['yyy'] ? subData : []), 
        ...(params.selected['zzz'] ? thirdData: []),
        ...(params.selected['aaa'] ? fifthData: []),
        ...(params.selected['bbb'] ? sixthData: []),
    ], true), count);
    
    option.yAxis[1] = {
        ...option.yAxis[1],
        min: sub.min,
        max: sub.max,
        interval: sub.interval
    };
    
    myChart.setOption(option, {lazyUpdate: true});
    myChart.resize();
    // myChart.setOption(option);
    // myChart.resize({
    //     animation: {duration: 1000},
    //     silent: false
    // });
});


