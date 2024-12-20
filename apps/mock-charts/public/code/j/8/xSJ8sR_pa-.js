var days = ['10/1', '10/2', '10/3', '10/4', '10/5', '10/6', '10/7'];
var cus = ['客户一', '客户二', '客户三',
    '客户四', '客户五', '客户六', '客户七'
];

var data = [[3,9,10],[3,10,5],[3,11,14],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,11],[4,0,11],[4,1,13],[4,2,10],[4,3,10],[4,4,10],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,8,11],[5,19,5],[5,20,3],[5,21,4],[5,22,12],[5,23,10],[6,0,11],[6,1,10],[6,2,10],[6,3,10],[6,4,10],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

data = data.map(function(item) {
    return [item[1], item[0], item[2]];
});

option = {
    backgroundColor: '#001C69',
    textStyle: {
        color: '#ffffff'
    },
    title: {
        text: '客户活跃度',
        textStyle: {
           color: '#ffffff'
        },
    },
    tooltip: {
        position: 'top',
        formatter: function(params) {
            return cus.value[params.value[1]] + ' comming in ' + days[params.value[0]];
        }
    },
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: days,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ddd',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: cus,
        axisLine: {
            show: false
        }
    },
    series: [{
        name: '活跃度',
        type: 'scatter',
        symbolSize: function(val) {
            return val[2] * 2;
        },
        data: data
    }]
};