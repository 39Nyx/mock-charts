
//data
var data = [];
for (var n = 0; n < 7; n++) {
    data.push((45 + Math.random() * 10))
}


//option
option = {
    title: {
        text: 'SPC'
    },
    tooltip : {
        trigger: 'axis'
    },    
    xAxis: {
        data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00']
    },
    yAxis: {
        min: 30,
        max: 70
    },
    series: [{
        type: 'line',
        data:data,
        markLine: {
            data: [
                {
                    name: 'Y 轴值为 60 的水平线',
                    yAxis: 60
                },
                {
                    name: 'Y 轴值为 50 的水平线',
                    yAxis: 50
                },
                {
                    name: 'Y 轴值为 40 的水平线',
                    yAxis: 40
                }
            ]
        }
    }]
};