data = [81, 8, 2, 1, 8]
target_data = [85, 5, 5, 3, 2]
category = ['产品1', '产品2', '产品3', '产品4', '产品5']
data = [
    [2, 7, 3, 5, 6],
    [8, 20, 4, 9, 16]
]

colors = ["#4C72B0", "#55A868", "#C44E52", "#8172B2", "#CCB974", "#64B5CD"],
    deemph_colors = ['#8DA6CE', '#A0CFAB']

option1 = {
    title: [{
        text: '7/15-8/15时间段内，微信商城的回头客比例高于电商平台',
        left: 'left',
    }, {
        text: '来源：某公司电商平台和微信平台复购率统计',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 11
        },
        bottom: 15
    }],
    grid: {
        top: 85,
        left: 45,
        right: 150,
    },
    tooltip: {
        show: true,
        trigger: 'axis',
    },
    legend: {
        data: [{
            name: '电商',
            icon: 'circle'
        }, {
            name: '微信商城',
            icon: 'square'
        }],
        top: 30,
        left: 0
    },
    yAxis: {
        boundaryGap: false,
        data: category,
        inverse: true,
        splitLine: {
            show: true
        },
    },
    xAxis: {
        position: 'top',
        name: '回购比例',
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}%',
        }
    },
    series: [{
        name: '电商',
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 14,
        data: data[0],
        itemStyle: {
            normal: {
                color: colors[0]
            }
        },
    }, {
        name: '微信商城',
        type: 'scatter',
        symbol: 'rect',
        symbolSize: 14,
        data: data[1],
        itemStyle: {
            normal: {
                color: colors[1]
            }
        },
    }]
};

option = option1