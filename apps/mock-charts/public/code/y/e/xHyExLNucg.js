
var hours = ['白族', '哈尼族', '景颇族', '傈僳族', '纳西族', '怒族', '普米族', '羌族','彝族','藏族',' ',];
var days = ['白族', '哈尼族', '景颇族', '傈僳族', '纳西族', '怒族', '普米族', '羌族','彝族','藏族',];
var data = [
[0,0,0],[0,1,0.600],[0,2,0.600],[0,3,0],[0,4,0.200],[0,5,0],[0,6,0],[0,7,0],[0,8,0.2],[0,9,0.6],
[1,0,0.065],[1,1,0],[1,2,0.196],[1,3,0.174],[1,4,0.196],[1,5,0.152],[1,6,0.022],[1,7,0.065],[1,8,0.5],[1,9,0.630],
[2,0,0.061],[2,1,0.184],[2,2,0],[2,3,0.041],[2,4,0.102],[2,5,0.041],[2,6,0],[2,7,0.143],[2,8,0.551],[2,9,0.714],
[3,0,0],[3,1,0.258],[3,2,0.065],[3,3,0],[3,4,0.161],[3,5,0.968],[3,6,0.032],[3,7,0.258],[3,8,0.613],[3,9,0.710],
[4,0,0.056],[4,1,0.5],[4,2,0.278],[4,3,0.278],[4,4,0],[4,5,0.333],[4,6,0],[4,7,0.333],[4,8,0.722],[4,9,0.944],
[5,0,0],[5,1,0.212],[5,2,0.061],[5,3,0.909],[5,4,0.182],[5,5,0],[5,6,0.0303],[5,7,0.242],[5,8,0.606],[5,9,0.697],
[6,0,0],[6,1,1],[6,2,0],[6,3,1],[6,4,0],[6,5,1],[6,6,0],[6,7,0],[6,8,1],[6,9,1],
[7,0,0],[7,1,0.12],[7,2,0.28],[7,3,0.32],[7,4,0.24],[7,5,0.32],[7,6,0],[7,7,0],[7,8,0.8],[7,9,0.96],
[8,0,0.007],[8,1,0.161],[8,2,0.189],[8,3,0.133],[8,4,0.091],[8,5,0.140],[8,6,0.007],[8,7,0.140],[8,8,0],[8,9,0.566],
[9,0,0.009],[9,1,0.087],[9,2,0.105],[9,3,0.0659],[9,4,0.0509],[9,5,0.0689],[9,6,0.003],[9,7,0.0713],[9,8,0.243],[9,9,0],
]
data = data.map(function (item) {
    return [item[1], item[0], item[2]];
});

option = {
    title: {
        text: ' ',
        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
    },
    legend: {
        data: ['Punch '],
        left: 'right'
    },
    tooltip: {
        position: 'top',
        formatter: function (params) {
            return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
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
        data: hours,
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
        data: days,
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 80;
        },
        data: data
    }]
};