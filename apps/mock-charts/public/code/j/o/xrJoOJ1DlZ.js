var a=[
        "0-4岁",
        "5-9岁",
        "10-14岁",
        "15-19岁",
        "20-24岁",
        "25-29岁",
        "30-34岁",
        "35-39岁",
        "40-44岁",
        "45-49岁",
        "50-54岁",
        "55-59岁",
        "60-64岁",
        "65-69岁",
        "70-74岁",
        "75-79岁",
        "80-84岁",
        "85-89岁",
        "90-94岁",
        "95-99岁",
        "100岁以上"
    ]
var b=[
        75532610,
        70881549,
        74908462,
        99889114,
        127412518,
        101013852,
        97138203,
        118025959,
        124753964,
        105594553,
        78753171,
        81312474,
        58667282,
        41113282,
        32972397,
        23852133,
        13373198,
        5631928,
        1578307,
        369979,
        35934
    ]

option = {
    color: ['#f6a99f'],
    title: {
        text: '2010年普查中国人口各年龄段统计表'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "年龄：{b}<br>人数: {c}"
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        right: '2%',
        top: 'top',
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [{
        type: 'category',
        data: a,
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#3A3A3A'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            textStyle: {
                color: '#3A3A3A'
            },
            formatter: '{value}'
        },
        show: true
    }],
    series: [{
        type: 'bar',
        data: b
    }]
};
