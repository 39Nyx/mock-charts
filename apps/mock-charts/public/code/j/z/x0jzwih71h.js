let barData = {
        name: '平均住院日',
        data: [120, 110, 130, 80, 160, 50,90],
        xAxis:['7.11', '7.12', '7.13', '7.14', '7.15', '7.16', '7.17'],
        color: ['#10a2ff', 'rgba(16, 162, 255, 0.7)', 'rgba(16, 162, 255, 0)']
    }
;

option = {
            backgroundColor: '#010d14',
            title: {
                text: '单位/ 个',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#8fd5f3' //标题颜色
                },
                top: '5px',
                left: '0%',
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '5px',
                right: '5px',
                bottom: '5px',
                top: '50px',
                containLabel: true,

            },
            
            calculable: true,
            xAxis: [{
                type: 'category',
                axisLabel: {
                    interval: 0, // 解决x轴名称过长问题
                    textStyle: {
                        color: '#8fd5f3',
                        fontSize: 12,
                    }
                },
                axisLine: {
                    lineStyle: { //y轴网格线设置
                        color: '#032e42',
                        width: 1,

                    }
                },                                 
                data: barData.xAxis,

            }],
            yAxis: [{
                type: 'value',
                // name: "单位/个",
                nameGap:8,
                nameTextStyle: {
                    color: "#8fd5f3",
                },

                axisTick:{
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: { //y轴网格线设置
                        color: '#032e42',
                        width: 1,

                    }
                },
                splitLine: { //保留网格线
                    show: true,
                    lineStyle: { //y轴网格线设置
                        color: '#032e42',
                        width: 1,

                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                        color: '#8fd5f3', //字体颜色
                    }
                },
            }],
            series: [

                {
                    name: barData.name,
                    type: 'bar',

                    z: 1,
                    barWidth: 12,
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#969a9d'
                        }
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius:[15, 15, 0, 0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: barData.color[0]
                                },
                                    {
                                        offset: 0.7,
                                        color: barData.color[1]
                                    },
                                    {
                                        offset: 1,
                                        color: barData.color[2]
                                    }
                                ]
                            )
                        },

                    },
                    data:barData.data,

                }
            ]
        };