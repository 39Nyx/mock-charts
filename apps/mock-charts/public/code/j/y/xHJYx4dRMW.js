option = {
    title: {
        text: 'cdn节点市场占有率',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['云盾', '百度云加速', '360', '其他', '加速乐']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        startAngle: 90,
        center: ['50%', '60%'],
        data: [{
            value: 335,
            name: '云盾'
        }, {
            value: 310,
            name: '百度云加速'
        }, {
            value: 234,
            name: '360'
        }, {
            value: 135,
            name: '其他'
        }, {
            value: 1548,
            name: '加速乐'
        }],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
myChart.on('click', function(e) {
    var sum = 0;
    var spercent = parseInt(e.value / e.percent * 100);
    var a = option.series[0].data
    for (var i = 0; i < e.dataIndex ; i++) {
        sum += a[i].value
    }
    var ccc = (sum) / spercent * 360  +90

    myChart.setOption( {
        series: [{
            startAngle: ccc
        }]
    })
})