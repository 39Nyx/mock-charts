option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        bottom: '10px',
        itemHeight: 18,
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 14,
        },
        formatter: function(name) {
            var oa = option.series[0].data;
            var num = 0;

            for (var i = 0; i < option.series[0].data.length; i++) {
                num += parseFloat(oa[i].value);
            };
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                    return name + '  ' + (parseFloat(oa[i].value) / num * 100).toFixed(2) + '%';
                }
            }
        },
        selectedMode: false,
        data: ['第1机构','第2机构','第3机构','第4机构']
    },
    series: [{
        name: '占比',
        type: 'pie',
        radius: ['30%', '50%'],
        center: ['50%', '33%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.percent + '%';
                },
                textStyle: {
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data: [
            {name:'第1机构',value:30},
            {name:'第2机构',value:20},
            {name:'第3机构',value:40},
            {name:'第4机构',value:40},
        ]
    }]
};