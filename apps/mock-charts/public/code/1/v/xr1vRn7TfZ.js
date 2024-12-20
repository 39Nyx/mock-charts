app.title = '正负条形图';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var res = params[0].name + '<br/> ' + params[0].seriesName + ':' + params[0].value;
            res += '<br/>' + params[1].seriesName + ':' + params[1].value * -1;
            return res;
        }
    },
    legend: {
        data: ['平均数', '总数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    axisLabel: {
        formatter: function(a) {
            var b = a.toString();
            var c = b.replace(/-/, "");
            return c;
        }
    },
    xAxis: [{
        type: 'value'
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['一胎', '两胎', '三胎', '四胎', '五胎', '六胎', '七胎']
    }],
    series: [

        {
            name: '总数',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: [320, 302, 341, 374, 390, 450, 420]
        }, {
            name: '平均数',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'left',
                        formatter: function(params) {
                            var val = params.value * -1;
                            return val;
                        }
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data: [-10, -12, -11, -14, -10, -20, -10]
        }
    ]
};