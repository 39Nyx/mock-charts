option = {
    title: [{
        text:"{a|本省情况:}",
        textAlign: 'center',
        left:"3%",
        backgroundColor: '#7ad8a6',
        borderRadius: [0, 25, 25, 0],
        textStyle: {
            fontWeight: 'normal',
            color: "#fff",
            textAlign: 'right',
            rich:{
                a: {
                    backgroundColor:'#7ad8a6',
                    height:40,
                    width: 120,
                    fontSize: '20',
                    align:'center',
                    borderRadius: [0, 25, 25, 0],
                }
            }
        },
    },{
        text:"{a|集团情况:}",
        textAlign: 'center',
        top:'30%',
        left:"3%",
        backgroundColor: '#b8bcfb',
        borderRadius: [0, 25, 25, 0],
        textStyle: {
            fontWeight: 'normal',
            color: "#fff",
            textAlign: 'right',
            rich:{
                a: {
                    backgroundColor:'#b8bcfb',
                    height:40,
                    width: 120,
                    fontSize: '20',
                    align:'center',
                    borderRadius: [0, 25, 25, 0],
                }
            }
        },
    }],
    "series": [{
        "name": "中国",
        "type": "map",
        "mapType": "china",
        "zoom": 1.2,
        roam: true,
        "selectedMode": false,
        "layoutCenter": ['50%', '53%'],
        "layoutSize": "102%",
        silent: true, 
        "itemStyle": {
            "normal": {
                "borderWidth": 1.8,
                "borderColor": "#fff",
                areaColor: "#eaf4f6",
            },
        },
        "data": []
    },{
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        center: ['5%', '15%'],
        radius: [35, 50],
        labelLine: {
            show: false  
        },
        data: [{
                value: 60,
                label: {
                    normal: {
                        rich:{
                            a: {
                                color: "#77d7a7",
                                fontSize: '25',
                                align:'left',
                            },
                            b: {
                                fontSize: '20',
                                color: "#4e4e4e",
                                align:'left',
                                padding: [-10, 0, 0, 0]
                            }
                        },
                        formatter: params => {
                            return (
                                "{a|45%} \n {b|同比} "
                            );
                        },
                        position: 'center',
                        show: true,
                    }  
                },
                itemStyle: {
                    normal: {
                        color: "#E1E8EE"
                    }
                },
            }, {
                value: 40,
                itemStyle: {
                    normal: {
                        color: '#77d7a7'
                    }
                },
                label: {
                    normal: {
                        padding: [135 ,-10, 130, 300],
                        rich:{
                            a: {
                                color: "#77d7a7",
                                fontSize: '25',
                                align:'left',
                                padding: [0, 10, 5, 0]
                            },
                            b: {
                                fontSize: '20',
                                color: "#4e4e4e",
                                align:'left',
                                fontWeight: "bold",
                            }
                        },
                        formatter: params => {
                            return (
                                "{b|固定资产投资完成累计}\n{a|" +params.value +"}" 
                            );
                        },
                        position: 'center',
                        show: true,
                    }  
                },
            },
        ]
    }]
}