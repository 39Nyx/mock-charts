var data = [{
    value:48,
    name: '防护林'
}, {
    value: 10,
    name: '经济林'
}, {
    value: 1,
    name: '薪炭林'
}, {
    value: 33,
    name: '用材林'
}, {
    value: 8,
    name: '特用林'
}];
option = {
        title: {
        text: '森林资源'
    },
    backgroundColor: 'rgba(255,255,255,0)',
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
        toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['防护林', '经济林', '薪炭林', '用材林','特用林']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['40%', '58%'],
        color: ['#AF89D6', '#59ADF3', '#FF999A', '#FFCC67','#FCC667','#CC5962'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }]
};