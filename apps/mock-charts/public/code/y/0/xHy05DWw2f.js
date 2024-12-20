  // 折线图：
var lineLabel1 = {//实线折线第一条/最后一条数据label
    show: true,
    fontSize: 1 * fontSize,
    formatter: '{c} {a}',
    position:'right'
};

var lineLabel2 = {//实线折线数据label
    show: true,
    fontSize: 1 * fontSize,
    formatter: '{c}'
};

var lineLabel3 = {//实线折线数据label
    show: true,
    fontSize: 1 * fontSize,
    formatter: ''
};
var lineColor = ['#fb728c', '#27446e', '#bbb', '#ffc264'];//折线颜色数组lineColor

var fontSize=14;
var xAxisdate=['1701','1702','1703','1704','1705','1706','1707','1708','1709','1710','1711','1712'];
var data1=[
    {value:32,label: lineLabel3},
    {value:14,label: lineLabel3},    
    {value:52,label: lineLabel3},
    {value:20,label: lineLabel3},
    {value:39,label: lineLabel3},
    {value:18,label: lineLabel3},
    {value:48,label: lineLabel3},
    {value:22,label: lineLabel3},
    {value:52,label: lineLabel3},
    {value:25,label: lineLabel3},
    {value:62,label: lineLabel3},
    {value:32,label: lineLabel1}
    ];

var data2=[
    {value:42,label: lineLabel3},
    {value:24,label: lineLabel3},    
    {value:62,label: lineLabel3},
    {value:30,label: lineLabel3},
    {value:49,label: lineLabel3},
    {value:28,label: lineLabel3},
    {value:58,label: lineLabel3},
    {value:32,label: lineLabel3},
    {value:62,label: lineLabel3},
    {value:35,label: lineLabel3},
    {value:72,label: lineLabel3},
    {value:42,label: lineLabel1}
    ];

var data3=[
    {value:52,label: lineLabel2},
    {value:34,label: lineLabel2},    
    {value:72,label: lineLabel2},
    {value:40,label: lineLabel2},
    {value:59,label: lineLabel2},
    {value:38,label: lineLabel2},
    {value:68,label: lineLabel2},
    {value:42,label: lineLabel2},
    {value:72,label: lineLabel2},
    {value:45,label: lineLabel2},
    {value:82,label: lineLabel2},
    {value:52,label: lineLabel1}
    ];



 option = {
    color:lineColor,
    title: {
        show: true,
        text: '线下市场份额',
        left: 'center',
        top: '5%',
        textStyle: {
            color: '#0187DC',
            fontSize: 1.25 * fontSize,
        },
    },
    legend: {
        top: '5%',
        left: '5%',
        itemWidth: 1 * fontSize,
        itemHeight: 0.6 * fontSize,
        textStyle: {
            color: '#000',
            fontSize: 1 * fontSize,
        },
        data: ['立白','蓝月亮','好爸爸'],
    },
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '10%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data:xAxisdate,
        axisLine: {
            lineStyle: {
                color: '#ddd',
                width: 0.1 * fontSize
            }
        },
        axisLabel: {
            fontSize: 0.8 * fontSize,
            color: '#9DB4D8'
        },
        axisTick: {
            show: false
        },

    },
    yAxis: {
        type: 'value',
        name: '',
        nameGap: 20,
        nameLocation: 'end',
        nameTextStyle: {
            fontSize: 1 * fontSize,
        },
        axisLine: {
            lineStyle: {
                color: '#ddd',
                width: 0.1 * fontSize
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#9DB4D8',
            fontSize: 0.8 * fontSize,

        },
        axisTick: {
            show: false
        },

    },
    series: [
        {
            name: '立白',
            type: 'line',
            symbolSize: 0.2 * fontSize,
            showAllSymbol: true,
            data:data1,
            smooth:true,
            // itemStyle: {
            //     normal: {
            //         color: '#388BEB'
            //     }
            // },
            // lineStyle: {
            //     color: '#388BEB',
            //     type: 'solid',
            //     width: 0.1 * fontSize,
            //     // shadowColor: 'rgba(56,139,235, 0.5)',
            //     // shadowBlur: 5,
            //     // shadowOffsetY:-2
            // }
        },
        {
            name: '蓝月亮',
            type: 'line',
            symbolSize: 0.2 * fontSize,
            showAllSymbol: true,
            data: data2,
            smooth:true,
            // itemStyle: {
            //     normal: {
            //         color: '#388BEB'
            //     }
            // },
            // lineStyle: {
            //     color: '#388BEB',
            //     type: 'solid',
            //     width: 0.1 * fontSize,
            //     // shadowColor: 'rgba(56,139,235, 0.5)',
            //     // shadowBlur: 5,
            //     // shadowOffsetY:-2
            // }
        },
        {
            name: '好爸爸',
            type: 'line',
            symbolSize: 0.2 * fontSize,
            showAllSymbol: true,
            data: data3,
            smooth:true,
            // itemStyle: {
            //     normal: {
            //         color: '#388BEB'
            //     }
            // },
            // lineStyle: {
            //     color: '#388BEB',
            //     type: 'solid',
            //     width: 0.1 * fontSize,
            //     // shadowColor: 'rgba(56,139,235, 0.5)',
            //     // shadowBlur: 5,
            //     // shadowOffsetY:-2
            // }
        },

    ]
};





























