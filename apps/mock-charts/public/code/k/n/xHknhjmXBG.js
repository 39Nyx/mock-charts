
var measure = ['', '工具手段', '规则制定', '流程制度', '人员能力', '软件优化', '数据配置'];
var department = ['网管-支撑室', '网管-监控室','网管-运营室', '网管-资源室','网运中心','各分公司', '网络部', '政企/网运', '信安'];
var data =[
    [0, 1, 32],
    [1, 1, 14],
    [2, 1, 9],
    [4, 1, 1],
    [0, 2, 10],
    [1, 2, 6],
    [2, 2, 1],
    [4, 2, 7],
    [5, 2, 1],
    [0, 3, 4],
    [1, 3, 6],
    [3, 3, 3],
    [4, 3, 3],
    [5, 3, 1],
    [6, 3, 2],
    [7, 3, 1],
    [8, 3, 1],
    [1, 4, 2],
    [0, 5, 1],
    [4, 5, 1],
    [1, 6, 1],
    [4, 6, 4],
    [5, 6, 2]
];
data = data.map(function (item) {
    return [item[1], item[0], item[2]];
});

var data1 = [
    [0, 1, 15],
    [1, 1, 3],
    [2, 1, 2],
    [4, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [2, 2, 1],
    [4, 2, 7],
    [5, 2, 1],
    [0, 3, 1],
    [1, 3, 4],
    [4, 3, 3],
    [5, 3, 1],
    [6, 3, 2],
    [8, 3, 1],
    [0, 5, 1],
    [4, 5, 1],
    [1, 6, 1],
    [4, 6, 2],
    [5, 6, 2]
];
data1 = data1.map(function (item) {
    return [item[1], item[0], item[2]];
});
option = {
    xAxis: {
        type: 'category',
        data: measure,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        scale:15,
        data: department,
        axisLine: {
            show: false
        }
    },
    series: [{
        name: '已完成',
        type: 'scatter',
        itemStyle:{
            color:'#2f4554',
        },
        symbolSize: function (val) {
            return  Math.cbrt(val[2]) * 20;
        },
        data: data
    },
    {
        name: '未完成',
        type: 'scatter',
        symbolSize: function (val) {
            return  Math.cbrt(val[2]) * 20;
        },
        itemStyle:{
            color:'#c4ccd3',
            opacity:1,
        },
        data: data1
    }]
};