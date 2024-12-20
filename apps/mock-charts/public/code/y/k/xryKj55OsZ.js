option = {
    title: {
        text: '基金经理表现评级'
    },
    tooltip: {},
    legend: {
        data: ['华夏大盘精选-王亚伟', '同业平均']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        
        //1、历史业绩 2、业绩稳定性 3、风控能力 4、从业经验&管理规模 5、相对业绩风险指标：夏普、信息比

        indicator: [
           { name: '历史业绩', max: 6500},
           { name: '稳定性', max: 16000},
           { name: '风控', max: 30000},
           { name: '经验 ', max: 38000},
           { name: '进攻防守', max: 52000},
        ]
    },
    series: [{
        name: '基金经理表现评级',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000],
                name : '华夏大盘精选-王亚伟'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000],
                name : '同业平均'
            }
        ]
    }]
};