option = {
     backgroundColor: '#fff',
    title: {
        text: '历年注册企业/注销企业以及注册金额',
        left: '2%'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['超期数', '超期比例'],
        align: 'right',
        right: 40
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '20%',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            rotate: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                //fontFamily: "微软雅黑", 
                fontSize: 12
            }
        },

        data: [ '2013年', '2014年', '2015年', '2016年', '2017年']
    }],
    yAxis: [{
        type: 'value',
        name: '注册企业/注销企业',
        min: 0,
        axisLabel: {
            formatter: '{value} 家'
        }
    }, {
        type: 'value',
        name: '注册金额',
        min: 0,
        max: 120,
        interval: 20,
        axisLabel: {
            formatter: '{value} 亿'
        }
    }],
    series: [{
        name: '注册企业',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c} 家'
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                        offset: 0,
                        color: '#2af598'
                    }, {
                        offset: 1,
                        color: '#009efd'
                    }]
                ),
                barBorderRadius: 4
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                        offset: 0,
                        color: '#2af598'
                    }, {
                        offset: 1,
                        color: '#009efd'
                    }]
                ),
                barBorderRadius: 4
            }
        },

        data: [ '7700', '6300', '8900', '9900','12000' ]
    }, {
        name: '注销企业',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c} 家'
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                        offset: 0,
                        color: '#70F570'
                    }, {
                        offset: 1,
                        color: '#49C628'
                    }]
                ),
                barBorderRadius: 4
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                        offset: 0,
                        color: '#70F570'
                    }, {
                        offset: 1,
                        color: '#49C628'
                    }]
                ),
                barBorderRadius: 4
            }
        },

        data: ['707', '603', '309', '309','300']
    }, {
        name: '注册金额',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}亿'
            }
        },
        lineStyle: {
            normal: {
                width: 4,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        type: 'line',
        yAxisIndex: 1,
        data: [ '60', '67', '80', '98', '99' ]
    }]
};