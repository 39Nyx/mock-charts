app.title = '随便玩玩儿,嘻嘻';

var red = '#F00';
var orange = '#F60';
var yellow = '#FF0';
var green = '#0C0';
var cyan = '#17D4DE';
var blue = '#2616D9';
var purple = '#B013DC';
var white = '#EFEFEF';
var sky = '#88FFFF';
var brown = '#D2691E';

var duration = 5000;

option = {
    title: {
        text: '彩虹',
        subtext: '作者: 断浪',
    },
    backgroundColor: '#88FFFF',
    series: [
        //红
        {
            type: 'pie',
            animationDuration: duration,
            itemStyle: {
                color: function(data) {
                    return data.dataIndex == 1 ? sky : red;
                }
            },
            legendHoverLink: false, //是否联动高亮 defult:true
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            hoverOffset: 0, //高亮时的偏移区域 defult:10
            center: ['50%', '70%'],
            radius: [280, 250],
            startAngle: 180, //起始角度
            data: [{
                    name: 'red',
                    value: 10
                },
                {
                    name: 'land1',
                    value: 10
                }
            ]
        },
        //橙
        {
            type: 'pie',
            animationDuration: duration,
            itemStyle: {
                color: function(data) {
                    return data.dataIndex == 1 ? sky : orange;
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            legendHoverLink: false, //是否联动高亮 defult:true
            hoverOffset: 0, //高亮时的偏移区域 defult:10
            center: ['50%', '70%'],
            radius: [250, 220],
            startAngle: 180, //起始角度
            data: [{
                    name: 'orange',
                    value: 10
                },
                {
                    name: 'land2',
                    value: 10
                }
            ]
        },
        //黄
        {
            type: 'pie',
            animationDuration: duration,
            itemStyle: {
                color: function(data) {
                    return data.dataIndex == 1 ? sky : yellow;
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            legendHoverLink: false, //是否联动高亮 defult:true
            hoverOffset: 0, //高亮时的偏移区域 defult:10
            center: ['50%', '70%'],
            radius: [220, 190],
            startAngle: 180, //起始角度
            data: [{
                    name: 'yellow',
                    value: 10
                },
                {
                    name: 'land3',
                    value: 10
                }
            ]
        },
        //绿
        {
            type: 'pie',
            animationDuration: duration,
            itemStyle: {
                color: function(data) {
                    return data.dataIndex == 1 ? sky : green;
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            legendHoverLink: false, //是否联动高亮 defult:true
            hoverOffset: 0, //高亮时的偏移区域 defult:10
            center: ['50%', '70%'],
            radius: [190, 160],
            startAngle: 180, //起始角度
            data: [{
                    name: 'green',
                    value: 10
                },
                {
                    name: 'land4',
                    value: 10
                }
            ]
        },
        //青
        {
            type: 'pie',
            animationDuration: duration,
            itemStyle: {
                color: function(data) {
                    return data.dataIndex == 1 ? sky : cyan;
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            legendHoverLink: false, //是否联动高亮 defult:true
            hoverOffset: 0, //高亮时的偏移区域 defult:10
            center: ['50%', '70%'],
            radius: [160, 130],
            startAngle: 180, //起始角度
            data: [{
                    name: 'green',
                    value: 10
                },
                {
                    name: 'land5',
                    value: 10
                }
            ]
        },
        //蓝
        {
            type: 'pie',
            animationDuration: duration,
            itemStyle: {
                color: function(data) {
                    return data.dataIndex == 1 ? sky : blue;
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            legendHoverLink: false, //是否联动高亮 defult:true
            hoverOffset: 0, //高亮时的偏移区域 defult:10
            center: ['50%', '70%'],
            radius: [130, 100],
            startAngle: 180, //起始角度
            data: [{
                    name: 'blue',
                    value: 10
                },
                {
                    name: 'land6',
                    value: 10
                }
            ]
        },
        //紫
        {
            type: 'pie',
            animationDuration: duration,
            itemStyle: {
                color: function(data) {
                    return data.dataIndex == 1 ? sky : purple;
                }
            },
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                show: false
            },
            legendHoverLink: false, //是否联动高亮 defult:true
            hoverOffset: 0, //高亮时的偏移区域 defult:10
            center: ['50%', '70%'],
            radius: [100, 70],
            startAngle: 180, //起始角度
            data: [{
                    name: 'purple',
                    value: 10
                },
                {
                    name: 'land7',
                    value: 10
                }
            ]
        },
    ],
};