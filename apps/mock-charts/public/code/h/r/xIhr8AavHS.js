const dataArr = 500;
const dataX = 1000;
const height1 = { value: 800 };
option = {
    backgroundColor: '#031f45',
    /** 标题*/
    title: [
        {
            text: '{val|' + 999999 + '}\n{name|' + '毛利额' + '}{unit|（' + '元' + '）}',
            bottom: '32%',
            left: 'center',
            textStyle: {
                rich: {
                    val: {
                        fontSize: 24,
                        color: '#E5E5E5',
                        padding: [10, 0],
                    },
                    name: {
                        fontSize: 18,
                        color: '#E5E5E5',
                    },
                    unit: {
                        fontSize: 14,
                        color: '#DCCC5F',
                    },
                },
            },
            triggerEvent: true,
        },
    ],

    /** 关闭必图例*/
    legend: {
        show: false,
    },
    series: [
        {
            name: '最外部进度条',
            type: 'gauge',
            radius: '93%',
            splitNumber: 15,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            1,
                            {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#032347', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.5,
                                        color: '#0B8BAA', // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#03FCF3', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        ],
                    ],
                    width: 12,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 30,
                lineStyle: {
                    color: '#031f45',
                    width: 3,
                },
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                // 标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '外二红线',
            type: 'gauge',
            radius: '84.5%',
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / dataX, '#031f45'],
                        [1, '#B74443'],
                    ],
                    width: 4,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                // 标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '刻度尺',
            type: 'gauge',
            radius: '81%',
            splitNumber: 10, // 刻度数量
            min: 0, // 最小刻度
            max: dataX, // 最大刻度
            // 仪表盘轴线相关配置
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            1,
                            {
                                type: 'radial',
                                x: 0.5,
                                y: 0.6,
                                r: 0.6,
                                colorStops: [
                                    {
                                        offset: 0.85,
                                        color: '#031F46', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.93,
                                        color: '#086989', // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: '#12D7EF', // 100% 处的颜色
                                    },
                                ],
                            },
                        ],
                    ],
                    width: 500,
                },
            },
            /** 分隔线样式*/
            splitLine: {
                show: true,
                length: 14,
                lineStyle: {
                    width: 3,
                    color: '#12E5FE', // 用颜色渐变函数不起作用
                },
            },
            /** 刻度线*/
            axisTick: {
                show: true,
                splitNumber: 20,
                lineStyle: {
                    color: '#12E5FE', // 用颜色渐变函数不起作用
                    width: 1,
                },
                length: 5,
            },
            /** 刻度标签*/
            axisLabel: {
                distance: 2,
                color: '#CEF3FE',
            },
            detail: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '渐变进度',
            type: 'gauge',
            radius: '80%',
            splitNumber: 15,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            dataArr / dataX,
                            {
                                type: 'linear',
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(60,207,223,0)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.9,
                                        color: 'rgba(60,207,223,0.5)', // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(60,207,223,0.9)', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        ],
                    ],
                    width: 30,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                // 标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '内层带指针',
            type: 'gauge',
            radius: '61%',
            splitNumber: 10, // 刻度数量
            min: 0, // 最小刻度
            max: dataX, // 最大刻度
            // 仪表盘轴线相关配置
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            1,
                            {
                                type: 'radial',
                                x: 0.5,
                                y: 0.59,
                                r: 0.6,
                                colorStops: [
                                    {
                                        offset: 0.72,
                                        color: '#032046',
                                    },
                                    {
                                        offset: 0.94,
                                        color: '#086989',
                                    },
                                    {
                                        offset: 0.98,
                                        color: '#0FAFCB',
                                    },
                                    {
                                        offset: 1,
                                        color: '#0EA4C1',
                                    },
                                ],
                            },
                        ],
                    ],
                    width: 1000,
                },
            },
            /** 分隔线样式*/
            splitLine: {
                show: false,
            },
            /** 刻度线*/
            axisTick: {
                show: false,
            },
            /** 刻度标签*/
            axisLabel: {
                show: false,
            },
            /** 仪表盘指针*/
            pointer: {
                show: true,
                length: '95%',
                width: 5, // 指针粗细
            },
            /** 仪表盘指针样式*/
            itemStyle: {
                color: '#12E5FF',
            },
            data: [
                {
                    value: dataArr,
                },
            ],
            detail: {
                show: false,
            },
        },
    ],
    graphic: {
        elements: [
            {
                type: 'line',
                z: 4,
                style: {
                    fill: '#075173',
                    stroke: '#075173',
                    lineWidth: 2,
                    shadowBlur: 15,
                    shadowOffsetX: 0,
                    shadowOffsetY: -4,
                    shadowColor: '#13E6FF',
                },
                shape: {
                    x1: height1.value * 0.57,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                },
                left: 'center',
                bottom: '21%',
                silent: true,
            },
            {
                type: 'line',
                z: 4,
                style: {
                    fill: '#075173',
                    stroke: '#075173',
                    lineWidth: 2,
                    shadowBlur: 15,
                    shadowOffsetX: 0,
                    shadowOffsetY: -4,
                    shadowColor: '#13E6FF',
                },
                shape: {
                    x1: height1.value * 0.43,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                },
                left: 'center',
                bottom: '28.5%',
                silent: true,
            },
        ],
    },
};
