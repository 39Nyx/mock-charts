option = {
    backgroundColor: '#343745',
    color: [
        "#FF6868",
        "#FFCC68",
        "#BEFF68",
        "#68FFC2",
        "#68CBFF",
        "#6896FF",
        "#8368FF",
        "#CB68FF",
        "#FB6888",
        "#FF9D68",
        "#FFF668",
        "#69FF68",
        "#68FBFF",
        "#68BCFF",
        "#6873FF",
        "#A368FF",
        "#FB68FF",
        "#FF6BB5",
    ],
    title: {
        subtext: '*过去6个月融资数量按行业分布',
        x: 'left',
        y: '90%'
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"

    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['人工智能', '企业服务', '消费生活', '医疗健康', '文娱传媒']
    },
    series: [{
        name: '行业融资占比',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
            value: 335,
            name: '人工智能'
        }, {
            value: 310,
            name: '企业服务'
        }, {
            value: 234,
            name: '消费生活'
        }, {
            value: 135,
            name: '医疗健康'
        }, {
            value: 1548,
            name: '文娱传媒'
        }],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.2)'
            }
        }
    }]
};