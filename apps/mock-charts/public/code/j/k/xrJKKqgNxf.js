option = {
    "series": [{
        "name": "评价数量",
        "type": "pie",
        "radius": ["0%", "60%"],
        "itemStyle": {
            "emphasis": {
                "shadowColor": "rgba(0, 0, 0, 0.5)",
                "shadowBlur": 10,
                "shadowOffsetX": 0
            }
        },
        "data": [{
            "name": "非常满意",
            "value": 10
        }, {
            "name": "一般满意",
            "value": 25
        }, {
            "name": "不满意",
            "value": 11
        }]
    }, {
        "type": "pie",
        "data": [100],
        "z": 1,
        "radius": ["66%", "0%"],
        "itemStyle": {
            "normal": {
                "color": "#fff"
            }
        },
        "silent": true,
        "labelLine": {
            "normal": {
                "show": false
            }
        }
    }, {
        "z": 0,
        "type": "pie",
        "radius": ["67%", "0%"],
        "silent": true,
        "itemStyle": {
            "normal": {
                "color": "#dbd7d6"
            }
        },
        "data": [100],
        "labelLine": {
            "normal": {
                "show": false
            }
        }
    }],
    "legend": {
        "left": "left",
        "data": ["非常满意", "一般满意", "不满意"],
        "orient": "vertical"
    },
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b} : {c} ({d}%)"
    },
    "title": {}
};