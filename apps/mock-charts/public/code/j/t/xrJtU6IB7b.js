option = {
    backgroundColor: '#5580A1',
    tooltip: {},
    title: {
        text: '16年手游用户日均游戏次数占比（%）',
        subtext: '数据来源：DataEye2016中国移动游戏行业年度报告'
    },
    series: [{
        name: '游戏次数',
        type: 'pie',
        radius: '55%',
        data: [{
            value: 36,
            name: '1-3次'
        }, {
            value: 44,
            name: '3-5次'
        }, {
            value: 13,
            name: '5-10次'
        }, {
            value: 6,
            name: '10-20次'
        }, {
            value: 1,
            name: '>20次'
        }],
        itemStyle: {
            normal: {
                shadowBlur: 200,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};