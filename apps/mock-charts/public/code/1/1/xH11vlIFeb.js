app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '水量',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
            formatter: '{value} ml'
        }
    }, {
        type: 'value',
        name: '温度',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
            formatter: '{value} °C'
        }
    }],
    series: [{
        name: '蒸发量',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    }]
};

// myChart.setOption({
//     title: {
//         text: tips + '%'
//     },
//     series: [{
//         name: 'loading',
//         data: loading()
//     }]
// })


$('#chart-panel').append('<div style="position:relative;top: 10px left: 300px;text-align:center;line-height:30px;width:100px;height: 30px;background: #f00;color:#fff;"  id="switchButton">切换</div>');

$('#switchButton').click(function() {
    console.log(1);
    option.series = [{
        name: '蒸发',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 30]
    }];
    option.xAxis = [{
        type: 'category',
        data: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    myChart.setOption(option);
});