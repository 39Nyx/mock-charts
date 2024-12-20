var data = {
    ts: ['2015-04-10', '2015-04-11'],
    series: {
        A: [2.0, 3.0],
        B: [4.5, 1.5],
        C: [6.0, NaN]
    }
}


let i = 0;
for(let key in data.series) {
    let serie = []
    data.series[key].forEach((val, index) => {
        serie.push([data.ts[index], val])
    })
    data.series[key] = serie;
    i++
}

var series = [];
for(let key in data.series) {
    series.push({
        name: key,
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data.series[key]
    })
}

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: series
};