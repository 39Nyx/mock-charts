option = {

    baseOption: {
        timeline: {
            top: 30,
            show: true,
            type: 'slider',
            axisType: 'category',
            currentIndex: 0, //0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
            autoPlay: false, //是否自动播放
            realtime: true, //拖动圆点的时候，是否实时更新视图。
            controlPosition: 'right',
            lineStyle: {
                show: false, //false 不显示轴线
            },
            controlStyle: { //控制按钮的样式
                show: false,
            },
            data: ['苍南县单次损失分布', '苍南县年总损失分布'],
        },
        tooltip: { //提示框组件
            trigger: 'axis',
            formatter: '{b}<br />{a0}: {c0}%',
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            textStyle: {
                color: '#FFFFFF',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            left: 50,
            right: 50,
            bottom: 80,
            top: 100,
            containLabel: true,
        },
        xAxis: [{
            type: 'category',
            data: ['小于0.1亿元', '0.1-0.5亿元', '0.5-1亿元', '1-2亿元', '2-5亿元', '5-10亿元', '10-20亿元', '20-25亿元', '大于25亿元'],
            axisLabel: { //坐标轴刻度标签的相关设置。
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                margin: 15,
                textStyle: {
                    color: '#000000',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    //fontSize: 15,
                }
            }
        }],

        yAxis: [{
            type: 'value',
            axisLabel: {
                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
                margin: 15,
                textStyle: {
                    color: '#000000',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                   // fontSize: 15
                },
                formatter: '{value} %'
            }
        }],
        series: [{
            name: '百分比',
            type: 'bar',
            itemStyle: {
                //通常情况下：
                normal: {　　　　　　　　　　　　 //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    color: function(params) {
                        var colorList = ['#008000', '#32CD32', '#BDB76B', '#FFD700', '#FFA500', '#FF4500', '#FF0000'];
                        return colorList[params.dataIndex];
                    }
                },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c0}%',

                    color: '#000000'
                }
            },
        }]
    },
    options: [{
            title: {
                text: '苍南县损失情况'
            },
            series: [{
                data: [0, 2, 5, 18, 42, 22, 9, 0.3, 0]
            }, ]
        },
        {
            series: [{
                data: [17, 0, 1, 6, 22, 26, 24, 4, 0]
            }, ]
        },
    ]
};