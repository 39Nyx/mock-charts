let config = {
    barWidth: 20,
    barGap: 10,
    legend: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
    data: [{
        name: 'test',
        data: [18203, 23489, 29034, 104970, 131744, 630230]
    }]
};

config.data.map(item => {
    item = Object.assign(item, {
        type: 'bar',
        stack: 1
    });
    return item;
});

const COLOR = ['#ffc5c1'];

function getOption() {
    let height = (config.barWidth + config.barGap) * config.legend.length;
    return {
        color: config.color || COLOR,
        grid: {
            top: 0,
            left: 16,
            right: -68,
            height: height
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}：{c}'
        },
        xAxis: {
            type: 'value',
            axisLabel: null,
            axisLine: null,
            splitLine: null
        },
        yAxis: {
            type: 'category',
            axisLabel: null,
            axisLine: null,
            splitLine: null,
            data: config.legend
        },
        label: {
            show: true,
            color: '#fff',
            position: 'insideLeft',
            formatter: '{b}',
            textBorderColor: COLOR[0],
            textBorderWidth: 2
        },
        barWidth: config.barWidth,
        series: config.data
    };
}

option = getOption();

let i = 0;
let timer = setInterval(() => {
    i > 5 && clearTimeout(timer);
    config.legend.unshift('test' + i++);
    config.data[0].data.unshift(Math.random() * 600000 | 0);
    myChart.setOption(getOption());
}, 1000);
