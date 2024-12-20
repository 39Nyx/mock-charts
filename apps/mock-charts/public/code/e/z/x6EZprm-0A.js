const srcData = [
  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  [-220, -182, -191, -234, -290, -330, -310],
//   [220, 182, 191, 234, 290, 330, 310],
//   [2.2, 1.82, 1.91, 2.34, 2.90, 2.30, 1.10],
  [2.2, 1.82, 1.91, 2.34, 1.90, 2.30, 2.10]
];

const getValueExtend = (data, bindZero) => {
    let min = Math.min(...data);
    let max = Math.max(...data);
    if (min > 0 && bindZero) {
        min = 0;
    }
    if (max < 0 && bindZero) {
        max = 0;
    }
    return [min, max];
};

const roundNumber = echarts.number.round;
const getPrecision = echarts.number.getPrecision;
const niceValueExtend = (extend, splitNumber = 5) => {
    const [min, max] = extend;
    const span = max - min;
    const interval = span / splitNumber;
    const niceInterval = echarts.number.nice(interval, true);
    
    const precision = getPrecision(niceInterval);
    const niceMin = roundNumber(Math.floor(min / niceInterval) * niceInterval, precision);
    const niceMax = roundNumber(Math.ceil(max / niceInterval) * niceInterval, precision);
    
    return {
        min: niceMin,
        max: niceMax,
        interval: niceInterval
    };
};

const subNice = (value) => {
    const ticks = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
    const exponent = echarts.number.quantityExponent(value);
    const exp10 = Math.pow(10, exponent);
    const f = value / exp10; // 1 <= f < 10
    
    let nf;
    for (let i = 0; i < ticks.length; i++) {
        const item = ticks[i];
        if (f <= item) {
            nf = item;
            break;
        }
    }
    
    let niceValue = nf * exp10;

    // Fix 3 * 0.1 === 0.30000000000000004 issue (see IEEE 754).
    // 20 is the uppper bound of toFixed.    
    if (exponent >= -20) {
        if (exponent < 0) {
            niceValue = niceValue.toFixed(-exponent);
        } else {
            niceValue = niceValue.toFixed(0);
        }
    }
    
    return Number(niceValue);
};

const subNiceValueExtend = (extend, splitNumber) => {
    const [min, max] = extend;
    const span = max - min;
    const interval = span / (splitNumber - 1);
    const niceInterval = subNice(interval);
    const precision = getPrecision(niceInterval);
    const niceMin = roundNumber(Math.floor(min / niceInterval) * niceInterval, precision);
    const niceMax = roundNumber(niceMin + splitNumber * niceInterval, precision);
    return {
        min: niceMin,
        max: niceMax,
        interval: niceInterval
    };
};

const nice = niceValueExtend(getValueExtend(srcData[1], true));
const count = (nice.max - nice.min) / nice.interval;
const sub = subNiceValueExtend(getValueExtend(srcData[2], true), count);

option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: srcData[0]
    },
    yAxis: [
        {
            min: nice.min,
            max: nice.max,
            interval: nice.interval,
        },
        {
            min: sub.min,
            max: sub.max,
            interval: sub.interval,
        }
    ],
    series: [
        {
            type: 'bar',
            data: srcData[1]
        },
        {
            type: 'line',
            data: srcData[2],
            yAxisIndex: 1
        }
    ]
};
