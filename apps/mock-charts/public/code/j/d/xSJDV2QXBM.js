data=[//左点
    {name: '核心网',label:{fontSize:25}}, 
    {name: '平台',label:{fontSize:25}},
    {name: '家宽',label:{fontSize:25}},
    {name: ' '},
    {name: '物联网',label:{fontSize:25}},
    {name: '动环',label:{fontSize:25}},
    {name: '无线',label:{fontSize:25}},
    {name: '集客',label:{fontSize:25}},
    //右点
    {name: '传输 ',label:{fontSize:25,position:'left'}},
    {name: '核心网 ',label:{fontSize:25,position:'left'}},    
    {name: '平台 ',label:{fontSize:25,position:'left'}},
    {name: '家宽 ',label:{fontSize:25,position:'left'}},
    {name: '承载网 ',label:{fontSize:25,position:'left'}},
    {name: '物联网 ',label:{fontSize:25,position:'left'}},
    {name: '动环 ', label:{fontSize:25,position:'left'}},
    {name: '无线 ',label:{fontSize:25,position:'left'}},
    {name: '集客 ',label:{fontSize:25,position:'left'}}
];
link=[{source: '动环', target: '动环 ', value: 5},
    {source: '家宽', target: '传输 ', value: 3},
    {source: '家宽', target: '家宽 ', value: 3},
    {source: '家宽', target: '承载网 ', value: 1},
    {source: '平台', target: '平台 ', value: 1},
    {source: '无线', target: '传输 ', value: 1},
    {source: '无线', target: '无线 ', value: 1},
    {source: '核心网', target: '无线 ', value: 1},
    {source: '核心网', target: '核心网 ', value: 8},
    {source: '物联网', target: '物联网 ', value: 1},
    {source: '集客', target: '传输 ', value: 3},
    {source: '集客', target: '平台 ', value: 1},
     {source: '集客', target: '集客 ', value: 1}]
option = {
        toolbox: {
            top:1,
            right:100,
        feature: {
            saveAsImage: {}
            }
        },
        series: [
            {
                type: 'sankey',
                layout: 'none',
                width:900,
                nodeWidth:20,
                data:data,
                links: link,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa',
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                         borderColor: 'black',
                          borderWidth: 1,
                          opacity:0.4,
                        curveness: 0.5
                    }
                }
            }
        ]
    }




