app.title = '车轮图';
myChart.showLoading();
option = {

    color: ['#FC0790', '#065AF8', '#6BE508', '#6D06D1', '#F93C05', '#CB0C11'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'left',
        data: ['百度', '搜狐', '爱奇艺', '新浪', '雅虎', '网易']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['10%', '20%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'top'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 335,
            name: '百度'
        }, {
            value: 310,
            name: '搜狐'
        }, {
            value: 234,
            name: '爱奇艺'
        }]
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'top'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 305,
            name: '新浪'
        }, {
            value: 340,
            name: '雅虎'
        }, {
            value: 234,
            name: '网易'
        }]
    }]
};

function refreshData(data, i) {
    myChart.hideLoading();
    option.series[i].data = data
    myChart.setOption(option);
};
setInterval(function() {
    var legnedLength = option.legend.data.length;
    var legneds = new Array();
    var num = 0;
    var obj;
    for (var i = 0; i < legnedLength / 2; i++) {
        num = Math.ceil(Math.random() * 1000);
        obj = new Object();
        obj.value = num;
        obj.name = option.legend.data[i];
        legneds.push(obj);
    }
    refreshData(legneds, 0);
}, 2000);
setInterval(function() {
    var legnedLength = option.legend.data.length;
    var legneds1 = new Array();
    var num1 = 0;
    var obj1;
    for (var i = legnedLength / 2; i < legnedLength; i++) {
        num1 = Math.ceil(Math.random() * 1000);
        obj1 = new Object();
        obj1.value = num1;
        obj1.name = option.legend.data[i];
        legneds1.push(obj1);
    }
    refreshData(legneds1, 1);
}, 1500);