 var radarDataAvg =  [
        {value:922, name:'参数及功能咨询',itemStyle: {normal:{color: '#EA9294'}}},
        {value:480, name:'爆照',itemStyle: {normal:{color: '#949494'}}},
        {value:418, name:'电脑',itemStyle: {normal:{color: '#A4D2D5'}}},
        {value:357, name:'重启死机',itemStyle: {normal:{color: '#F1C0B1'}}},
        {value:228, name:'声音与震动',itemStyle: {normal:{color: '#BAD7CB'}}},
        {value:203, name:'屏幕',itemStyle: {normal:{color: '#8B99A1'}}},
        {value:138, name:'按键',itemStyle: {normal:{color: '#E6B9C0'}}},
        {value:126, name:'无线',itemStyle: {normal:{color: '#A9B9C6'}}},
        {value:106, name:'相机',itemStyle: {normal:{color: '#EEA8A9'}}},
        {value:35, name:'传感器',itemStyle: {normal:{color: '#A9A9A9'}}},
        {value:12, name:'图库',itemStyle: {normal:{color: '#B6DBDD'}}},
        {value:6, name:'音乐与视频',itemStyle: {normal:{color: '#A9A9A9'}}},
        {value:5, name:'手机管家',itemStyle: {normal:{color: '#EEA8A9'}}},
        {value:577, name:'其他故障',itemStyle: {normal:{color: '#A9B9C6'}}},
    ];
    var hotDatas={
        922:[18,20,30],
        480:[1,8,6],
        418:[2,54,88],
        357:[34,12,23],
        228:[11,23,33],
        203:[54,22,44],
        138:[11,23,33],
        126:[1,8,6],
        106:[11,23,33],
        35:[1,8,6],
        12:[1,8,6],
        6:[1,2,6],
        5:[1,8,6],
        577:[11,28,6],
    }
    var decData =  ['无法开机', '无法上网', '第三方软件故障',];
    var option = {
        title: [{
            text: 'note3咨询数据',
            left: 'center',
            textStyle: {
                color: '#5a687B'
            }
        }],
        color: ['#4472c4', ],
        grid: {
            left: '1%',
            right: '30%',
            top: '20%',
//            bottom: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: decData,
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#7c7c7c',//左边线的颜色

                }
            },
        },
        yAxis: {
            //设置Y轴不显示数值
            axisLabel : {
                formatter: function(){
                    return "";
                }
            },
            //  控制y轴线是否显示
            axisLine: {show: false},
            // 控制网格线是否显示
            splitLine: {
                show: false
            },
            // 去除y轴上的刻度线
            axisTick: {
                show: false
            }
        },
        series: [{
            name: 'note3咨询状况',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{c}'
                }
            },
//            barMaxWidth: 35, //柱状宽
//            data:radarDataAvg[13] ,
        }, {
            type: 'pie',
            radius : '35%',
            top:15,
            startAngle: -235,
            center: ['40%', '30%'],
            data:radarDataAvg,
            label: {
                normal: {
                    show: true,
                    position: 'right', //标签的位置
                    textStyle: {
                        color: '#4c4c4c',
                        fontSize: 12,

                    },
//                       设置饼状图上的文字
                    formatter:'{b}\n{c}'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    // shadowBlur: 2,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };


    function getHotData(value){
        return hotDatas[value]
    }

    // 点击事件
    myChart.on('click', function(params) {
        if (params.componentType === 'series' && params.seriesType === 'pie') {
            var dataIndex = params.dataIndex;
            var val = params.value;
            var hotData = getHotData(val);//通过value获取柱形图的数据
            myChart.setOption({
                series: [{
                    name: '1',
                    type: 'bar',
                    "barMaxWidth": 35, //柱状宽
                    data: hotData
                },{
                    type: 'pie',
                    radius : '35%',
                    top:15,
                    startAngle: -235,
                    center: ['40%', '30%'],
                    data:radarDataAvg,
                    label: {
                        normal: {
                            show: true,
                            position: 'right', //标签的位置
                            textStyle: {
                                color: '#4c4c4c',
                                fontSize: 12,

                            },
//                       设置饼状图上的文字
                            formatter:'{b}\n{c}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#ffffff',
                        },
                        emphasis: {
                            // shadowBlur: 2,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]

            })
        }
    });