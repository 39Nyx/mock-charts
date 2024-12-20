// 部分注释的位置会使用变量
// legend
let level = ['无', '轻度', '中度'];
// 模拟数据
let data = [
    {department: '部门1', none: 1, mild: 3, moderate: 5},
    {department: '部门2', none: 2, mild: 4, moderate: 6},
    {department: '部门3', none: 3, mild: 5, moderate: 4},
    {department: '部门4', none: 4, mild: 6, moderate: 2},
    {department: '部门5', none: 5, mild: 1, moderate: 3},
    {department: '部门6', none: 6, mild: 2, moderate: 1},];
// // let none = Math.max(...data.none);
// // let mild = Math.max(...data.mild);
// // let moderate = Math.max(...data.moderate);
// // let max = none > mild ? none : mild > moderate ? mild : moderate;
let bg = [];
for (i = 0; i < data.length; i++) {
    // bg.push(Math.floor(max * 1.2));
    bg.push(10);
}

option = {
    backgroundColor: '#031930',
    title: {
        text: '8:00~9:00AM',
        textStyle: {
            color: '#82a1c4',
            fontSize: 18,
            lineHeight: 20
        },
        padding: [10, 20],
        left: '50%',
        bottom: 30,
        borderColor: '#015092',
        borderWidth: 1,
        borderRadius: 8
    },
    legend: {
        // level
        data: level,
        orient: 'vertical',
        bottom: 20,
        left: '20%',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#82a1c4'
        },
        selectedMode: false
    },
    grid: {
        left: '20%',
        bottom: 150,
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#015092',
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#82a1c4',
            show: true,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#015092',
                opacity: 0.6,
                type: 'dotted'
            }
        },
        max: 10

    },
    yAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                show: true,
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
        position: 'left'
    }, { //当作背景
        show: false,
        type: 'category',
        // 刻度内容
    }],
    dataset: {
        dimension: ['department', 'none', 'mild', 'moderate'],
        source: data
    },
    series: [{
            name: level[0],
            type: 'bar',
            // 程度：无
            itemStyle: {
                color: '#83a1c5',
                barBorderRadius: [0, 20, 20, 0],
            },
            barWidth: 20,
            silent: true,
            yAxisIndex: 0,
        },
        {
            name: level[1],
            type: 'bar',
            // 程度：轻度
            itemStyle: {
                color: '#45d7ff',
                barBorderRadius: [0, 20, 20, 0],
            },
            barWidth: 20,
            silent: true,
            yAxisIndex: 0,
        },
        {
            name: level[2],
            type: 'bar',
            // 程度：中度
            itemStyle: {
                color: '#286eff',
                barBorderRadius: [0, 20, 20, 0],
            },
            barWidth: 20,
            silent: true,
            yAxisIndex: 0,
        },
        //         // 背景
        {
            //             name: level[0],
            type: 'bar',
            // 背景
            data: bg,
            itemStyle: {
                color: "#032443"
            },
            barWidth: 90,
            zlevel: -1,
            silent: true,
            yAxisIndex: 1
        }
    ],
};

// 随机数据
// function vdata() {
//     for(let i = 0; i < data.none.length; i++) {
//         data.none[i] = Math.floor(Math.random() * 10 + 1);
//         data.mild[i] = Math.floor(Math.random() * 10 + 1);
//         data.moderate[i] = Math.floor(Math.random() * 10 + 1);
//     }
//     option.series[0].data = data.none;
//     option.series[1].data = data.mild;
//     option.series[2].data = data.moderate;
//     myChart.setOption(option, true);
// }

// setInterval(function() {
//     vdata();
// }, 1000);