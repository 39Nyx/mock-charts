const colors = ['#5793f3', '#5793f3', '#d14a61', '#d14a61', '#675bba', '#339a2b', '#F96D00', '#971549'];
option = {
    color: colors,
    title: {
        text: '17/16栋单价分析',
        subtext: '图表中为更好展示,单价均做了 -6000元 处理,可单击顶部图例切换显示对比'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['17-C', '16-C', '17-B2-2', '16-B2-2', '17-B2-3', '16-B2-3', '17-B1', '16-B1', '17-A-5', '16-A-5', '17-A-6', '16-A-6'],
        selected: {
            '16-C': false,
            '16-B2-2': false,
            '16-B2-3': false,
            '16-B1': false,
            '16-A-5': false,
            '16-A-6': false
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34'],
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}元'
        }
    }],

    series: [{
            "name": "17-C",
            "type": "line",
            "data": [1590, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1000, 1000, 1000, 1000, 1000, 880],
            markArea: {
                data: [
                    [{
                        name: '中层',
                        xAxis: '11'
                    }, {
                        xAxis: '19'
                    }],
                    [{
                        name: '高层',
                        xAxis: '29'
                    }, {
                        xAxis: '34'
                    }]
                ]
            }
        }, {
            "name": "16-C",
            "type": "line",
            "data": [910, 910, 910, 910, 910, 910, 910, 910, 910, 1110, 1110, 1110, 1110, 1110, 1110, 1110, 1110, 1110, 910, 910, 910, 910, 910, 910, 910, 910, 910, 820, 820, 820, 820, 820, 700]
        }, {
            "name": "17-B2-2",
            "type": "line",
            "data": [1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1390, 1390, 1390, 1390, 1390, 1390, 1390, 1390, 1390, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1100, 1100, 1100, 1100, 1100, 980]
        }, {
            "name": "16-B2-2",
            "type": "line",
            "data": [1110, 1110, 1110, 1110, 1110, 1110, 1110, 1110, 1110, 1310, 1310, 1310, 1310, 1310, 1310, 1310, 1310, 1310, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1110, 1110, 1110, 1110, 1110, 900]
        }, {
            "name": "17-B2-3",
            "type": "line",
            "data": [1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1000, 1000, 1000, 1000, 1000, 880]
        }, {
            "name": "16-B2-3",
            "type": "line",
            "data": [1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1360, 1360, 1360, 1360, 1360, 1360, 1360, 1360, 1360, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1160, 1070, 1070, 1070, 1070, 1070, 950]
        }, {
            "name": "17-B1",
            "type": "line",
            "data": [1290, 490, 490, 490, 490, 490, 490, 490, 490, 690, 690, 690, 690, 690, 690, 690, 690, 690, 490, 490, 490, 490, 490, 490, 490, 490, 490, 400, 400, 400, 400, 400, 350]
        }, {
            "name": "16-B1",
            "type": "line",
            "data": [610, 610, 610, 610, 610, 610, 610, 610, 610, 810, 810, 810, 810, 810, 810, 810, 810, 810, 610, 610, 610, 610, 610, 610, 610, 610, 610, 520, 520, 520, 520, 520, 420]
        }, {
            "name": "17-A-5",
            "type": "line",
            "data": [1690, 890, 890, 890, 890, 890, 890, 890, 890, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 890, 890, 890, 890, 890, 890, 890, 890, 890, 800, 800, 800, 800, 800, 680]
        }, {
            "name": "16-A-5",
            "type": "line",
            "data": [810, 810, 810, 810, 810, 810, 810, 810, 810, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 810, 810, 810, 810, 810, 810, 810, 810, 810, 720, 720, 720, 720, 720, 600]
        }, {
            "name": "17-A-6",
            "type": "line",
            "data": [1390, 890, 890, 890, 890, 890, 890, 890, 890, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 1090, 890, 890, 890, 890, 890, 890, 890, 890, 890, 800, 800, 800, 800, 800, 680]
        },




        {
            "name": "16-A-6",
            "type": "line",
            "data": [810, 810, 810, 810, 810, 810, 810, 810, 810, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 1010, 810, 810, 810, 810, 810, 810, 810, 810, 810, 720, 720, 720, 720, 720, 600]
        }
    ]
};