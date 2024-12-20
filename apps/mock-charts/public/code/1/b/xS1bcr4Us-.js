app.title = '定时刷新环形图';
myChart.showLoading();
var option = {
    color: ['#FC0790', '#065AF8', '#6BE508', '#6D06D1', '#F93C05', '#CB0C11'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['0%', '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'top'
            },
            emphasis: {
                position: 'top',
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
            value: 100,
            name: '直接访问'
        }, {
            value: 100,
            name: '邮件营销'
        }, {
            value: 100,
            name: '联盟广告'
        }, {
            value: 100,
            name: '视频广告'
        }, {
            value: 100,
            name: '搜索引擎'
        }]
    }]
};

function refreshData(data) {
    myChart.hideLoading();
    option.series[0].data = data;
    myChart.setOption(option);
};
setInterval(function() {
    var legnedLength = option.legend.data.length;
    var legneds = new Array();
    var num = 0;
    var obj;
    for (var i = 0; i < legnedLength; i++) {
        num = Math.ceil(Math.random() * 1000);
        obj = new Object();
        obj.value = num;
        obj.name = option.legend.data[i];
        legneds.push(obj);
    }
    refreshData(legneds);
}, 2000);