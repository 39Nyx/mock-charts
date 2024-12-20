option = {
    backgroundColor: '#ffffff',
    title:{
        text:'检查模板情况',
        left:'left'
    },
    
    grid: {
        left: '3%',
        right: '40%',
        top:35,
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
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel:{
                interval:0
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#000000',
                }
            },data: ['肉制品','乳制品','糕点','豆制品','蜂产品','婴幼儿配方食品',
            '饮料','方便食品','饼干','罐头','冷冻饮品','速冻食品',
            '薯类和膨化食品','糖果制品','食用油、油脂及其制品',
            '水果制品','炒货及坚果制品','蛋制品','可可及焙烤咖啡产品','食糖','水产制品',
            '淀粉及淀粉制品','特殊膳食食品','其他食品','食品添加剂','调味品','茶叶及相关制品','酒类','蔬菜制品','粮食加工品']
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
           data: ['肉制品','乳制品','糕点','豆制品','蜂产品','婴幼儿配方食品',
            '饮料','方便食品','饼干','罐头','冷冻饮品','速冻食品',
            '薯类和膨化食品','糖果制品','粮食加工品','食用油、油脂及其制品',
            '水果制品','炒货及坚果制品','蛋制品','可可及焙烤咖啡产品','食糖','水产制品',
            '淀粉及淀粉制品','特殊膳食食品','其他食品','食品添加剂','调味品','茶叶及相关制品','酒类','蔬菜制品']}

    ],
    series: [{
            name: '违法违规问题频率（次数）',
            type: 'bar',
            barWidth:8,
            
            itemStyle: {
                normal: {
                    color: '#24B7B9',
                    show: true,
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            data: [5,5,5,5,6,7,8,8,8,9,9,9,10,10,10,10,11,11,12,12,12,13,13,13,14,14,14,14,15,15]
        }]
};