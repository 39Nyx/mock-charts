option = {
    title: {
        text: '医院基础数据图'
    },
    tooltip: {},
    legend: {
        data: ['XX医院', '市内平均标准']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5],
                fontSize:30
           }
        },
        indicator: [
           { name: '病床数', max: 6500},
           { name: '医生数', max: 500},
           { name: '科室数', max: 30},
           { name: '患者人数', max: 38000},
           { name: '平均花费', max: 70000},
           { name: '平均住院时间', max: 20}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 300, 21, 35000, 50000, 14],
                name : 'XX医院',
                label:{
                    normal:{
                        show:true,
                        position:'inside'
                    }
                }
               
            },
             {
                value : [5000, 345, 15, 31000, 42000, 11],
                name : '市内平均标准',
                label:{
                    normal:{
                        show:true,
                        position:'inside'
                    }
                },
                 lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    }
            }
        ]
    }]
};