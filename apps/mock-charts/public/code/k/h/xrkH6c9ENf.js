option = {
    backgroundColor: '#131518',
    title: {
        text: ''
    },
            toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
    tooltip: {},
    legend: {
        
    },
    radar: {
        // shape: 'circle',
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        },
        name: {
            textStyle: {
                color: '#fff',
                fontSize:'14',
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '从业经验', },
           { name: '风格稳定性', max: 16000},
           { name: '业绩稳定性', max: 30000},
           { name: '抗风险能力', max: 38000},
           { name: '盈利能力', max: 25000}
        ],
        splitLine: {
            lineStyle: {
                color: [
                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                ].reverse()
            }
        },
        splitArea: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(238, 197, 102, 0.5)'
            }
        }
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        
        data : [
            {
                value : [4300, 10000, 28000, 35000, 14000, 19000],
                name : '预算分配（Allocated Budget）'
            },
             {
                value : [5000, 14000, 28000, 31000, 14000, 21000],
                name : '实际开销（Actual Spending）'
            }
        ]
    }]
};