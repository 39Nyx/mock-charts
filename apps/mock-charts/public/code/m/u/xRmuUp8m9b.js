/*
    最近本人发现了配置更简单，更容易理解，更容易修改，bug更少的写法
    
    所以更新了原图表，这里分享给大家
    
    不知道用以前写法的小伙伴有没有发现
    
    1.项目中如果数据为0的话，hover的时候用以前的写法文字会将圆点盖住...
    
    2.鼠标放上的时候，x轴Pointer文字可能会有些轻微的向上或向下的移动...
    
    3.文字下划线和文字见的距离过小，有的时候不是很符合需求...
    
    以下旧写法我都注释了哈，现在生效的是新写法，新写法我也解释说明了哦

*/

/*

    这个注释建议看完代码再看哦
    
    1.如果axisLabel和axisPointer的margin相同，则padding[0]必须等于0
    
    2.实现效果axisLabel和AxisPointer的字体大小必须相同
    
    3.此配置实现效果axisLabel和axisPointer的margin必须相同
    
    其他配置同样可以实现效果，如lineHeight等
    
    这是我整理、删除多余相同配置项后总结出的，使用方便，便于封装复用
    
    适用于大多数图表的配置

    更复杂的样式还是要参考配置文档的哦???

*/
const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF'];
var base = +new Date(2000, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data1 = [];
var data2 = [];
var data3 = [];

for (var j = 1; j < 10; j++) {
    var now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
}

for (var i = 1; i < 8; i++) {
    data1.push(Math.round(Math.random() * 20));
    data2.push(Math.round(Math.random() * 20));
    data3.push(Math.round(Math.random() * 20));
}

option = {
    backgroundColor: '#fff',
    title: {
        text: '利润收支曲线',
        textStyle: {
            fontSize: 12,
            fontWeight: 400,
        },
        left: 'center',
        top: '5%',
        show: false,
    },
    legend: {
        x: 'center',
        y: 'top',
        show: true,
        top: '5%',
        right: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#556677',
        },
        data: ['预估净利润', '实时均价', '目标成本'],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0,
            },
            lineStyle: {
                width: 0,
            },
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c',
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
    },
    grid: {
        top: '15%',
        y2: 88,
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 100,
        },
        {
            start: 0,
            end: 100,
        },
    ],
    xAxis: [
        {
            type: 'category',
            data: date,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#DCE2E8',
                },
            },
            axisTick: {
                show: true,
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#556677',
                },
                // 默认x轴字体大小
                fontSize: 12,
                // margin:文字到x轴的距离
                margin: 15,
            },
            axisPointer: {
                label: {
                    // padding: [11, 5, 7],
                    padding: [0, 0, 10, 0],
                    /*
                    除了padding[0]建议必须是0之外，其他三项可随意设置

                    和CSSpadding相同，[上，右，下，左]

                    如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同

                    padding[2]的10:

                    10 = 文字距下边线的距离 + 下边线的宽度

                    如：UI图中文字距下边线距离为7 下边线宽度为2

                    则padding: [0, 0, 9, 0]

                                */
                    // 这里的margin和axisLabel的margin要一致!
                    margin: 15,
                    // 移入时的字体大小
                    fontSize: 12,
                    backgroundColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#fff', // 0% 处的颜色
                            },
                            {
                                // offset: 0.9,
                                offset: 0.86,
                                /*
                0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

                                        */
                                color: '#fff', // 0% 处的颜色
                            },
                            {
                                offset: 0.86,
                                color: '#33c0cd', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#33c0cd', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                },
            },
            boundaryGap: false,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位：元',
            // nameTextStyle: {
            //     color: '#9effff',

            // },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#DCE2E8',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#556677',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            name: '预估净利润',
            type: 'line',
            data: data1,
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
                focus: 'series',
            },
            lineStyle: {
                width: 5,
                // color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                //     {
                //         offset: 0,
                //         color: '#9effff',
                //     },
                //     {
                //         offset: 1,
                //         color: '#9E87FF',
                //     },
                // ]),
                shadowColor: 'rgba(158,135,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20,
            },
            itemStyle: {
                normal: {
                    color: colorList[0],
                    borderColor: colorList[0],
                },
            },
            markPoint: {
                symbol: 'pin', //标记(气泡)的图形
                symbolSize: 50, //标记(气泡)的大小
                itemStyle: {
                    // color: '#4587E7', //图形的颜色。
                    borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                    borderWidth: 0, //描边线宽。为 0 时无描边。
                    borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
                },
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' },
                ],
            },
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
        {
            name: '实时均价',
            type: 'line',
            data: data2,
            symbolSize: 1,
            symbol: 'circle',
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
                focus: 'series',
            },
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                    {
                        offset: 0,
                        color: '#73DD39',
                    },
                    {
                        offset: 1,
                        color: '#73DDFF',
                    },
                ]),
                shadowColor: 'rgba(115,221,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20,
            },
            itemStyle: {
                normal: {
                    color: colorList[1],
                    borderColor: colorList[1],
                },
            },
            markPoint: {
                symbol: 'pin', //标记(气泡)的图形
                symbolSize: 50, //标记(气泡)的大小
                itemStyle: {
                    color: '#4587E7', //图形的颜色。
                    borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                    borderWidth: 0, //描边线宽。为 0 时无描边。
                    borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
                },
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' },
                ],
            },
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
        {
            name: '目标成本',
            type: 'line',
            data: data3,
            symbolSize: 1,
            yAxisIndex: 0,
            symbol: 'circle',
            smooth: true,
            showSymbol: false,
            emphasis: {
                focus: 'series',
            },
            lineStyle: {
                width: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: '#fe9a',
                    },
                    {
                        offset: 1,
                        color: '#fe9a8b',
                    },
                ]),
                shadowColor: 'rgba(254,154,139, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20,
            },
            itemStyle: {
                normal: {
                    color: colorList[2],
                    borderColor: colorList[2],
                },
            },
            markPoint: {
                symbol: 'pin', //标记(气泡)的图形
                symbolSize: 50, //标记(气泡)的大小
                itemStyle: {
                    // color: '#4587E7', //图形的颜色。
                    borderColor: '#000', //图形的描边颜色。支持的颜色格式同 color，不支持回调函数。
                    borderWidth: 0, //描边线宽。为 0 时无描边。
                    borderType: 'solid', //柱条的描边类型，默认为实线，支持 ‘solid’, ‘dashed’, ‘dotted’。
                },
                data: [
                    { type: 'max', name: '最大值' },
                    { type: 'min', name: '最小值' },
                ],
            },
            markLine: {
                data: [{ type: 'average', name: '平均值' }],
            },
        },
    ],
};
