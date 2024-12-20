
option = {
    title: {
        text: '因素分析:品牌贡献',
        x: "center",
        y: "top"
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var tar;
            if (params[1].value !== '-') {
                tar = params[1];
            } else {
                tar = params[0];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        x: 'center',
        top: '8%',
        data: ['支出', '收入']
    },
    grid: {
        top: '16%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: function() {
            var list = ['兰蔻', '雅诗兰黛', '香奈儿', 'SKII', '资生堂', '奥迪', '科颜氏', '馥蕾氏', '海蓝之谜', '娇韵诗'];
            return list;
        }()
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            // barWidth : 30,//柱图宽度
            label: {
                show: true,
                position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
    ]
};