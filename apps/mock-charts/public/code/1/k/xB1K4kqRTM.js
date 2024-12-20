var days = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var lineData = [];
//随机数设置，获取某个区域的整数
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
//天，用于递增
var day;
//某个区域值固定
for (var i = 1; i <= 100; i++) {
    day = i;
    days.push('第' + day + '天');
    data1.push(51.1);
    data2.push(0.5);
    data3.push(0.5);
    data4.push(10.9);
    lineData.push(getRandomInt(20, 60));

}
for (var i = 1; i <= 100; i++) {
    day = day + 1;
    days.push('第' + day + '天');
    data1.push(54);
    data2.push(0.5);
    data3.push(0.5);
    data4.push(10.9);
    lineData.push(getRandomInt(30, 60));

}
for (var i = 1; i <= 100; i++) {
    day = day + 1;
    days.push('第' + day + '天');
    data1.push(53);
    data2.push(0.5);
    data3.push(0.5);
    data4.push(10.9);
    lineData.push(getRandomInt(50, 60));

}
for (var i = 1; i <= 100; i++) {
    day = day + 1;
    days.push('第' + day + '天');
    data1.push(52);
    data2.push(0.5);
    data3.push(0.5);
    data4.push(10.9);
    lineData.push(getRandomInt(50, 55));

}
option = {
    title: {
        text: '  资负比  ',//标题文本
        x: 'center', //标题位置
        //标题颜色
        textStyle: {
            color: '#fff',
        },
        //标题背景
        backgroundColor: '#A9334C'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        data: ['达标', '提示', '预警', '刚性', '2017年', ],
        bottom:0,
    },
    xAxis: [{
        show: false,
        type: 'category',
        data: days,
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 15,
        axisLabel: {
            formatter: function(value, index) {
                return value.toFixed(2) + "%";
            }
        },
    }],
    series: [{
            name: '达标',
            type: 'bar',
            stack: '堆叠',
            barWidth: '102%', //x轴两个间距不留空隙，100%可看出稍微空隙，所以102%
            data: data1
        },
        {
            name: '提示',
            type: 'bar',
            stack: '堆叠',
            data: data2
        },
        {
            name: '预警',
            type: 'bar',
            stack: '堆叠',
            data: data3
        },
        {
            name: '刚性',
            type: 'bar',
            stack: '堆叠',
            data: data4
        },
        {
            name: '2017年',
            type: 'line',
            data: lineData
        },
    ]
};