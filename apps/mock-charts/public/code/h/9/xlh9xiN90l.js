option = {
    title: {
        text: '面板雷达图'
    },
    tooltip: {},
    legend: {
        data: ['神通'],
        top:'20px',
        textStyle:{
            fontSize:24
        }
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
        indicator: [
           { name: '对轻甲输出', max: 7},
           { name: '对中甲输出', max: 7},
           { name: '对重甲输出', max: 7},
           { name: '平滑度', max: 7},
           { name: '对护盾优势', max: 7},
           { name: '防空', max: 7},
           { name: '生存', max: 7},
           { name: '性价比', max: 7}
        ]
    },
    series: [{
        name: '面板',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [3, 4, 6, 4, 3, 5, 4, 6],
                name : '神通',
                areaStyle: {
                    normal: { 
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                {
                                offset: 0, 
                                color: '#da5b5b' 
                            }, 
                            {
                                offset: 1, 
                                color: '#e24242' 
                            }
                            ],
                            globalCoord: false 
                        }
                    }
                }
            }
        ]
    }]
};