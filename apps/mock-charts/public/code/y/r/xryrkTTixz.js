// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var colorMap = {
    good: {
        bgColor: '#42dc79',
        color: 'black'
    },
    fine: {
        bgColor: '#5bd4d0',
        color: 'black'
    },
    middle: {
        bgColor: '#fff785',
        color: 'black'
    },
    bad: {
        bgColor: 'red',
        color: 'black'
    }
}

var score = 0.3;

var color = {};
if (score > 0.85) {
    color = colorMap.good;
} else if (score > 0.65) {
    color = colorMap.fine;
} else if (score > 0.40) {
    color = colorMap.middle;
} else {
    color = colorMap.bad;
}

color.score = score;

option = {
    series: [{
        type: 'liquidFill',
        shape: 'circle',
        name: '优',
        // center: ["50%", "40%"],
        amplitude: "1%", // 振幅javascript:;
        // waveLength: '20%', // 波浪长度
        waveAnimation: true,
        data: [{
            value: color.score,
            itemStyle: {
                normal: {
                    color: color.bgColor
                }
            }
        }],
        radius: '200px',
        outline: {
            show: true,
            borderDistance: 4,
            itemStyle: {
                color: 'none',
                borderColor: color.bgColor,
                borderWidth: 2,
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.25)'
            },
        },
        backgroundStyle: {
            color: 'white'
        },
        label: {
            normal: { // old liquidfill script text option must be involved in 'textStyle'
                show: true,
                formatter: function(param) {
                    return param.value * 100 + '分';
                },
                fontWeight: 'normal',
                position: 'inside',
                color: color.color,
                insideColor: color.color,
                fontSize: 50
            }
        }
    }],
};