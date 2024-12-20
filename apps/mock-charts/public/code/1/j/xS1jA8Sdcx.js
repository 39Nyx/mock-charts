
var hours = [' ','白族', '独龙族', '哈尼族','景颇族', '拉祜族', '傈僳族', '纳西族', '怒族', '普米族','羌族','彝族',' ',];
var days = [' ','藏族', '彝族', '羌族', '普米族', '怒族', '纳西族', '傈僳族', '拉祜族','景颇族','哈尼族','独龙族',' ',];
var data = [
[1,1,161],[1,2,14],[1,3,173],[1,4,149],[1,5,86],[1,6,295],[1,7,286],[1,8,82],[1,9,39],[1,10,178],[1,11,368],
[2,1,223],[2,2,20],[2,3,334],[2,4,182],[2,5,199],[2,6,344],[2,7,310],[2,8,102],[2,9,39],[2,10,119],[2,11,0],
[3,1,55],[3,2,12],[3,3,52],[3,4,35],[3,5,29],[3,6,88],[3,7,95],[3,8,30],[3,9,19],[3,10,0],[3,11,0],
[4,1,30],[4,2,5],[4,3,24],[4,4,11],[4,5,12],[4,6,31],[4,7,44],[4,8,7],[4,9,0],[4,10,0],[4,11,0],
[5,1,55],[5,2,13],[5,3,75],[5,4,49],[5,5,39],[5,6,141],[5,7,82],[5,8,0],[5,9,0],[5,10,0],[5,11,0],
[6,1,172],[6,2,15],[6,3,170],[6,4,127],[6,5,99],[6,6,254],[6,7,0],[6,8,0],[6,9,0],[6,10,0],[6,11,0],
[7,1,168],[7,2,21],[7,3,240],[7,4,150],[7,5,137],[7,6,0],[7,7,0],[7,8,0],[7,9,0],[7,10,0],[7,11,0],
[8,1,76],[8,2,12],[8,3,198],[8,4,116],[8,5,0],[8,6,0],[8,7,0],[8,8,0],[8,9,0],[8,10,0],[8,11,0],
[9,1,81],[9,2,11],[9,3,167],[9,4,0],[9,5,0],[9,6,0],[9,7,0],[9,8,0],[9,9,0],[9,10,0],[9,11,0],
[10,1,128],[10,2,15],[10,3,0],[10,4,0],[10,5,0],[10,6,0],[10,7,0],[10,8,0],[10,9,0],[10,10,0],
[11,1,11]
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
    series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2] * 0.2;
        },
        data: data
    }]
};