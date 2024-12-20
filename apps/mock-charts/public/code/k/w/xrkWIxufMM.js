
option = {
    legend: {
            data: ['1','2','3']
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            
            axisPointer: {
                type: 'shadow'
            },
            formatter:function(params){ // 改鼠标悬浮提示值格式
                var relVal = params[0].name+"<br/>";
                for(var i=0;i<params.length;i++){
                    if(params[i].value <0){
                        relVal +=params[i].marker + params[i].seriesName+ ' : ' + (-params[i].value) +"<br/>";
                    }else{
                        relVal +=params[i].marker + params[i].seriesName+ ' : ' +params[i].value+"<br/>";
                    }
                }
                return relVal;
            }
        },
        axisPointer: {
            link: {yAxisIndex: 'all'}
        },
        
        toolbox: {
            feature: {
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        grid: [{
            show: false,
            left: '6%',
            top: 60,
            bottom: 60,
            containLabel: false,
            width: '44%'
        }, {
            show: false,
            left: '6%',
            top: 60,
            bottom: 60,
            width: '0%',
            containLabel: false,
            tooltip: {
                show: false
            }
        }, {
            show: false,
            right: '6%',
            top: 60,
            bottom: 60,
            containLabel: false,
            width: '44%'
        }],

        xAxis: [
            {
                type: 'value',
                inverse: true,
                max: 100,
                axisLine: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    }
                },
                splitLine: {
                    show: true
                },
                name: '左侧'
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                type: 'value',
                max: 100,
                axisLine: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: '{value}'
                },
                splitLine: {
                    show: true
                },
                name: '右侧'
            }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                margin: 8,
                textStyle: {
                    fontSize: 12
                }

            },
            data: ['a','s','d']
        }, {
            nameLocation: 'start',
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                width: '100%',
                textStyle: {
                    fontSize: 12
                }

            },
            data: ['a','s','d'],
            name:'日期'
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    fontSize: 12
                }

            },
            data: ['a','s','d']
        }],
        series:  [{
            name:'1',
            type: 'bar',
            stack: 'left',
            barMaxWidth: 30,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'left'
                        
                    },
                    opacity: 0.85
                }
            },
            data: [20,30,40]
        },{
            name: '2',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            barMaxWidth: 30,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'insideRight',
                        formatter:function(params){
                            if(params.value <=  5){
                                return '';
                            }
                            return params.value;
                        }

                    },
                    opacity: 0.85
                }
            },
            data: [30,40,50]
        },{
            name: '3',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            barMaxWidth: 30,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'insideRight',
                        formatter:function(params){
                            if(params.value <=  5){
                                return '';
                            }
                            return params.value;
                        }

                    },
                    opacity: 0.85
                }
            },
            data: [30,40,50]
        }]

};

