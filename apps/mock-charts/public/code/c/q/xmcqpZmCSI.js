const source = [
    ['一级指标', '提及率'],
    ['外观', 39.1],
    ['拍照', 18.83],
    ['物流', 15.46],
    ['屏幕', 15.85],
    ['电池', 17.3],
    ['其他', 10.97],
    ['性价比', 5.94],
    ['价格', 7.56],
    ['产品质量', 4.23],
    ['信号', 5.81],
    ['促销', 3.63],
    ['客服', 3.98],
    ['物流包装', 2.78],
    ['性能', 2.01],
    ['操作系统', 3.4],
    ['配件', 2.71],
    ['CPU', 0.52],
    ['存储', 0.49],
    ['售后服务', 1.69],
    ['解锁', 0.59],
    ['信号5G', 0.39],
    ['升级', 0.1],
    ['按键', 0.24],
    ['摄像头', 0.18],
    ['第三方APP', 0.06],
    ['艺人', 0.03],
    ['NFC', 0.01],
    ['蓝牙', 0.02],
    ['GPS', 0.01],
    ['性能5G', 0.04],
    ['分屏', 0],
    ['套餐5G', 0],
    ['感应', 0],
    ['应用市场应用市场', 0]
];
myChart.resize({width:1114,height:320})

option = {
    title:{
        text:'指标提及率',
        left:8,
        top:8
    },
    dataset:{
        source:source
    },
    grid:{
        left:40,
        right:24,
        top:48,
        bottom:64
    },
    dataZoom:{
        height:16,
        bottom:8
    },
    xAxis: {
        type:'category',
        axisLabel:{
            rotate:45
        },
    },
    yAxis: {},
    series: [{
        type: 'bar',
        barWidth:'60%',
        encode:{x:0,y:1}
    }]
};