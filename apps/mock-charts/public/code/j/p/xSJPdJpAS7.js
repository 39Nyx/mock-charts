option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['程雷', '同类平均89分']
    },
    backgroundColor:'#fff',
    color:['#f4c7cb','#9395dd'],
    radar: {
        axisLine:{
          lineStyle:{
              color:'#f7f7f9'
          }  
        },
        splitLine:{
            lineStyle:{
                color:['#f7f7f9','#f7f7f9','#f7f7f9']
            }
        },
        splitArea: {
              areaStyle: {
                  color: '#f7f7f9'
              }
          },
        //shape: 'circle',
        name: {
            textStyle: {
                color: '#333',
                fontSize:'14'
           }
        },
        indicator: [
           { name: '超额收益（85）'},
           { name: '风控能力（92）'},
           { name: '收益率（80）'},
           { name: '稳定性（88）'},
           { name: '管理规模（92）'},
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        data : [
            {
                value : [10,20, 60, 30, 40, 80],
                name : '程雷'
            },
             {
                value : [12, 15, 65, 70, 30, 50],
                name : '同类平均89分'
            }
        ],
        symbolSize: 0,
        areaStyle: {
            normal: {
                opacity: .8
            }
        },
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 0
                }
            }
        },
    }]
};