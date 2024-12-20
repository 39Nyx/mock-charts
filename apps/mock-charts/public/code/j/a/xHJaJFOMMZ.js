option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'category',
        data: ['红条', '三号肉(里脊肉)', '猪舌头', '前排', '去皮五花', '前段', '肋排', '猪蹄', '中方肉', '板油','当腰肉','后段','带皮白条','前腿','带皮五花','四号肉(后腿肉)'].reverse(),
        axisTick: {
            alignWithLabel: true
        }
    }],
    xAxis: [{
        show:false,
        type: 'value',
    }],
    backgroundColor: '#ffffff',
    series: [{
        name: '',
        type: 'bar',
        barWidth: '40%',
        data: [7700, -8800, 9900, 11100, 14200, 16000, 18400, 20500, 22600, 24700],
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#3398DB',
                  	fontSize: 12
                }
            }
        }
    }]
};