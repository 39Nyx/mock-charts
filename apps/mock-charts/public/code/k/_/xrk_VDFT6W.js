var rawData = [
{name: ' 团中央 ', value:  104 },
{name: ' 山东 ', value:  51 },
{name: ' 江西 ', value:  32 },
{name: ' 云南 ', value:  8 },
{name: ' 福建 ', value:  7 },
{name: ' 江苏 ', value:  6 },
{name: ' 广西 ', value:  6 },
{name: ' 湘 ', value:  5 },
{name: ' 重庆 ', value:  4 },
{name: ' 晋 ', value:  4 },
{name: ' 川 ', value:  3 },
{name: ' 宁夏 ', value:  3 },
{name: ' 海南 ', value:  1 },
{name: ' 内蒙古 ', value:  1 },
{name: ' 青海 ', value:  1 },
{name: ' 辽宁 ', value:  1 },
{name: ' 湖北 ', value:  1 },
{name: ' 心理服务联盟 ', value:  1 },
{name: ' 河北 ', value:  1 },
{name: ' 特色平台 ', value:  1 },
];


option = {
    title: {
        text: 'Nominal GDP (Billions of U.S. dollars)',
        left: 'center'
    },
    tooltip: {},
    series: [{
        
            label: {
                normal: {
                    textStyle: {
                        fontSize:20
                    }
                }
            },
        name: 'option',
        type: 'treemap',
        visibleMin: 300,
        data: rawData,
        leafDepth: 2,
        levels: [
            {
                itemStyle: {
                    normal: {
                        borderColor: '#555',
                        borderWidth: 4,
                        gapWidth: 4
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.6],
                itemStyle: {
                    normal: {
                        borderColorSaturation: 0.7,
                        gapWidth: 1,
                        borderWidth: 2
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.5],
                itemStyle: {
                    normal: {
                        borderColorSaturation: 0.6,
                        gapWidth: 1
                    }
                }
            },
            {
                colorSaturation: [0.3, 0.5]
            }
        ]
    }]
};