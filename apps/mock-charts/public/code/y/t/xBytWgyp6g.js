var option={
            color: ['#eeee11', '#d73f45'],
            title:{
                text:'我的第一个报表'
            },
            tooltip:{},
            legend:{
                data:['销量']
            },
            xAxis:{
                data:['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子']
            },
            yAxis:{},
            series:[ {
                    name:'所有套数',
                    type:'bar',
                    "barGap": "20%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "top",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[50, 182, 174, 103, 93,50]
                },
                {
                    name:'住宅套数',
                    type:'bar',
                    "barGap": "20%",
                    "itemStyle": {
                        "normal": {
                            "label": {
                                "show": true,
                                "textStyle": {
                                    "color": "#333",
                                    "fontSize":12
                                },
                                "position": "top",
                                formatter: function(p) {
                                    return p.value;
                                }
                            }
                        }
                    },
                    data:[50, 182, 174, 103, 93,50]
                }
            ]


};
