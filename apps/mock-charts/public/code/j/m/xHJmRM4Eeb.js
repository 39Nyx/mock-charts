var symbolSize = 10;
var categoryData = [];
addXData(10);
var data = [23, 55, 73, 23];

option = {
    title: [{
        text: 'Generate Data'
    }],
    toolbox: {
        itemSize: 30,
        right: 30,
        feature: {
            magicType: {
                type: ['line', 'bar']
            },
            myAddCategories: {
                show: true,
                title: 'Extend X Axis',
                icon: 'path://M10,10 L30,10 M20,0 L20,20',
                onclick: addX
            },
            myBack: {
                show: true,
                title: 'Back',
                icon: 'path://M10,10 L15,0 L40,0 L40,20 L15,20 z M20,5 L33,15 M20,15 L33,5',
                onclick: removeLast
            }
        }  
    },
    legend: {
        data: ['Hover me see data ~'],
        tooltip: {
            show: true,
            formatter: function () {
                return JSON.stringify(data);
            }
        }
    },
    tooltip: {
        enterable: true,
        extraCssText: 'user-select:all;max-width:300px;white-space:normal;word-break:break-all;word-wrap:break-word;',
        position: {
            top: 30,
            left: 'center'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: 100,
        containLabel: true
    },
    xAxis: {
        boundaryGap: false,
        data: categoryData
    },
    yAxis: {
        min: 0,
        max: 80,
        type: 'value',
        axisLine: {onZero: false},
        axisPointer: {
            show: true,
            triggerTooltip: false,
            lineStyle: {
                type: 'dashed'
            }
        }
    },
    series: [
        {
            id: 'a',
            name: 'Hover me see data ~',
            type: 'line',
            smooth: true,
            symbolSize: symbolSize,
            label: {
                emphasis: {
                    show: true
                }
            },
            tooltip: {
                show: false
            },
            data: data
        }
    ]
};

var zr = myChart.getZr();


zr.on('click', function (params) {
    add([params.offsetX, params.offsetY]);
});

zr.on('mousemove', function (params) {
    var pointInPixel = [params.offsetX, params.offsetY];
    zr.setCursorStyle(myChart.containPixel('grid', pointInPixel) ? 'copy' : 'default');
});


function add(pointInPixel) {
    var pointInGrid = myChart.convertFromPixel('grid', pointInPixel);

    if (myChart.containPixel('grid', pointInPixel)) {
        data.push(+pointInGrid[1].toFixed(2));
        refresh();
    }
}

function removeLast() {
    if (data.length) {
        data.pop();
        refresh();
    }
}

function addX() {
    addXData(10);
    refresh();
}

function addXData(count) {
    for (var i = 0; i < count; i++) {
        categoryData.push('x' + i);
    }
}

function refresh() {
    myChart.setOption({
        xAxis: {
            data: categoryData
        },
        series: [{
            id: 'a',
            data: data
        }]
    });
}