deemph_color = 'rgb(165,165,165)'
emph_color = 'rgb(79,129,189)'
height = 300
width = 500
bar_category_gap = '28%'
colors = ['#1790CF', '#1BB2D8', '#99D2DD', '#88B0BB', '#1C7099'];
data = [
    [4, 2, 2.4, 1.7],]
categories = ['好奇', '妈咪宝贝', '帮宝适', '花王', ];
backgroundColor = 'rgb(255,255,255)';
axisColor = '#B1B1B1';
labelColor = '#333'

option1 = {
    grid: {
        //width: width,
        // height: height
        // left: '0',
        // containLabel: true,
        // height:height,
    },
    legend: {
        bottom: '10',
        data: ['价格相关差评/该品牌总评论数'],
        icon: 'square'
    },
    backgroundColor: backgroundColor,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        data: categories,
        axisLine: {
            lineStyle: {
                color: axisColor,
                width: 2,
            },
        },
        axisLabel: {
            textStyle: {
                color: labelColor,
            }
        },
    }],
    yAxis: [{
        name: '差评占比',
        nameLocation: 'middle',
        nameGap: 35,
        nameTextStyle: {
            color: labelColor,
        },
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                color: labelColor,
            }
        },
        axisLine: {
            lineStyle: {
                color: axisColor,
            },
        },
    }, ],
    series: [{
        name: '价格相关差评/该品牌总评论数',
        type: 'bar',
        barCategoryGap: bar_category_gap,
        data: data,
        itemStyle: {
            normal: {
                color: colors[0]
            }
        },
    }, ]
};


option = option1