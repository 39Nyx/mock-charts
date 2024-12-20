option = {
    color: ['#F9A897'],
    barWidth: '18px',
    backgroundColor: '#fff',
    title: {
        text: '供应商top10',
        textStyle: {
            color: '#222',
            fontWeight: 'normal',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: '#fff',
        extraCssText: 'box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);',
        textStyle: {
            color: "#333",
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            rotate: '-20'
        }

    },
    yAxis: {
        type: 'category',
        inverse: true,
        offset: 220,
        axisLabel: {
            formatter: function(name, index) {
                var val
                if (index < 3) {
                    a = '{a|' + (index + 1) + '}' + echarts.format.truncateText(name, 200, '10px Microsoft Yahei', '…');
                } else {
                    a = '{b|' + (index + 1) + '}' + echarts.format.truncateText(name, 200, '10px Microsoft Yahei', '…');
                }
                return a
            },
            align: 'left',
            color: '#4D5658',
            padding: [5, 5, 5, 10],
            rich: {
                a: {
                    color: '#fff',
                    backgroundColor: '#FF8E42',
                    width: 30,
                    height: 17,
                    fontSize:10,
                    align: 'center',
                    borderRadius: 10,
                    lineHeight: 17,
                },
                b: {
                    width: 30,
                    height: 17,
                    margin: 10,
                    fontSize:12,
                    align: 'center',
                    borderRadius: 10,
                    lineHeight: 17,
                }
            },

        },
        data: [
            '那时候车马慢，一生只够爱一人',
            '从前车马很慢，书信很远，一生只够爱一个人',
            '算你这的歌我也不会听',
            '算你这么说的歌我也不会听',
            '就只看了你一眼，就已确定了永远',
            'Access-Control-Allow-Origin',
            '123就只看了你一眼，就已确定了永远',
            '就只看了你一眼，就已确定了永远333',
            '听忠言 摒逆语 树威严 宝剑斫书案'
        ]

    },
    series: [{
        type: 'bar',
        data: [500, 450, 360, 320, 290, 200, 160,100,80]
    }]
};
myChart.setOption(option, true);