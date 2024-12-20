/*
    @songcxa
    @2017/9/13
    @方便使用，暂存
    @叠加柱状图
    @qq546803970
*/
option = {
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(a, b) {
            if (a.seriesName != "辅助") {
                return a.seriesName + ":<br/>" + a.data + "%";
            }
        },
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        show: false,
        data: function() {
            var list = [];
            for (var i = 1; i <= 6; i++) {
                list.push('11月' + i + '日');
            }
            return list;
        }()
    },
    yAxis: {
        type: 'value',
        min: 1,
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: '#072543',
                width: 1,
            }
        },
        axisTick: {
            length: 1
        },
        axisLabel: {
            textStyle: {
                color: "#00A5FF"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                // 使用深浅的间隔色
                color: '#072543'
            }
        },
        minInterval: 1, //避免小数
        splitNumber: 4
    },
    series: [{
        name: '辅助',
        type: 'bar',
        stack: '总量',

        itemStyle: {
            normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [30, 20, 30, 10, 30, 10]
    }, {
        name: '化学原料及化学制品制造业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'top'
            }
        },
        data: [25.8, '-', '-', '-', '-', '-']
    }, {
        name: '非金属矿物制品业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'bottom'
            }
        },
        data: ['-', 12.6, '-', '-', '-', '-']
    }, {
        name: '黑色金属冶炼及压延加工业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'bottom'
            }
        },
        data: ['-', '-', 18.9, '-', '-', '-']
    }, {
        name: '有色金属冶炼及压延加工业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'bottom'
            }
        },
        data: ['-', '-', '-', 5.7, '-', '-']
    }, {
        name: '有色金属冶炼及压延加工业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'bottom'
            }
        },
        data: ['-', '-', '-', '-', 11.6, '-']
    }, {
        name: '电力热力的生产和供应业',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: false,
                position: 'bottom'
            }
        },
        data: ['-', '-', '-', '-', '-', 8.9]
    }]
};