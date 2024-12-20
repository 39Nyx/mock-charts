option = {
    "xAxis": {
        "axisLabel": {
            "interval": 0
        },
        "data": ["跑窗口数", "跑腿次数", "申报材料份数", "办理时限"]
    },
    "yAxis": {},
    "series": [{
        "type": "bar",
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "formatter": function(params) {
                    if (params.value < 1) {
                        return params.value * 60 + '分钟';
                    }
                }
            }
        },
        "data": [3, 8, 41, 2],
        "name": "改革前"
    }, {
        "type": "bar",
        "label": {
            "normal": {
                "show": true,
                "position": "top",
                "formatter": function(params) {
                    if (params.value < 1) {
                        return params.value * 60 + '分钟';
                    }
                }
            }
        },
        "data": [1, 1, 21, 0.6666666666666666],
        "name": "改革后"
    }],
    "legend": {
        "data": ["改革前", "改革后"]
    },
    "toolbox": {
        "feature": {
            "magicType": {
                "type": ["line", "bar"]
            }
        }
    },
    "title": {},
    "tooltip": {
        "formatter": function(params) {
            var value = params.value;
            if (value < 1) {
                value = value * 60 + '分钟';
            }
            return params.seriesName + '<br> ' +
                params.name + ': ' + value;
        }
    }
};