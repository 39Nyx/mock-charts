option = {
    title: {
        text: '新加坡超市走访,8大品牌牛奶评估打分',
        subtext: '数据来源：新加坡眼'
    },
    tooltip: {},
    legend: {
        data: ['FAR(FARMHOUSE)', 'FIR(FIRST CHOICE)', 'GRE(GREENFEILDS)', 'HOR(HORIZON)', 'MAG(MAGNOLIA)', 'MAR(MARIGOLD)', 'MEI(MEUI)', 'PUR(PURA)']
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
        indicator: [{
            text: 'Color',
            max: 9
        }, {
            text: 'Aroma',
            max: 9
        }, {
            text: 'Mouthfeel',
            max: 9
        }, {
            text: 'Creaminess',
            max: 9
        }, {
            text: 'Milkiness',
            max: 9
        }, {
            text: 'Sweetness',
            max: 9
        }]
    },
    series: [{
        name: '新加坡超市走访,8大品牌牛奶评估打分',
        type: 'radar',
        data: [{
            value: [5.5, 7, 8, 7, 6.5, 2.5],
            name: 'FAR'
        }, {
            value: [5, 5.5, 4, 6.5, 6.5, 2.5],
            name: 'FIR'
        }, {
            value: [2.5, 3, 8.5, 6, 7.5, 3.5],
            name: 'GRE'
        }, {
            value: [4, 5, 8, 7.5, 7.5, 3.5],
            name: 'HOR'
        }, {
            value: [6, 2.5, 7, 7.5, 7.5, 2.5],
            name: 'MAG'
        }, {
            value: [6.5, 7, 7.5, 7.5, 8, 4.5],
            name: 'MAR'
        }, {
            value: [3, 4.5, 7.5, 7, 7.5, 3.5],
            name: 'MEI'
        }, {
            value: [4.5, 2.5, 6, 7, 6, 2.5],
            name: 'PUR'
        }, ]
    }]
};