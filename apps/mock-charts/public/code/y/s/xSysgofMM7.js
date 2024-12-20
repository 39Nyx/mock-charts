let total = 600;
let data = [{
    value: 100,
    name: '初级',
    selected: true
}, {
    value: 200,
    name: '中级',
    selected: true
}, {
    value: 200,
    name: '高级',
    selected: true
}];

let chartData = {
    data: data,
    title: '500人',
    subtitle: data.length + '种岗位级别'
};

option = {
    backgroundColor: '#00265f',
    title: {
        text: chartData.title,
        textStyle: {
            color: '#bbb',
            fontSize: 20,
            fontFamily: 'Microsoft YaHei',
            fontWeight: 'normal'
        },
        subtext: chartData.subtitle,
        subtextStyle: {
            color: '#fff',
            fontSize: 24,
            fontFamily: 'KaiTi'
        },
        left: 'center',
        top: '45%'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var res = '<div>' + params.marker + '<span>' + params.name + '</span></div>';
            res += '<div>&nbsp;&nbsp;&nbsp;&nbsp<span>' + params.seriesName + ': ' + params.value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '</span></div>';
            res += '<div>&nbsp;&nbsp;&nbsp;&nbsp<span>' + '占比' + ': ' + params.percent.toFixed(0) + '%</span></div>';
            return res;
        }
    },
    legend: {
        show: false
    },
    color: [
        'rgb(65, 162, 252)',
        'rgb(64, 203, 202)',
        'rgb(83, 202, 118)'
    ],
    series: [{
        name: '人数',
        type: 'pie',
        selectedOffset: 0,
        minAngle: 10,
        radius: ['40%', '50%'],
        avoidLabelOverlap: true,
        itemStyle: {
            normal: {
                label: {
                    textStyle: {
                        fontSize: 20,
                        fontFamily: 'KaiTi'
                    }
                }
            }
        },
        data: chartData.data
    }]
};