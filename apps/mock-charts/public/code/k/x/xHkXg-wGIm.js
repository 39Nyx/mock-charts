myChart.setOption({
            backgroundColor:'rgb(35, 43, 46)',
            tooltip: {},
            color:['rgba(82, 255, 175, 0.8)','rgba(2, 159, 254, 0.8)'],
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
                textStyle:{color:'#fff'},
            },
            radar: {
                shape: 'circle',
                radius:150,
                splitNumber:4,
                name: {
                    textStyle: {
                        color: 'white',
                },
                },
                axisLine:{
                    lineStyle:{
                        width:2,
                        color:'rgba(2, 159, 254, 0.5)',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        type:'dashed',
                        color: 'rgba(2, 159, 254, 0.5)' ,// 图表背景网格线的颜色
                    },
                },
                splitArea:{
                    areaStyle:{
                        color:'rgba(35, 43, 46, 0.5)',
                    },
                },
                indicator: [
                    { name: '1', max: 6500},
                    { name: '2', max: 16000},
                    { name: '3', max: 30000},
                    { name: '4', max: 38000},
                    { name: '5', max: 52000},
                ],
              
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000],
                        name : '预算分配（Allocated Budget）'   ,
                        areaStyle:{
                            normal:{
                                color: 'rgba(82, 255, 175, 0.7)'
                            },
                        },
                    },
                    {
                        value : [2000, 15000, 28000, 27000, 42000],
                        name : '实际开销（Actual Spending）',
                        areaStyle:{
                            normal:{
                                color: 'rgba(2, 159, 254, 0.7)'
                            },
                        },
                    }
                ],
                lineStyle:{
                    width:3,
                },
            }]

        });