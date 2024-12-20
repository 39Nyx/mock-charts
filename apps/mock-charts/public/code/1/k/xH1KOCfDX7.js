var colorArray = [{
        top: 'rgba(16,137,231,1)', //红shen
        bottom: 'rgba(16,137,231, 0.7)'
    },
    {
        top: 'rgba(245,117,116,1)', //黄
        bottom: 'rgba(245,117,116, 0.7)'
    }, {
        top: 'rgba(85,208,223,1)', //绿
        bottom: 'rgba(85,208,223, 0.7)'
    },
    {
        top: 'rgba(250,180,72,1)', //蓝
        bottom: 'rgba(250,180,72, 0.7)'
    }, {
        top: 'rgba(139,120,247,1)', //深蓝
        bottom: 'rgba(139,120,247, 0.7)'
    },
    {
        top: 'rgba(215,47,215,1)', //粉
        bottom: 'rgba(215,47,215, 0.7)'
    }
];
var option = {
    grid: {
        top: '0',
        left: '0%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: true,
                length: 5,

            },
            inverse: 'true', //排序
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                align: 'right',
                color: '#000',
                fontSize: 15
            },
            data: ['太原人本文化科技有限公司', '太原市交通运输局', '太原市残疾人联合会', '太原市报社', '太原市司法局']
        }

    ],
    series: [{
            name: '人数',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        color: '#757575'
                    },
                    position: 'right',
                    formatter: '{c}'
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius: 88,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [1330, 1619, 1277, 1700, 2550]
        }

    ]
};