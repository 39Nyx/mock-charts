app.title = '车轮图';

option = {
    color: ['#FC0790', '#065AF8', '#6BE508', '#6D06D1','#F93C05','#CB0C11'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'left',
        data: ['百度', '搜狐', '爱奇艺', '新浪', '雅虎', '网易', '腾讯', '360']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['10%', '20%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'top'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 335,
            name: '百度'
        }, {
            value: 310,
            name: '搜狐'
        }, {
            value: 234,
            name: '爱奇艺'
        }]
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'top'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 305,
            name: '新浪'
        }, {
            value: 340,
            name: '雅虎'
        }, {
            value: 234,
            name: '网易'
        }]
    }]
};