const color = [
    '#1576d2',
    '#d14a82',
    '#26c1f2',
    '#a166ff',
    '#1271cc',
    '#272f67'
];
let data = [{
        name: 'Mon',
        value: 182
    },
    {
        name: 'Tue',
        value: 191
    },
    {
        name: 'Wed',
        value: 234
    },
    {
        name: 'Thu',
        value: 290
    },
    {
        name: 'Fri',
        value: 330
    }
];

// 指定数据块中 label 的相应效果，以保证label的正常显示
const dataArcStyle = {
    label: {
        show: true
    },
    labelLine: {
        show: true
    },
    emphasis: {
        labelLine: {
            show: true
        }
    }
}
data = data.map(d => {
    d = Object.assign(d, dataArcStyle)
    return d;
});

const sum = data.reduce((prev, curr) => prev + curr.value, 0);
data.push({
    name: null,
    value: sum,
    itemStyle: {
        color: 'rgba(0,0,0,0)'
    },
    tooltip: {
        show: false
    }
});

option = {
    backgroundColor: '#000',
    color,
    tooltip: {
        show: true
    },
    series: [{
        type: 'pie',
        center: ['50%', '75%'],
        radius: ['50%', '80%'],
        startAngle: 180,
        data
    }]
};