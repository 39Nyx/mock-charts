data = [81, 8, 2, 1, 8]
category = ['5星', '4星', '3星', '2星', '1星']
target_data = [85, 5, 5, 3, 2]
colors = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974", "#64B5CD"],
    deemph_colors = ['#8DA6CE', '#A0CFAB']
bar_category_gap = '30%'

option1 = {
    title: [{
        text: '在京东交易数据上，三星的用户评分略低于市场平均水平',
        left: 'left',
    }, {
        text: '来源：京东用户评论数据',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 11
        },
        bottom: 15
    }, {
        text: '各评分占比',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12
        },
        top: 55
    }],
    grid: {
        top: 85,
        left: 45,
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        showDelay: 0,
        formatter: '{a0}: {c0}<br />{a1}: {c1}',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: [{
            name: '三星',
            icon: 'rect'
        }, {
            name: '市场平均水平',
            icon: 'line'
        }],
        top: 30,
        left: 0
    },
    xAxis: {
        boundaryGap: true,
        data: category,
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}%'
        }
    },
    series: [{
        name: '三星',
        type: 'bar',
        data: data,
        barCategoryGap: bar_category_gap,
        itemStyle: {
            normal: {
                color: colors[0]
            }
        },
    }, {
        name: '市场平均水平',
        type: 'scatter',
        symbol: 'rect',
        silent: true,
        symbolSize: [40, 2],
        data: target_data,
        itemStyle: {
            normal: {
                color: '#000'
            }
        },
    }]
};

option = option1