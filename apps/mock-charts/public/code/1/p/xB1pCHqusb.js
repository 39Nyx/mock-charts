app.title = '人工智能-技术层 项目数饼图';

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
        text: "人工智能-技术层 项目数饼图",
        top: "top",
        left: "center"
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['深度学习','计算机视觉','自然语言处理']
    },
    series: [
        {
            name:'项目数',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'深度学习'},
                {value:310, name:'计算机视觉'},
                {value:1548, name:'自然语言处理'}
            ]
        }
    ]
};
