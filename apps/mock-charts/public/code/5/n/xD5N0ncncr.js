const center = ['90%', '50%'];
const color = [
    '#1576d2',
    '#d14a82',
    '#26c1f2',
    '#a166ff',
    '#1271cc',
    '#272f67'
];
let data = [{
        name: 'Massachusetts Institute of Technology (MIT)',
        value: 182
    },
    {
        name: 'Stanford University',
        value: 191
    },
    {
        name: 'Harvard University',
        value: 234
    },
    {
        name: 'California Institute of Technology (Caltech)',
        value: 290
    },
    {
        name: 'University of Oxford',
        value: 330
    }
];
// 指定数据块中 label 的相应效果，以保证label的正常显示
const dataArcStyle = {
    label: {
        show: true
    },
    labelLine: {
        show: true,
        length: 5,
        length2: 80
    },
    emphasis: {
        labelLine: {
            show: true
        }
    }
};
data = data.map(d => {
    d = Object.assign(d, dataArcStyle);
    return d;
});

const originDataLen = data.length;
const spanAngle = 180; // 需要显示的角度
const repeatedMultiple = 360 / spanAngle;
const addDataLen = parseInt((repeatedMultiple - 1) * originDataLen);
for (let index = 0; index < addDataLen; index++) {
    data.push({
        name: null,
        value: 0,
        itemStyle: {
            color: 'rgba(0,0,0,0)'
        },
        tooltip: {
            show: false
        }
    });
}

const dataArc = {
    type: 'pie',
    // roseType=true和roseType='area'在填充值后显示方式不同
    roseType: 'area',
    clockwise: false,
    center,
    radius: ['20%', '70%'],
    data,
    label: {
        show: false
    }
};

// 背景装饰
const backgroundArc0 = {
    type: 'pie',
    radius: ['14%', '72%'],
    center,
    silent: true,
    clockwise: false,
    label: {
        show: false
    },
    data: [{
            name: null,
            value: spanAngle,
            itemStyle: {
                color: 'rgba(220,220,220,0.3)'
            }
        },
        {
            name: null,
            value: 360 - spanAngle,
            itemStyle: {
                color: 'rgba(220,220,220,0)'
            }
        }
    ]
};
const backgroundArc1 = JSON.parse(JSON.stringify(backgroundArc0));
backgroundArc1.radius = ['74%', '75.5%'];

option = {
    backgroundColor: '#000',
    color,
    tooltip: {
        show: true
    },
    series: [backgroundArc0, backgroundArc1, dataArc]
};