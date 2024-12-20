option = {
    backgroundColor: '#051d40',
    "color": ["rgba(6,211,196,1)", "rgba(6,211,196,0)"],
    "series": [{
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["60%", "66%"],
        "hoverAnimation": false,
        "data": [{
            "name": "",
            "value": 2,
            "z": 5,
            "labelLine": {
                "show":false,
                "length2": 80,
                "lineStyle": {
                    "color": "#3cefff",
                    "width": 1.5
                }
            },
            label: {
                normal: {
                show : true,//隐藏标识文字
                formatter:'{c}%',
                position: 'center',//隐藏引导线
                textStyle:{
                    color:'#fff',
                    fontSize:30
                }
                }
            }
        }, {
            "name": "",
            "value": 55,
            "labelLine": {
                "show": false,
                "emphasis": {
                    "show": false
                }
            }
        }
        ]
    },{
        "type": "pie",
        "center": ["50%", "50%"],
        "radius": ["65%", "66%"],
        "hoverAnimation": false,
        "data": [{
            "name": "",
            "value": 100,
            "z": 5,
            "labelLine": {
                "show":false,
                "length2": 80,
                "lineStyle": {
                    "color": "#fffff",
                    "width": 1.5
                }
            },
            itemStyle:{
                normal:{
                }
            },
            label: {
                normal: {
                position: 'inner',//隐藏引导线
                show : false//隐藏标识文字
                }
            }
        }, 
        ]
    }]
}