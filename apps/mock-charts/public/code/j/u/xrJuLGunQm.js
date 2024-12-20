myChart.showLoading();

var getData = (idx, len) => {
    var newData = {};
    newData.name = 'tree' + idx;
    var newChildren = [];
    for(var i = 0; i < len; i++) {
        var item = 'children' + idx + i;
        newChildren.push({ name: item});
    }
    newData.children = newChildren;
    return newData;
}

var data1 = getData(1, 50);
var data2 = getData(1, 50);

myChart.hideLoading();

myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [{
        type: 'tree',
        name: 'hhh',
        data: [data1],
        top: 0,
        left: '2%',
        bottom: 0,
        right: 0,
        width:'48%',
        height:'100%',
        symbolSize: 8,
        initialTreeDepth: 6,
        orient: 'RL',
        label: {
            normal: {
                position: 'bottom',
                verticalAlign: 'middle',
                align: 'right',
            }
        },
        leaves: {
            label: {
                normal: {
                    position: 'top',
                    verticalAlign: 'middle',
                    align: 'left',
                }
            }
        },
        expandAndCollapse: false,
        animationDuration: 550,
        animationDurationUpdate: 750
    }, {
        type: 'tree',
        name: 'hhh65',
        data: [data2],
        top: 0,
        left: '50%',
        bottom: 0,
        right: '2%',
        width: '48%',
        height: '100%',
        symbolSize: 8,
        initialTreeDepth: 6,
        label: {
            normal: {
                position: 'bottom',
                show: false,
                verticalAlign: 'middle',
                align: 'left',
            }
        },
        leaves: {
            label: {
                normal: {
                    position: 'top',
                    verticalAlign: 'middle',
                    align: 'right',
                }
            }
        },
        expandAndCollapse: false,
        animationDuration: 550,
        animationDurationUpdate: 750
    }]
});