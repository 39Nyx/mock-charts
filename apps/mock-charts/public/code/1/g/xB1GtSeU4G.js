option = {

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        right:0,
                        top:30,
                        height:120,
                        itemWidth:8,
                        itemHeight:8,
                        itemGap:10,
                        textStyle:{
                            color: '#333',
                            fontSize:10
                        },
                        orient:'vertical',
                        data:['精选包会员','喜乐包会员','咪咕FM','咪咕会员','咪咕免费','奥运专享包','喜乐包会员','咪咕视频流量运营包','黑钻会员','按次会员']
                    },

                    calculable : true,
                    series : [
                        {
                            name:'半径模式',
                            type:'pie',
                            radius : [20, 90],
                            center : ['30%', '50%'],
                            roseType : 'radius',
                            label: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            lableLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:[
                                {value:10, name:'精选包会员'},
                                {value:5, name:'喜乐包会员'},
                                {value:15, name:'咪咕FM'},
                                {value:25, name:'咪咕会员'},
                                {value:20, name:'咪咕免费'},
                                {value:35, name:'奥运专享包'},
                                {value:30, name:'喜乐包会员'},
                                {value:40, name:'咪咕视频流量运营包'},
                                {value:10, name:'黑钻会员'},
                                {value:5, name:'按次会员'},
                            ]
                        },

                    ]
                };