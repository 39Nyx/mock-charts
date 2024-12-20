option = {
    color: ['#e4e530', '#00EAB5', '#66d2f0', '#c952be'],
    backgroundColor: '#eee',
    calculable: false,
    tooltip: {
        trigger: 'axris',
        position: ['85%', '0'],
        triggerOn: 'click',
        alwaysShowContent: true,
        backgroundColor: 'rgba(0,0,0,0)',
        textStyle: {
            color: 'rgba(44,44,44,0.7)',
            fontWeight: 400,
            fontSize: 16
        }
    },
    legend: {
        selected: {
            'KCAL': true,
            'POUNDS': false,
            'WORKOUTS': true,
            'DAYS': false
        },
        data: [{
            name: 'KCAL',
            icon: 'circle'
        }, {
            name: 'POUNDS',
            icon: 'circle'
        }, {
            name: 'WORKOUTS',
            icon: 'circle'
        }, {
            name: 'DAYS',
            icon: 'circle'
        }]
    },
    grid: {
        show: false,
        containLabel: false,
        left: '0',
        right: '0',
        top: '50%',
        bottom: '0'
    },
    xAxis: [{
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }],
    yAxis: [{
        type: 'value',
        position: 'left',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: 'KCAL',
        type: 'line',
        showSymbol: false,
        areaStyle: {
            normal: {
                opacity: 0.9
            }
        },
        lineStyle: {
            normal: {
                width: 0
            }
        },
        data: [100, 200, 400, 250, 500, 275, 150, 450, 200, 180, 285, 100],
        smooth: true
    }, {
        name: 'POUNDS',
        type: 'line',
        showSymbol: false,
        areaStyle: {
            normal: {
                opacity: 0.9
            }
        },
        lineStyle: {
            normal: {
                width: 0
            }
        },
        data: [120, 275, 500, 200, 450, 330, 180, 300, 360, 254, 425, 120],
        smooth: true
    }, {
        name: 'WORKOUTS',
        type: 'line',
        showSymbol: false,
        areaStyle: {
            normal: {
                opacity: 0.9
            }
        },
        lineStyle: {
            normal: {
                width: 0
            }
        },
        data: [80, 175, 480, 200, 450, 300, 120, 290, 450, 300, 125, 100],
        smooth: true
    }, {
        name: 'DAYS',
        type: 'line',
        showSymbol: false,
        areaStyle: {
            normal: {
                opacity: 0.9
            }
        },
        lineStyle: {
            normal: {
                width: 0
            }
        },
        data: [160, 390, 511, 412, 390, 180, 510, 622, 425, 300, 390, 160],
        smooth: true
    }]
};