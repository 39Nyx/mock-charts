var legendData = [
    '图例', '比较长的图例', 'abc', '',
    'How to align', 'vvv', '飒飒地方', '',
    'e', 'd', 's'
];

var series = [];

echarts.util.each(legendData, function (name) {
console.log(name);
    if (name) {
        series.push({
            name: name,
            type: 'scatter',
            data: [[Math.random(), Math.random()]]
        });
    }
});
    
option = {
    legend: {
        bottom: 20,
        orient: 'vertical',
        data: legendData  
    },
    xAxis: {},
    yAxis: {},
    grid: {
        bottom: 120
    },
    series: series
};