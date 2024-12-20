option = {
    title: {
        text: 'Canvas vs SVG 内存测试',
        subtext: '图表尺寸 320x480'
    },
    xAxis: {
        name: '图表个数',
        data: ['10', '100', '1000']
    },
    yAxis: {
        name: '内存（MB）'
    },
    legend: {
        data: [
            'PC 端 Canvas', 
            'PC 端 SVG', 
            '手机端 Canvas',
            '手机端 SVG'
        ],
        right: 10,
        width: 300
    },
    color: ['#f55', '#5c5', '#f99', '#9c9'],
    series: [{
        name: 'PC 端 Canvas',
        type: 'bar',
        data: [44, 479, 2493.5]
    }, {
        name: 'PC 端 SVG',
        type: 'bar',
        data: [14, 33, 248.5]
    }, {
        name: '手机端 Canvas',
        type: 'bar',
        data: [72, 580, 2780]
    }, {
        name: '手机端 SVG',
        type: 'bar',
        data: [40, 88, 409]
    }],
    grid: {
        top: 90
    }
}