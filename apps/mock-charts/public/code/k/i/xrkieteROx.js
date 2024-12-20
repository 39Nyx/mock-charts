option = {
    title: {
        text: '工单量趋势'
    },
    tooltip: {
        trigger: 'axis',

        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },

    },

    legend: {
        data: ['PV', 'UV']
    },
    xAxis: [{
        type: 'category',
        data: ['1周', '2周', '3周', '4周', '5周', '6周', '7周', '8周', '9周', '10周', '11周', '12周']
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
            formatter: '{value} 个'
        }
    }],
    series: [{
            name: 'PV',
            type:'line',
            data: [31, 34, 48, 57, 39, 21, 13, 12, 14, 36, 42, 49],
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
        }, {
            name: 'UV',
            type:'line',
            data: [40, 54, 58, 37, 31, 63, 34, 37, 48, 51, 42, 49],
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
        }

    ]
};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}