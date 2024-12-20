
option = {
    backgroundColor:'#ffffff',
    title: {
        text: '投诉举报区域分布情况分析',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
  
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    yAxis: [{
        type: 'category',
        data: ['崇左市','来宾市','河池市','贺州市','百色市','玉林市','贵港市','钦州市','防城港市',
        '北海市','梧州市','桂林市','柳州市','南宁市']
    }],
    xAxis: [{
        type: 'value',
        name:'投诉举报数'
    }],
    series: [{
            name: '投诉举报数',
            type: 'bar',
            data: [692, 517, 3236, 1370, 22, 1542, 799, 36, 500, 612, 465, 786,312,874],
            markPoint: { //最大值和最小值
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: { //平均值
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
    ]
};