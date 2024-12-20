option = {
    backgroundColor: '#001C69',
    title: {
        show: true,
        text: '全省超欠进度走势情况（批发）',
        x: 'center',
        textStyle: {
            fontSize: '180%',
            color: '#ffffff'
        }
    },
    legend: {
        show: true,
        bottom: '20px',
        data: [{
            name: '预算',
            // 强制设置图形为圆。
            icon: 'circle',
            textStyle: {
                color: '#ffffff'
            }
        }, {
            name: '实际',
            // 强制设置图形为圆。
            icon: 'circle',
            textStyle: {
                color: '#ffffff'
            }
        }]
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true //刻度线与标签对其
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ffffff'
                    //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        },
        //  改变x轴字体颜色和大小
        axisLabel: {
            textStyle: {
                color: '#ffffff'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        name: '销量',
        position: 'left',
        axisLabel: {
            formatter: '{value} t',
            textStyle: {
                color: '#ffffff'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ffffff'
                    //                            width:8,//这里是为了突出显示加上的，可以去掉
            }
        }
    }],
    series: [{
        type: 'line',
        name: '预算',
        yAxisIndex: 0,
        
        itemStyle: {
            normal: {
                color: '#FE7E46',
                width: 2,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        smooth: true,
        data: [22, 23, 33, 34, 36, 38, 39, 41, 42, 43, 32, 44]
    }, {
        type: 'bar',
        name: '实际',
        yAxisIndex: 0,
        barMaxWidth: 30,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                    offset: 1, // 0% 处的颜色
                    color: 'rgba(250, 185, 0, 0.3)'
                }, {
                    offset: 0, // 80% 处的颜色
                    color: 'rgba(250, 185, 0, 1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                shadowBlur: 10, //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                shadowOffsetY: 10
            }
        },
        data: [22, 23, 33, 34, 36, 38, 39, 41, 42, 43, 32, 44]
    }]
};