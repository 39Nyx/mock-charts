var ydata = ['粮食加工品', '食用油、油脂及其制品', '调味品', '肉制品',
            '乳制品', '饮料', '方便食品', '饼干', '罐头', '冷冻饮品', '速冻食品',
            '薯类和膨化食品', '糖果制品', '茶叶及相关制品', '酒类', '蔬菜制品',
            '水果制品', '炒货食品及坚果制品', '蛋制品', '可可及焙烤咖啡产品',
            '食糖', '水产制品', '淀粉及淀粉制品', '糕点', '豆制品', '蜂产品',
            '保健食品', '特殊医学用途配方食品', '婴幼儿配方食品', '特殊膳食食品',
            '其他食品', '食品添加剂'
        ];



option = {
    backgroundColor: '#ffffff',
    title:{
        text:'违规情况统计',
        left:'left'
    },
    legend: {
        top: 30,
        left:330,
        textStyle: {
            color: '#000000',
        },
        data: ['违规数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: true
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },
            data: ydata
            },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ydata
            
            }

    ],
    series: [{
            name: '违规数',
            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    color: '#388E8E',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [106,109,110,119,125,119,125,132,109,110,119,125,132,132,134,135,150,110,119,125,132,157,160,166,171,171,178,178,179,185,195,197]
        }]
};