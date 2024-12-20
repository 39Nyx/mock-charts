option = {
                title: {
                    text: '纵向单位： (个)    横向单位：日期(时间段) ',
                    subtext: '',
                    textStyle: {
                        color: "#666",
                        fontSize: 14,
                        fontWeight: "normal"
                    }
                },
                tooltip :false,
               /* tooltip: {
                    trigger: 'axis'
                },*/
                grid: {
                    top:'20%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: ['07/21', '07/21', '07/22', '07/23', '07/24', '07/25', '07/26', '07/27', '07/28', '07/29', '07/30', '07/31'],
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                          color: "#666",
                        }
                    },
                }],
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        show: false,
                    },
                    splitArea: {
                        //show: true,
                        show:false,
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                          color: "#666",
                        }
                    },
                }],

                series: [{
                    name: '降水量',
                    type: 'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function(d) {
                                return "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16);
                                //return "#cee3f6";
                            }
                        }
                    },
                    data: [32, 25, 39, 26, 28, 70, 75, 82, 48, 58, 16, 32],
                }]
            };