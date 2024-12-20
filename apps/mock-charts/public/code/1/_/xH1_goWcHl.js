option = {
    title: {
        text: '勒布朗·詹姆斯近5场得分数据表\n(截至2017年1月4日)',
        textStyle: {
            color: '#fff',
            fontWeight: 'lighter'
        },
        left: 'center',
        backgroundColor: 'rgba(0,0,255,0.2)',
        shadowColor: 'rgba(0,0,255,1)',
        shadowBlur: 20
    },
    xAxis: {
        type: 'category',
        name: '比赛日期',
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 15
        },
        data: ['12/24\n(篮网-骑士)', '12/26\n(勇士-骑士)',
            '12/30\n(凯尔特人-骑士)', '1/1\n(骑士-黄蜂)',
            '1/3\n(鹈鹕-骑士)'
        ],
        axisLine: {
            onZero: false,
            lineStyle: {
                width: 3
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontWeight: 'bold'
            }
        },
        offset: 1
    },
    yAxis: {
        name: '单\n场\n得\n分',
        nameLocation: 'middle',
        nameGap: 45,
        nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 15
        },
        axisTick: {
            show: false
        },
        nameRotate: 0,
        axisLine: {
            onZero: false,
            lineStyle: {
                width: 3
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontWeight: 'bold'
            },
            formatter: '{value}分'
        },
    },
    series: [{
        type: 'bar',
        data: [19, 31, 23, 32, 26],
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [
                        '#c23531', '#2f4554', '#61a0a8',
                        '#d48265', '#91c7ae', '#749f83',
                        '#ca8622', '#bda29a', '#6e7074',
                        '#546570', '#c4ccd3'
                    ];
                    return colorList[params.dataIndex]
                }
            }
        },
        barMaxWidth: '40px',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}分'
            }
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: '得分:{c0}分'
    }
};