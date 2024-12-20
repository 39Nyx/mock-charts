var base = +new Date(2017, 0, 1);
var oneDay = 5 * 60 * 1000;
var date = [];
var data = [0];
var count = 150000;


option = {
    tooltip: {
        trigger: 'axis',
        position: function(pt) {
            return [pt[0], '50%'];
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
    }, {
        start: 0,
        end: 100,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    legend: {
        show:true,
        data: ['模拟数据0'],
        selected:{
            '模拟数据0':true
        }
    },
    series: [{
        name: '模拟数据0',
        type: 'line',
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
            normal: {
                color: 'rgb(255, 70, 131)'
            }
        },
        data: data
    }]
};
var g_timeline = new Date();
var interval = setInterval(function() {
    var timeline = new Date();
    for (var i = 0; i < count/10; i++) {
        var now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push((Math.random() - 0.5) * 20 + data[data.length - 1]);
    }
    console.log("数据生成时间:" + (new Date().getTime() - timeline.getTime()));
    timeline = new Date();
    myChart.setOption({
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        series: [{
            data: data
        }]
    });
    console.log("setOption():" + (new Date().getTime() - timeline.getTime()));
    if (data.length > count) {
        console.log("总时间"+(new Date().getTime()-g_timeline.getTime()));
        clearInterval(interval);
    }
}, 1000 * 1.5);



       
