var data = [
    { name: '户籍人口', value: 36889 },
    { name: '流动人口', value: 2450 },
];
var lineColor = "#0042FF"
var numArr = data.map((item) => item.value);
var maxNum = Math.max(...numArr);
var maxArr= [];
data.forEach((item) => {
    maxArr.push(maxNum);
});
var generateDotted = (color = lineColor) => {
    var dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: color,
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }

    return dataArr

}
const color = [
    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        {
            offset: 0,
            color: '#50A459',
        },
        {
            offset: 1,
            color: '#D3FD91',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
        {
            offset: 0,
            color: '#0056FF',
        },
        {
            offset: 1,
            color: '#01A1FF',
        },
    ]),
];
option={
    backgroundColor: '#0A2E5D',
        color: color,
        title: {
            text: "人口\n占比",
            left: 'center',
            top: "center",
            textStyle: {
                fontWeight: 'bold',
                color: '#F7DC8D',
                fontSize: 18
            },

        },
        grid: {
            top: '15%',
            left: 0,
            right: '1%',
            bottom: 5,
            containLabel: true,
        },
        tooltip: {
            show: true
        },
        series: [{
            name: '周边人口占比',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['45%', '65%'],

            label: {

                padding: [0, -80, 0, -80],
                formatter: function (params) {
                    let total = 0;
                    data.forEach(item => {
                        total += item.value;
                    })
                    let percen = ((Number(params.value) / total) * 100).toFixed(0) + "%";
                    if (params.name !== '') {
                        return '{name|' + params.name + '}' + '\n\n{value|' + percen + '}';
                    } else {
                        return '';
                    }
                },
                align: 'left',
                rich: {
                    name: {
                        fontSize: 14,
                        color: '#fff',

                    },
                    value: {
                        fontSize: 14,
                        color: '#fff',

                    }
                },
            },
            labelLine: {
                show: true,
                length: 20,
                length2: 100
            },
            data: data
        },
        {
            name: "內园1",
            type: 'pie',

            silent: true,
            radius: ['30%', '31%'],
            label: {
                show: false
            },
            labelLine: {
                show: false

            },
            itemStyle: {
                color: lineColor,

            },
            data: maxArr
        },
        {
            name: "內园虚线",
            type: 'pie',

            silent: true,
            radius: ['35%', '36%'],
            label: {
                show: false
            },
            labelLine: {
                show: false

            },
            itemStyle: {
                color: "#0042FF",

            },
            data: generateDotted()
        },
        {
            name: "外圆1",
            type: 'pie',
            zlevel:-1,
            silent: true,
            radius: ['75%', '76%'],
            label: {
                show: false
            },
            labelLine: {
                show: false

            },
            itemStyle: {
                color: lineColor,

            },
            data: maxArr
        },
        {
            name: "外圆虚线",
            type: 'pie',

            silent: true,
            radius: ['85%', '86%'],
            label: {
                show: false
            },
            labelLine: {
                show: false

            },
            itemStyle: {
                color: lineColor,

            },
            data: generateDotted()
        },
        {
            name: "外圆虚线1",
            type: 'pie',

            silent: true,
            radius: ['95%', '96%'],
            label: {
                show: false
            },
            labelLine: {
                show: false

            },
            itemStyle: {
                color: lineColor,

            },
            data: generateDotted('rgba(0,66,255,0.5)')
        },
        ],
    }