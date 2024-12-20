option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F", "#16ce16", "#ce15bb"],
    tooltip: {},
    xAxis: {
        show: false
    },
    yAxis: {
        show: false
    },
    legend: {
        data: ['2级', '3级', '4级', '5级'],

    },
    radar: {
        // shape: 'circle',
        indicator: [{
                name: '路径点数(max:3000)',
                max: 3000
            },
            {
                name: '有效trip百分比(max:100%)',
                max: 1
            },
            {
                name: '有效点数<=5的trip百分比(max:100%)',
                max: 1
            },
            {
                name: '包含距离过高相邻点的trip百分比(max:100%)',
                max: 1
            },
            {
                name: '包含速度过快相邻点的trip百分比(max:100%)',
                max: 1
            },
            {
                name: '包含速度过慢相邻点的trip百分比(max:100%)',
                max: 1
            }
        ]
    },
    series: [{
        name: '各级bike_id骑行路径指标对比',
        type: 'radar',
        data: [{
                value: [2661.363636, 0.4764, 0.1418, 0.5360, 0.2099, 0.9021],
                // name: '预算'
            },
            {
                value: [2684.181818, 0.4164, 0.1364, 0.6041, 0.2928, 0.9054],
                // name: '开销'
            },
            {
                value: [1217.8, 0.1380, 0.5800, 0.8023, 0.1257, 0.4735],
                // name: '开销'
            },
            {
                value: [160.7272727, 0.0159, 0.7682, 0.9031, 0.1854, 0.2942],
                // name: '开销'
            }
        ]
    }, {
        type: 'line',
        name: '2级',
        data: [],
        itemStyle: {
            normal: {
                color: '#37A2DA'
            }
        }
    }, {
        type: 'line',
        data: [],
        name: '3级',
        itemStyle: {
            normal: {
                color: '#FF9F7F'
            }
        }
    }, {
        type: 'line',
        data: [],
        name: '4级',
        itemStyle: {
            normal: {
                color: "#16ce16"
            }
        }
    }, {
        type: 'line',
        data: [],
        name: '5级',
        itemStyle: {
            normal: {
                color: "#ce15bb"
            }
        }
    }]
};