 var option = {
        backgroundColor: '#1C2129', //画布背景
        title: {
            text: '延\n误\n时\n间\n(秒)',
            x: "10",
            y: "80",
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        legend: {
            top: 20,
            textStyle: {
            color: "#fff",
        },
        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ["西进口右转","北进口直行","南进口直行",],
            axisTick: { //---坐标轴 刻度
                show: true, //---是否显示
            },
            axisLine: { //---坐标轴 轴线
                show: true, //---是否显示
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    type: 'solid',
                },
            },
            axisLabel: {//X轴文字
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                },
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {//分割线
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {//Y轴刻度值
                formatter: '{value}',
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                },
            },
            axisLine: { //---坐标轴 轴线
                show: false, //---是否显示
            },
        },
        series: [{
            name: '原方案',
            type: 'bar',
            data: [3, 7,4],
            barWidth: 10,
            barGap: 3, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角
            itemStyle: {
                normal: {
                    color: "#446ACF",
                }
            },
        }, {
            name: '建议方案',
            type: 'bar',
            data: [6, 2,5],
            barWidth: 10, //柱图宽度
            itemStyle: {
                normal: { //设置颜色的渐变
                    color: "#3DB34D",
                }
            },
        }]
    };