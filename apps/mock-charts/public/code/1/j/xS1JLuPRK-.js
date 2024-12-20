option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis',
        enterable: true,
        transitionDuration: 1,
        formatter: function(params) {
            return params[0].name + "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + params[0].color + "'>" + "</span><a href='www.baidu.com'>" + params[0].seriesName + "</a> : " + params[0].data +
                "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + params[1].color + "'>" + "</span><a href='www.google.com'>" + params[1].seriesName + "</a> : " + params[1].data
        }
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        name: 'value1',
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: 'value2',
        type: 'line',
        data: [200, 122, 111, 214, 290, 130, 110]
    }]
};

myChart.on('click', function(params) {
    console.log(params);
});