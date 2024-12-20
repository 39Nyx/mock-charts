option = {
    title: {
        text: '地域意图'
    },
    color: ['#A52A2A', '#458B00'],
    backgroundColor:'#FFFFFF',
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false,
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true,
            },
        },
    },
    xAxis: {
        data: ['badminton', 'basketball', 'climb', 'cycle', 'football', 'gym', 'ice', 'run', 'swim', 'tradition', 'yoga', 'square_dance', ]
    },
    yAxis: {
        min: 0,
        max: 100,
         axisLabel: {
                formatter: '{value}%'
            }
    },
    series: [{
        type: 'bar',
        name: '趋势1',
        stack: '趋势',
        textStyle:{
            formatter:function(param){
                return (param.value / bodyMax * 100).toFixed(0) + '%';
            },
        },
        data: [1,2]
    }, {
        type: 'bar',
        name: '趋势2',
        stack: '趋势',
        data: [3,4]
    }],
};