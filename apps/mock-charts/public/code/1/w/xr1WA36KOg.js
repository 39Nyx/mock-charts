option = {
    title: {
        text: '消费者效用最大化',
        textStyle: {
            fontSize: 25,
            fontFamily: '微软雅黑'
        },
        right: '50%'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['U1', 'U2', 'U3','预算线I'],
        top: '50%',
        right: '10%',
        textStyle: {
            fontSize: 15
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {},
    xAxis: {
        type: 'value',
        name: '商品2',
        nameTextStyle: {
            fontSize: 15,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: '商品1',
        nameTextStyle: {
            fontSize: 15,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
   
    series: [{
        name: 'U1',
        type: 'line',
        coordinateSystem: 'cartesian2d',
        data: [
    [0.2, 5],
    [0.3, 3.333333333],
    [0.4, 2.5],
    [0.5, 2],
    [0.6, 1.666666667],
    [0.7, 1.428571429],
    [0.8, 1.25],
    [0.9, 1.111111111],
    [1, 1],
    [1.1, 0.909090909],
    [1.2, 0.833333333],
    [1.3, 0.769230769],
    [1.4, 0.714285714],
    [1.5, 0.666666667],
    [1.6, 0.625],
    [1.7, 0.588235294],
    [1.8, 0.555555556],
    [1.9, 0.526315789],
    [2, 0.5],
    [2.1, 0.476190476],
    [2.2, 0.454545455],
    [2.3, 0.434782609],
    [2.4, 0.416666667],
    [2.5, 0.4],
    [2.6, 0.384615385],
    [2.7, 0.37037037],
    [2.8, 0.357142857],
    [2.9, 0.344827586],
    [3, 0.333333333],
    [3.1, 0.322580645],
    [3.2, 0.3125],
    [3.3, 0.303030303],
    [3.4, 0.294117647],
    [3.5, 0.285714286],
    [3.6, 0.277777778],
    [3.7, 0.27027027],
    [3.8, 0.263157895],
    [5,0.2]
    
]
    }, {
        name: 'U2',
        type: 'line',
        coordinateSystem: 'cartesian2d',
        data: [
    [1.2, 6],
    [1.3, 4.333333333],
    [1.4, 3.5],
    [1.5, 3],
    [1.6, 2.666666667],
    [1.7, 2.428571429],
    [1.8, 2.25],
    [1.9, 2.111111111],
    [2, 2],
    [2.1, 1.909090909],
    [2.2, 1.833333333],
    [2.3, 1.769230769],
    [2.4, 1.714285714],
    [2.5, 1.666666667],
    [2.6, 1.625],
    [2.7, 1.588235294],
    [2.8, 1.555555556],
    [2.9, 1.526315789],
    [3, 1.5],
    [3.1, 1.476190476],
    [3.2, 1.454545455],
    [3.3, 1.434782609],
    [3.4, 1.416666667],
    [3.5, 1.4],
    [3.6, 1.384615385],
    [3.7, 1.37037037],
    [3.8, 1.357142857],
    [3.9, 1.344827586],
    [4, 1.333333333],
    [4.1, 1.322580645],
    [4.2, 1.3125],
    [4.3, 1.303030303],
    [4.4, 1.294117647],
    [4.5, 1.285714286],
    [4.6, 1.277777778],
    [4.7, 1.27027027],
    [4.8, 1.263157895],
    [6,1.2]
]
    }, {
        name: 'U3',
        type: 'line',
        coordinateSystem: 'cartesian2d',
        data: [
    [2.2, 7],
    [2.3, 5.333333333],
    [2.4, 4.5],
    [2.5, 4],
    [2.6, 3.666666667],
    [2.7, 3.428571429],
    [2.8, 3.25],
    [2.9, 3.111111111],
    [3, 3],
    [3.1, 2.909090909],
    [3.2, 2.833333333],
    [3.3, 2.769230769],
    [3.4, 2.714285714],
    [3.5, 2.666666667],
    [3.6, 2.625],
    [3.7, 2.588235294],
    [3.8, 2.555555556],
    [3.9, 2.526315789],
    [4, 2.5],
    [4.1, 2.476190476],
    [4.2, 2.454545455],
    [4.3, 2.434782609],
    [4.4, 2.416666667],
    [4.5, 2.4],
    [4.6, 2.384615385],
    [4.7, 2.37037037],
    [4.8, 2.357142857],
    [4.9, 2.344827586],
    [5, 2.333333333],
    [5.1, 2.322580645],
    [5.2, 2.3125],
    [5.3, 2.303030303],
    [5.4, 2.294117647],
    [5.5, 2.285714286],
    [5.6, 2.277777778],
    [5.7, 2.27027027],
    [5.8, 2.263157895],
    [7,2.2]
]
    },
    {
        name: '预算线I',
        type: 'line',
        coordinateSystem: 'cartesian2d',
        data: [
    [0, 4],
    [0.2, 3.8],
    [0.4, 3.6],
    [0.6, 3.4],
    [0.8, 3.2],
    [1, 3],
    [1.2, 2.8],
    [1.4, 2.6],
    [1.6, 2.4],
    [1.8, 2.2],
    [2, 2],
    [2.2, 1.8],
    [2.4, 1.6],
    [2.6, 1.4],
    [2.8, 1.2],
    [3, 1],
    [3.2, 0.8],
    [3.4, 0.6],
    [3.6, 0.4],
    [3.8, 0.2],
    [4, 0]
]
    }]
};