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
//某个区域值固定，特别说明：‘-’表示无数据
for (var i = 1; i <= 90; i++) {
    day = i;
    days.push('第' + day + '天');
    data1.push(getRandomInt(1100, 1189));
    data2.push('-');
    data3.push('-');
    data4.push('-');
    lineData.push(getRandomInt(1080, 1154));

}
for (var i = 1; i <= 90; i++) {
    day = day + 1;
    days.push('第' + day + '天');
    data1.push('-');
    data2.push(getRandomInt(1104, 1144));
    data3.push('-');
    data4.push('-');
    lineData.push(getRandomInt(1084, 1138));

}
for (var i = 1; i <= 90; i++) {
    day = day + 1;
    days.push('第' + day + '天');
    data1.push('-');
    data2.push('-');
    data3.push(getRandomInt(1050, 1151));
    data4.push('-');
    lineData.push(getRandomInt(1064, 1128));

}
for (var i = 1; i <= 90; i++) {
    day = day + 1;
    days.push('第' + day + '天');
    data1.push('-');
    data2.push('-');
    data3.push('-');
    data4.push(getRandomInt(1024, 1120));
    lineData.push(getRandomInt(0, 1104));

}
option = {
    title: {
        text: ' 某段区域bar相同  ', //标题文本
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
        data: ['一季度额度', '二季度额度', '三季度额度', '四季度额度', '2017年', ],
        bottom: 0,
    },
    xAxis: [{
        type: 'category',
        data: days,
    }],
    yAxis: [{
        type: 'value',
    }],
    series: [{
            name: '一季度额度',
            type: 'bar',
            stack: '堆叠',
            data: data1
        },
        {
            name: '二季度额度',
            type: 'bar',
            stack: '一季度',
            data: data2
        },
        {
            name: '三季度额度',
            type: 'bar',
            stack: '堆叠',
            data: data3
        },
        {
            name: '四季度额度',
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