option = {

                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['工作数量','工作比重']
                    },
                    grid:{
                        left: 0,
                        right: 0,
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        // show:false,
                        axisTick: {
                            show:false,
                            interval:0,
                            alignWithLabel: false
                        },
                        data: ['办结超时','拒绝','(自)拒绝超时','(自)申请延时','跟踪办理时间超时','回复超时','超时延时','签收超时','核查超时','未及时交办','未及时立项目']
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '工作比重',
                        position: 'right',
                        axisLine:{
                            show: false
                        },
                        axisTick:{
                            show: false
                        },
                        splitLine: {
                            show: true
                        }

                    }, {
                        type: 'value',
                        name: '工作数量',
                        position: 'left',
                        axisLine:{
                            show: false
                        },
                        axisTick:{
                            show: false
                        },
                        splitLine: {
                            show: true
                        }
                    }],
                    series: [{
                        name: '工作比重',
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 10,
                        showAllSymbol: true,
                        label: {
                            normal: {
                                show: false,
                                position: 'top'
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: '#ff2a2a'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 158, 68,.2)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131,.1)'
                                }])
                            }
                        },
                        data:[0.52,0.34,0.45,0.11,0.54,0.32,0.65,0.12,0.43,0.74,0.2]
                    },{
                        name: '工作数量',
                        type: 'bar',
                        barWidth: 25,
                        yAxisIndex: 1,
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        itemStyle:{
                            normal:{
                                color:function(idx) {
                                    var color = ['#dc4e54','#db8258','#eda350','#a6a34b','#84aa6d','#84abab'];
                                    return color[idx.dataIndex % color.length]
                                }
                            }
                        },
                        data:[22, 18, 19, 24, 90, 30, 10, 23, 56, 65, 12]
                    }]
};