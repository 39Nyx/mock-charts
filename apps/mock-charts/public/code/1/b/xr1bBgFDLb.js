var data = [{
    name: "aa",
    value: [10, 10]
}, {
    name: "bb",
    value: [10, 30]
}, {
    name: "cc",
    value: [10, 50]
}, {
    name: "dd",
    value: [30, 10]
}, {
    name: "ee",
    value: [30, 30]
}, {
    name: "ff",
    value: [30, 50]
}, {
    name: "gg",
    value: [50, 10]
}, {
    name: "hh",
    value: [50, 30]
}, {
    name: "ii",
    value: [70, 10]
}, {
    name: "jj",
    value: [70, 30]
}, {
    name: "kk",
    value: [70, 50]
}];
var links = [{
    source: 0,
    target: 1
}, {
    source: 0,
    target: 4
}, {
    source: 0,
    target: 5
}, {
    source: 1,
    target: 4
}, {
    source: 1,
    target: 6
}, {
    source: 4,
    target: 7
}, {
    source: 3,
    target: 8
}, {
    source: 4,
    target: 9
}, {
    source: 6,
    target: 10
}];

var colors = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];

function getColorPalette(i) {
    return colors[i];
}

option = {
    title: {
        text: '笛卡尔坐标系上的 Graph'
    },
    tooltip: {},
    xAxis: {
        show: false,
        // type : 'category',
        // boundaryGap : false,
        // data : axisData
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    dataRange: {
        min: 0,
        max: 100,
        y: '60%',
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua']
    },
    series: [{
        type: 'graph',
            layout: 'force',
            draggable: true,
        coordinateSystem: 'cartesian2d',
        symbolSize: 40,
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        data: data,
        links: links,
        itemStyle: {
            normal: {
                label: {
                    position: ['20%', '100%'],
                    textStyle: {
                        // color: 'black'
                    }
                }
            }
        },
        lineStyle: {
            normal: {
                color: '#a0a0a0',
                opacity: 1,
                width: 2,
                // curveness: 0.1
            }
        }
    }]
};