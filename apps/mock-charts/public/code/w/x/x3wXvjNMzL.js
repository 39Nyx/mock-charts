let color = ["#83a1c5", "#45d7ff", "#286eff", "#0130fd", "#b98c3e", "#ec5a26"];
let legend = [
    ['{w|睡意}', '{w|视觉疲劳}', '{w|脑力疲劳}'],
    ['{w|思维活动}', '{w|情绪波动}', '{w|脑力负荷}']
];
let data = {
    people: ['艇员1', '艇员2', '艇员3', '艇员4', '艇员5', '艇员6', ],
    sleep: ['1', '4', '7', '10', '13', '16'],
    visual: ['4', '7', '10', '13', '16', '19'],
    mental: ['7', '10', '13', '16', '19', '22'],
    thought: ['10', '13', '16', '19', '22', '25'],
    mood: ['13', '16', '19', '22', '25', '28'],
    mentalLoad: ['16', '19', '22', '25', '28', '31']
};
let max = 0;
function getMax() {
    let sleep = Math.max(...data.sleep);
    let visual = Math.max(...data.visual);
    let mental = Math.max(...data.mental);
    let thought = Math.max(...data.thought);
    let mood = Math.max(...data.mood);
    let mentalLoad = Math.max(...data.mentalLoad);
    let max = sleep > visual ? sleep :
        visual > mental ? visual :
        mental > thought ? mental :
        thought > mood ? thought :
        mood > mentalLoad ? mood : mentalLoad;
    max = Math.floor(max * 1.2);
    return max;
}
max = getMax();
function getBg() {
    let bg = [];
    for (let i = 0; i < data.sleep.length; i++) {
        bg.push(Math.floor(max * 1.2));
    }
    return bg;
}

option = {
    backgroundColor: '#031930',
    title: {
        text: '成员试试动态总览\n(每10分钟累计发生次数)',
        textStyle: {
            color: '#82a1c4',
            lineHeight: 28
        },
        textAlign: 'center',
        left: '50%',
        top: 40,
    },
    legend: [{
        data: legend[0],
        orient: 'horizontal',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#82a1c4',
            rich: {
                w: {
                    width: 48
                }
            }
        },
        top: '6%',
        left: '70%',
        selectedMode: false
    }, {
        data: legend[1],
        orient: 'horizontal',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#82a1c4',
            rich: {
                w: {
                    width: 48
                }
            }
        },
        top: '8%',
        left: '70%',
        selectedMode: false
    }],
    grid: {
        top: '14%'
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#015092'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#82a1c4'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#015092',
                opacity: 0.6,
                type: 'dotted'
            }
        },
        // 刻度内容
        data: data.people
    }, { //柱状背景
        show: false,
        type: 'category',
        data: data.people
    }],
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                show: true,
                color: '#015092',
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#82a1c4',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#015092',
                opacity: 1,
                type: 'dotted'
            }
        },
        max: 40 > max ? 40 : max
    },
    series: [{
        name: legend[0][0],
        type: 'bar',
        data: data.sleep,
        itemStyle: {
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 12,
        silent: true,
        xAxisIndex: 0
    }, {
        name: legend[0][1],
        type: 'bar',
        data: data.visual,
        itemStyle: {
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 12,
        silent: true,
        xAxisIndex: 0
    }, {
        name: legend[0][2],
        type: 'bar',
        data: data.mental,
        itemStyle: {
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 12,
        silent: true,
        xAxisIndex: 0
    }, {
        name: legend[1][0],
        type: 'bar',
        data: data.thought,
        itemStyle: {
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 12,
        silent: true,
        xAxisIndex: 0
    }, {
        name: legend[1][1],
        type: 'bar',
        data: data.mood,
        itemStyle: {
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 12,
        silent: true,
        xAxisIndex: 0
    }, {
        name: legend[1][2],
        type: 'bar',
        data: data.mentalLoad,
        itemStyle: {
            barBorderRadius: [20, 20, 0, 0]
        },
        barWidth: 12,
        silent: true,
        xAxisIndex: 0
    }, {
        // 背景
        type: 'bar',
        data: getBg(),
        itemStyle: {
            color: '#03203d'
        },
        barWidth: 120,
        zlevel: -1,
        silent: true,
        xAxisIndex: 1
    }],
    color: color
};


// 模拟数据
function vdata() {
    for (let i = 0; i < data.people.length; i++) {
        data.sleep[i] = Math.floor(Math.random() * 40 + 1);
        data.visual[i] = Math.floor(Math.random() * 40 + 1);
        data.mental[i] = Math.floor(Math.random() * 40 + 1);
        data.thought[i] = Math.floor(Math.random() * 40 + 1);
        data.mood[i] = Math.floor(Math.random() * 40 + 1);
        data.mentalLoad[i] = Math.floor(Math.random() * 40 + 1);
    }
    option.series[0].data = data.sleep;
    option.series[1].data = data.visual;
    option.series[2].data = data.mental;
    option.series[3].data = data.thought;
    option.series[4].data = data.mood;
    option.series[5].data = data.mentalLoad;
    max = getMax();
    option.yAxis.max = 40 > max ? 40 : max;
    option.series[6].data = getBg();
    myChart.setOption(option, true);
}

setInterval(function() {
    vdata();
}, 2000);