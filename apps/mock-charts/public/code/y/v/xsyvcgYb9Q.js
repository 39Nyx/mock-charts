let dataAxis = ['企业', '金融', '政府', '教育', '制造' ];
    let dataAP = [65, 104, 83, 83, 83];

    

     option = {
        backgroundColor: '#010a0f',
         title: {
         text: '单位/人',
         textStyle: {
             fontSize: 12,
             fontWeight: 'normal',
             color: '#8fd5f3' //标题颜色
         },
         left: '0%',
     },
        grid: {
            bottom:"30px",
            left: '30px',
            right: '10px',
            top:'30px',
        },
        xAxis: {
            data: dataAxis,
            axisLabel: {
                interval: 0,

                textStyle: {
                    color: '#89ccea'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },

            /*z: 10*/
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#89ccea'
                }
            },
            splitLine: {
                show: true,
                lineStyle:{
                    color: ['#0b2f65'],
                    width: 1,
                    type: 'solid'
                }
            }
        },
        series: [

            {
                type: 'bar',
                barWidth: 15,
                label: {
                    normal: {
                        show: false,
                        position: "top",
                        distance:12,
                        formatter: function(params) {
                            return params.data.value;
                        },
                        textStyle: {
                            color: "#89ccea",
                            fontSize: 12
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00adff'
                        }, {
                            offset: 1,
                            color: '#047eff'
                        }]),

                    },

                },
                data: dataAP
            }
        ]
    };