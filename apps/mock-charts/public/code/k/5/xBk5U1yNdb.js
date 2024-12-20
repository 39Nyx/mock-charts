var option = {

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    toolbox: {
                        show : true,
                        y:'bottom',
                        feature : {
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    series : [
                        {
                            name:'饼图',
                            type:'pie',
                            radius: '50%',
                            selectedMode: 'single',
                            itemStyle : {
                                normal : {
                                    labelLine : {
                                        length : 10
                                    }
                                }
                            },
                            data:[
                                {value:200, name:'户变关系错误'},
                                {value:20, name:'无表用户未统计'},
                                {value:780, name:'退补电量未统计'},
                                {value:780, name:'小电量未抄回'},
                                {value:780, name:'空载台区'},                                
                                {value:780, name:'接线错误'}, 
                                {value:780, name:'表计故障'},
                                {value:780, name:'CT故障'},
                                {value:780, name:'CT倍率错误'},
                                {value:780, name:'采集不成功或采集数据异常'},
                                {value:780, name:'供电半径大'},
                                {value:780, name:'线路迂回'},
                                {value:780, name:'三相负载不平衡'},
                                {value:780, name:'台区设备老旧'},
                                {value:780, name:'线经相对小'},
                                {value:780, name:'共用线路、设备绝缘差或漏电'},
                                {value:780, name:'台区-用户关系错误'},
                                {value:780, name:'其他'}
                                
                            ]
                        }
                    ]
			};
