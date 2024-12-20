
option = {
    backgroundColor:'#ffffff',
    title: {
        text: '全部',
        subtext: '',
        left:'center'
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
            /*magicType: {
            show: true,
            type: ['line', 'bar']
            },*/
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
        name:'获证企业数',
        position: 'top',
        max:1500
    }],
    series: [{
            name: '获证企业数',
            type: 'bar',
            data: [101,221, 432, 541, 765, 831, 882, 890, 970, 998, 1000, 1100, 1190,1200],
            
            markLine: { //平均值
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
    ]
};