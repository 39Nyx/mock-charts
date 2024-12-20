option = {
    backgroundColor:'#010c2c',
    tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['幸福指数','人均可支配收入(万元)']
        },
        grid: {
            left: '2%',
            right:'2%',
            top: '16%',
            bottom: '5%',
            containLabel: true
        },
        xAxis:  {
            type: 'category',
            boundaryGap: 0,
            splitLine: {
                show: 0
            },
            "axisLine": {
                lineStyle: {
                    color: '#5c5d89'
                }
            },
            "axisTick": {
                "show": 0
            },
            axisLabel: {
                textStyle: {
                    color: '#5c5d89'
                }
            },
            data: ['江西','湖南','内蒙古','河南','山东','吉林','河北','福建','海南','安徽','贵州','黑龙江','江苏','广东','湖北',"山西","云南","重庆","陕西","四川","浙江","新疆","北京","辽宁","青海","甘肃","广西","宁夏","天津","上海"]
        },
        yAxis:
            [
                {
                    type: 'value',
                    axisLine: {
                        show:1,
                        lineStyle: {
                            color: '#5c5d89'
                        }
                    },
                    axisTick: {
                        show: 1
                    },
                    splitLine: {
                        show: 1
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#5c5d89'
                        }
                    },
                    name: '人均可支配收入\n\n(万元)',
                    position: 'left',
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    axisLine: {
                        show:1,
                        lineStyle: {
                            color: '#5c5d89'
                        }
                    },
                    axisTick: {
                        show: 1
                    },
                    splitLine: {
                        show: 1
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#5c5d89'
                        }
                    },
                    name: '幸福指数',
                    min: 0,
                    max: 5,
                    position: 'right',
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
            ],

        series: [
            {
                name:'幸福指数',
                type:'line',
                itemStyle :{
                    normal :{
                        color:'#a173ed',
                    },
                },
                data:[4.4,4.2,4.2,3.9,3.4,3.1,2.9,2.7,2.6,2.4,2.3,2.2,2.1,2.1,1.8,1.8,1.8,1.7,1.7,1.6,1.5,1.5,1.5,1.5,1.4,1.3,1.2,1.2,1,0.7],
                markPoint: {
                    data: [
                        {//type: 'max', name: '最大值',
                            itemStyle :{
                                normal :{
                                    color:'#d90051',
                                },
                            },
                        },
                        {//type: 'min', name: '最小值',
                            itemStyle :{
                                normal :{
                                    color:'#01bc8f',
                                },
                            },
                        }
                    ]
                },
                markLine: {
                    data: [
                        //{type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'人均可支配收入(万元)',
                type:'line',
                itemStyle :{
                    normal :{
                        color:'#02b5d5',
                    },
                },
                data:[1.673417,1.762174,2.055934,1.569518,2.086421,1.752039,0.166474,2.333085,1.747646,1.679552,1.237106,1.740439,2.717277,2.568496,1.828323,1.653832,1.377221,0.183519,1.583675,1.574901,3.265757,1.509662,4.448857,2.282015,1.437398,1.218471,1.555708,1.590678,2.883229,4.596583],
                markPoint: {
                    data: [
                        {//type: 'max', name: '最大值',
                            itemStyle :{
                                normal :{
                                    color:'#d90051',
                                },
                            },
                        },
                        {//type: 'min', name: '最小值',
                            itemStyle :{
                                normal :{
                                    color:'#01bc8f',
                                },
                            },
                        }
                    ]
                },
                markLine: {
                    data: [
                        //{type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
};