var data1 = [80, 98, 60, 53];
var data2 = [30, 32, 30, 27];
var data3 = function() {
    var datas = [];
    for (var i = 0; i < data1.length; i++) {
        datas.push(data1[i] + data2[i]);
    }
    return datas;
}();
var max = 130;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var relVal = params[0].name;
            var value = 0;
            for (var i = 0, l = params.length; i < l; i++) {
                value += params[i].value;
            }
            value = value / 2;
            for (var i = 0, l = params.length - 1; i < l; i++) {
                relVal += '<br/>' + params[i].seriesName + ' : ' + parseFloat(params[i].value) + '(' + (100 *
                    parseFloat(params[i].value) / parseFloat(value)).toFixed(2) + "%)";
            }
            return relVal;
        }
    },
    color: ['#C0504D', '#4F81BD'],
    legend: {
        data: ['预算余额', '已使用金额'],
        bottom: '0%'
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '10%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: /*'${xAxisList}'*/ ['总经办', '财务处', '勘察设计', '投资事业部']
    },
    yAxis: {
        type: 'value',
        splitNumber: 10,
        max: max
    },
    series: [{
            name: '预算余额',
            type: 'bar',
            stack: 'sum',
            barWidth: '30%',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //是否展示
                    },
                    color: '#4F81BD'
                }
            },
            data: data1
        },
        {
            name: '已使用金额',
            type: 'bar',
            stack: 'sum',
            barWidth: '30%',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //是否展示
                    },
                    color: '#C0504D'
                }
            },
            data: data2
        },
        {
            name: '总计',
            type: 'bar',
            stack: 'sum',
            label: {
                normal: {
                    offset: ['50', '80'],
                    show: true,
                    position: 'insideBottom',
                    formatter: '{c}',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(128, 128, 128, 0)'
                }
            },
            data: data3
        }
    ]
};