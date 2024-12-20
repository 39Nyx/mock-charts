option = {
    media: [{
        option: {
            grid: {
                left: 0,
            },
            legend: {
                right: 0,
                bottom: 0,
                left: 500,
                orient: 'vertical'
            }
        }
    }],
    baseOption: {
        backgroundColor: '#8197ff',
        textStyle: {
            color: 'rgba(255, 255, 255, 0.5)'
        },

        xAxis: {
            position: {
                left: 0,
            },
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', {
                value: 'Sat',
                textStyle: {
                    fontSize: 15,
                    color: '#fff'
                }
            }],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            }

        },

        yAxis: {
            show: false,
            position: {
                left: 0,
            },
            "splitLine": {
                "show": false
            },
        },
        series: [{
            smooth: true,
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 200],
            symbolSize: 9,
            symbol: 'circle',
            "itemStyle": {
                "normal": {
                    "color": "#fff",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
        }, {
            name: '0',
            type: 'line',
            symbol: 'circle',
            symbolSize: 0.1,
            itemStyle: {
                normal: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            data: [200, 200, 200, 200, 200, 200, 200],

        }, {
            type: 'bar',
            barWidth: '1',
            data: [0, 0, 0, 0, 0, 0, 220],

        }]
    }
};