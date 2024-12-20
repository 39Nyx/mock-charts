var a = 0;

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    backgroundColor:'#fff',
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直达'],
        borderWidth:"10",
        borderColor:"#f00"
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            
            radius: [0, '30%'],
            label: {
                show:true,
                position:"inner"
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1548, name: '搜索引擎'}
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            label:{
                 padding: [80, -10,50,-10],
                formatter: [
                    '{a| 12}'
                ].join('\n'),
                rich: {
                    a: {
                    
                        top: 10,
                        right: 100
                    },
                    b: {
                        backgroundColor: {
                            image: 'xxx/xxx.jpg'
                        },
                        height: 40
                    }
    }
            },
            labelLine:{
                    show:false
            },
            startAngle:242,
            hoverAnimation:false,
            data: [
                {value: 100, name: 'aaa'},
                {value: 100, name: 'bbb'},
                {value: 100, name: 'ccc'},
                
                {value: 100, name: 'ccc'},
                {value: 100, name: 'ccc'},
                {value: 100, name: 'ccc'},
                {value: 100, name: 'ddd',itemStyle:{normal:{color:'rgba(255,0,0,0.5)'}}},
                {value: 100, name: 'eee',itemStyle:{normal:{color:'rgba(255,0,0,0.5)'}}},
                {value: 150, name: 'fff',itemStyle:{normal:{color:'rgba(0,0,0,0)'}}}
            ],
            itemStyle:{
                normal:{
                    borderColor:"#fff",
                    borderWidth:"5",
                    color:"#ccc"
                }
            },
        }
    ]
};