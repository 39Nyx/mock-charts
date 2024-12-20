let xdata = [
    '杭州市',
    '金华市',
    '温州市',
    '嘉兴市',
    '湖州市',
    '台州市',
    '丽水市',
    '宁波市',
    '衢州市',
    '舟山市',
    '绍兴市',
    '义乌市'
];
let yOnline = [10, 52, 67, 33, 39, 30, 20, 40, 50, 50, 80, 90];
let yOffline = [10, 52, 67, 33, 39, 30, 20, 40, 50, 50, 80, 70];
option = {
    backgroundColor: '#1d3071',
    // color: ['rgb(9,188,150)', 'rgb(41,157,255)', 'rgb(244,100,49)'],
    tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
            type: 'line'
        }
    },
    grid: {
        top: '5%',
        left: '2%',
        right: '2%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xdata,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        axisLabel: {
            color: 'rgb(204,228,255)',
            formatter: function(value, index) {
                let arr = value.split('')
                var label = ''
                for (let i = 0; i < arr.length; i++) {
                    label += arr[i] + '\n'
                }
                return label
            }
        }
    }],
    yAxis: [{
        type: 'value',
        show: true,
        axisLabel: {
            color: 'rgb(204,228,255)'
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
            name: '联网设备',
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            color: '#50a5ff',
            itemStyle: {
                // barBorderRadius: [15, 15, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    // color: '#bd881f'
                }
            },
            data: yOffline
        },
        {
            name: '增长',
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            color: '#49ff16',
            itemStyle: {
                // barBorderRadius: [15, 15, 15, 15]
            },
            emphasis: {
                itemStyle: {
                    // color: '#bd881f'
                }
            },
            data: yOnline
        }
    ]
}