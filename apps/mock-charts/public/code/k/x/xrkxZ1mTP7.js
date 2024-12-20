var xAxisData = [];
var data1 = [];
var data2 = [];
var base = +new Date(2000, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];
for (var i = 1; i < 100; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join(''));
    data1.push((Math.sin(i / 5) * (i / 5 -25) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}

option = {
    animation:false,
    color:['#c4403c','#2f4554'],
    legend: {
        data: ['当前平均收益率', '上证指数']
    },

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
          
        }
    },
    xAxis: {
        data: date,
        
    },
    yAxis:[{
            position: 'left',
            type: 'value',
            name: '',
            axisLabel: {
                formatter: '{value}%'
            },
        }, 
        {
            position: 'right',
            type: 'value',
            name: '',
            min: 0,
            max: 6000,

    }],
    series: [{
        name: '当前平均收益率',
        type: 'bar',
        data: data1
    }, {
        name: '上证指数',
        type: 'line',
        data: data2
    }]
};