option = {
    title: {
        text: '违法违规问题排名Top15',
        subtext: '违法违规问题数'
    },
    grid: {
        left: '1%',
        right: '40%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        name: '违规企业数',
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['粮食加工品','食用油、油脂及其制品'
            ,'调味品','肉制品','乳制品','饮料'
            , '方便食品', '饼干', '罐头', '冷冻饮品'
            , '速冻食品', '薯类和膨化食品','糖果制品'
            , '茶叶及相关制品', '酒类']
    },
    series: [
        {
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 330230]
        }
    ]
};
