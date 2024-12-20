var assistdata = [];
for (let i = 0; i < 40; i++) {
    assistdata.push({
        name: '1',
        value: 1
    })
}

option = {
    "series": [{
        "name": "辅助背景",
        "type": "pie",
        "silent": true,
        "radius": ["62%", "90%"],
        "center": ["50%", "50%"],
        "avoidLabelOverlap": false,
        "color": ["#00ff00"],
        "hoverAnimation": false,
        "label": {
            "show": false
        },
        "labelLine": {
            "show": false
        },
        "itemStyle": {
            "borderColor": "#012C36",
            "borderWidth": 4
        },
        "data": assistdata
    }, {
        "name": "百分比",
        "type": "pie",
        "silent": true,
        "radius": ["62%", "90%"],
        "center": ["50%", "50%"],
        "avoidLabelOverlap": false,
        "color": ["transparent", "#001F2A"],
        "hoverAnimation": false,
        "label": {
            "normal": {
                "show": false
            }
        },
        "data": [{
            "name": "使用",
            "value": 25.6
        }, {
            "name": "未使用",
            "value": 74.4
        }]
    }]
}