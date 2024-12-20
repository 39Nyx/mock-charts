app.title = '堆叠柱状图鼠标悬浮显示颜色';

var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

for (var i = 0; i < 10; i++) {
    xAxisData.push('Class' + i);
    data1.push((Math.random() * 2).toFixed(2));
    data2.push(-Math.random().toFixed(2));
    data3.push((Math.random() * 5).toFixed(2));
    data4.push((Math.random() + 0.3).toFixed(2));
}
var cusColor = [ '#FF7F50','#CD2990','#00CC99','#B3EE3A']
var itemStyle = []
for (var i = 0;i<cusColor.length;i++){
    itemStyle.push(
    {normal: {
        color:'gray'
    },
    emphasis: {
        barBorderWidth: 1,
        color:cusColor[i]
    }}
)
    
}
option = {
    backgroundColor: '#eee',
    legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        align: 'left',
        left: 10
    },
    brush: {
        toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
        xAxisIndex: 0
    },
    toolbox: {
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {}
        }
    },
    tooltip: {trigger:'axis'},
    xAxis: {
        data: xAxisData,
        name: 'X Axis',
        silent: false,
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {
        inverse: true,
        splitArea: {show: false}
    },
    grid: {
        left: 100
    },
    series: [
        {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle[0],
            data: data1
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle[1],
            data: data2
        },
        {
            name: 'bar3',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle[2],
            data: data3
        },
        {
            name: 'bar4',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle[3],
            data: data4
        }
    ]
};

myChart.on('brushSelected', renderBrushed);

function renderBrushed(params) {
    var brushed = [];
    var brushComponent = params.batch[0];

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    }

    myChart.setOption({
        title: {
            backgroundColor: '#333',
            text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
            bottom: 0,
            right: 0,
            width: 100,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        }
    });
}