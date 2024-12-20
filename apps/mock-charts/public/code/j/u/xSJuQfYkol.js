 option = {
            		title:{
            			text:"报故核实统计",
            			 x: '30'
            		},
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: '30',
                        y:'30',
                        data:['未核实','已核实','不处理']
                    },
                    
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            //文字在环形内的定位
                            label: {
                              /*  normal: {
                                    show: false,
                                    position: 'center'
                                },*/
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            //改成true 就会显示细条
                            labelLine: {
                                normal: {
                                    show: true,
                                    x:"right"
                                }
                            },
                            data:[
                                {value:335, name:'未核实'},
                                {value:310, name:'已核实'},
                                {value:234, name:'不处理'}
                      
                            ]
                        }
                    ]
                };