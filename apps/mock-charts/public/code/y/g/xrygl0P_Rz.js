option = {
                     tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                animation: false
                            },

                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            top:'20%',
                            containLabel: true
                        },

                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ["2018/05/01","2018/05/02","2018/05/03","2018/05/04","2018/05/05","2018/05/06","2018/05/07","2018/05/08","2018/05/09","2018/05/10","2018/05/11","2018/05/12","2018/05/13","2018/05/14"],

                        },
                        yAxis: {
                            type: 'value',
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed',
                                    color: "#e6e6e6"
                                }
                            },
                        },
                        series:[{"name":"应用商城","type":"line","stack":"总量","data":[0,0,0,0,0,0,0,0,0,452696,243152,296163,247909,190102]},{"name":"实体推广CPA","type":"line","stack":"总量","data":[0,0,0,0,0,0,0,0,0,2,2,0,1,2]},{"name":"实体推广地推","type":"line","stack":"总量","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,1]},{"name":"客户端下载","type":"line","stack":"总量","data":[0,0,0,0,0,0,0,0,0,0,1,1,2,0]},{"name":"实体推广CPPA","type":"line","stack":"总量","data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]

                    };