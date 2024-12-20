var dates = ['2017-11-20', '2017-11-21', '2017-11-22', '2017-11-23', '2017-11-24', '2017-11-25', '2017-11-26'],
values = [4, 3, 5, 2, 3, 6, 2];
option = {
    title: {
        text: '实时原油'
    },
    tooltip: {
        triggerOn: 'onmousemove',
        formatter: function(params) {
            return '时间: ' + params.name + '<br>价格: ' + params.value + '元';
        }
    },
    xAxis: {
        boundaryGap: false,
        data: dates,
        axisLabel: {
            color: '#000000'
        },
        axisLine: {
            lineStyle: {
                color: '#BFBFBF'
            }
        }
    },
    yAxis: {
        axisLabel: {
            color: '#000000'
        },
        axisLine: {
            lineStyle: {
                color: '#BFBFBF'
            }
        }
    },
    series: [{
        type: 'line',
        data: values,
        color: ['#2F42FF'],
        symbolSize: 10/*,
        label:{
            normal:{
                show:true//圆点上显示值
            }
        }*/
    }]
};