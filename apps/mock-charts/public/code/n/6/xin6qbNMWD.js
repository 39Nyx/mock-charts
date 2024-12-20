let textRich= {
            rich:{
                a:
                {
                    color: '#aae9ff',
                    fontSize: 16
                },
                b:
                {
                    color: '#fff',
                    fontSize: 26,
                    fontWeight: 600,
                    padding: [0, 30, 0, 30],
                },
                c:
                {
                    color: '#fff',
                    fontSize: 26,
                    fontWeight: 600,
                    padding: [0, 0, 0,34],
                }
            }
            }
option = {
    backgroundColor: '#0b1d2c',
    title: [{
        text: '填充雷达图',
        top:'5%',
        left:'40%',
        textStyle: {  color: '#d9d9d9', fontSize: 22, }, 
        },
        {
            text: ['{a|年度计划}','{b|100}','{a|个}'].join(''),
            left: '63%',
            top: '42%',
            textStyle:textRich
           
        },
        {
            text: ['{a|年度完成}','{b|100}','{a|个}'].join(''),
            left: '63%',
            top: '52%',
            textStyle:textRich
        },
        {
            text: ['{a|完成百分比}','{c|50%}'].join(''),
            left: '63%',
            top: '62%',
            textStyle:textRich
        }
                ],
    legend: {
        top: '30%',
        right: '16%',
        textStyle: {  color: '#d9d9d9', fontSize: 22, }, 
        data: ['计划量', '完成量'],
        icon: 'square',
    },
    radar: {
        radius: '50%',
        center: ['30%', '52%'],
        startAngle: 0,
        triggerEvent: true,
        name: {  textStyle: { color: '#fff', fontSize: '20', borderRadius: 3, padding: [20, 5] } },
        nameGap: '2',
        indicator: [
            { name: '二季度', max: 6500 },
            { name: '一季度', max: 16000 },
            { name: '四季度', max: 30000 },
            { name: '三季度', max: 38000 },
        ],
        splitArea: {
            areaStyle: {
                // color: [ 'rgba(0,255,255, 0.1)', 'rgba(0,255,255, 0.2)', 'rgba(0,255,255, 0.3)', 'rgba(0,255,255, 0.4)', 'rgba(0,255,255, 0.5)', 'rgba(0,255,255, 0.6)', ].reverse(),
                color: [ 'rgba(0,255,255, 0)'],
                shadowColor: 'rgba(0, 0, 0, 0)',
                shadowBlur: 0,
                shadowOffsetX: 10,
                shadowOffsetY: 10
            }
        },
        axisLine: {  lineStyle: { color: '#63717c' } },
        splitLine: {
            lineStyle: {
                width: 1,
                color: [ 'rgba(99,113,124, 0.9', 'rgba(99,113,124, 0.9)', 'rgba(99,113,124, 0.9)', 'rgba(99,113,124, 0.9)', 'rgba(99,113,124, 0.9)', 'rgba(99,113,124, 0.9)' ].reverse() 
            }
        }
    },
    series: [{
        name: '计划量',
        type: 'radar',
        areaStyle: { color: 'rgba(6,83,128, 1)' },
        symbol: 'circle',
        symbolSize: 0,
        itemStyle: { color: 'rgba(127,255,210,0.8)', borderColor: 'rgba(127,255,210,0.2)', borderWidth: 0, },
        lineStyle: { color: 'rgba(127,255,210, 0.6)', width: 0 },
        label: { show: false, },
        data: [ [4600, 13000, 25000, 23500] ]
    },
    {
        name: '完成量',
        type: 'radar',
        areaStyle: { color: 'rgba(41,134,195, 0.5)' },
        symbol: 'circle',
        symbolSize: 0,
        itemStyle: { color: 'rgba(255,237,145,0.8)', borderColor: 'rgba(255,237,145,0.2)', borderWidth: 0, },
        lineStyle: { color: 'rgba(255,237,145, 0.6)', width: 0 },
        data: [ [5300, 15000, 12800, 13500, 15000] ]
    }
]
};