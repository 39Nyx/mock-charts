option = {
    backgroundColor: '#001C69',
    textStyle: {
        // fontSize: '180%',
        align: 'center',
        color: '#ffffff',
    },
    title: {
        text: '全省物资采购走势情况',
        x: 'center',
        textStyle: {
            fontSize: '150%',
            color: '#ffffff',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
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
            textStyle: {}
        },
        data: ['11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
    }],
    yAxis: [{
        type: 'value',
        name: '销量',
        position: 'left',
        axisLabel: {
            formatter: '{value} t',
            textStyle: {}
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ffffff'
                    //width:8,//这里是为了突出显示加上的，可以去掉
            }
        },
        axisTick: {
            alignWithLabel: true
        }
    }],
    series: [{
            name: '采购量',
            type: 'bar',
            barWidth: '40%',
            data: [100, 135, 150, 140, 120, 135, 145, 115, 105, 98, 95, 110]
        },

    ],
    label: {
        normal: {
            show: true,
            position: 'top',
            formatter: '{c}'
        }
    },
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 153,0, 1)'
            }, {
                offset: 1,
                color: 'rgba(255, 153,0, 0.3)'
            }]),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
        }
    }
};