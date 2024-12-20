option = {
    title: {
        text: ''
    },
    color: ['#5ad3b8', '#eb6877', '#7975ff'],
    tooltip: {
        trigger: 'axis',

    },
    legend: {
        data:['存货周转率','应收账款周转率','总资产周转率']
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            color: '#999',
            formatter: function (value, index) {
                return `${value}年`
            }
        },
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        data: ['2015','2016','2017','2018']
    },
    yAxis: {
        type: 'value',
        name: '百分率',
        nameTextStyle: {},
        min: 0,
        max: 100,
        splitNumber: 10,
        axisLabel: {
            formatter: '{value}%'
        },
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#f4f4f4'
            }
        },
        axisTick: {
            alignWithLabel: true,
            interval: 0
        }
    },
    series: [
        {
            name:'存货周转率',
            type:'line',
            smooth: true,
            data:[24, 18, 81, 64],
            lineStyle: {
                shadowColor: 'rgba(53, 179, 139, 0.57)',
                shadowBlur: 16,
                shadowOffsetY: 4
            }
        },
        {
            name:'应收账款周转率',
            type:'line',
            smooth: true,
            data:[50, 32, 20, 44],
            lineStyle: {
                shadowColor: 'rgba(255, 106, 106, 0.57)',
                shadowBlur: 16,
                shadowOffsetY: 4
            }
        },
        {
            name:'总资产周转率',
            smooth: true,
            type:'line',
            data:[10, 32, 30, 34],
            lineStyle: {
                shadowColor: 'rgba(98, 53, 179, 0.57)',
                shadowBlur: 16,
                shadowOffsetY: 4
            }
        }
    ]
};
