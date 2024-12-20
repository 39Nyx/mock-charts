option = {
    "series": [{
        "stack": "num",
        "label": {
            "normal": {
                "show": true,
                "position": "insideRight",
                "formatter": function(params) {
                    if(params.value ===0){
                        return '';
                    }
                    return params.value;
                }
            }
        },
        "data": [1, 1, 1, 1, 1, 1, 0, 5, 1],
        "type": "bar",
        "name": "\u8bc1\u7167"
    }, {
        "stack": "num",
        "label": {
            "normal": {
                "show": true,
                "position": "insideRight",
                "formatter": function(params) {
                    if(params.value ===0){
                        return '';
                    }
                    return params.value;
                }
            }
        },
        "data": [0, 0, 0, 0, 0, 1, 2, 0, 0],
        "type": "bar",
        "name": "\u6279\u6587"
    }, {
        "stack": "num",
        "label": {
            "normal": {
                "show": true,
                "position": "insideRight",
                "formatter": function(params) {
                    if(params.value ===0){
                        return '';
                    }
                    return params.value;
                }
            }
        },
        "data": [0, 1, 0, 0, 0, 1, 2, 0, 0],
        "type": "bar",
        "name": "\u8bc1\u660e"
    }, {
        "stack": "num",
        "label": {
            "normal": {
                "show": true,
                "position": "insideRight",
                "formatter": function(params) {
                    if(params.value ===0){
                        return '';
                    }
                    return params.value;
                }
            }
        },
        "data": [0, 3, 0, 0, 0, 1, 0, 1, 0],
        "type": "bar",
        "name": "\u5176\u5b83"
    }],
    "legend": {
        "data": ["\u8bc1\u7167", "\u6279\u6587", "\u8bc1\u660e", "\u5176\u5b83"]
    },
    "tooltip": {
        "axisPointer": {
            "type": "shadow"
        },
        "trigger": "axis"
    },
    "yAxis": {
        "data": ["\u53bf\u516c\u5b89\u5c40", "\u53bf\u4ea4\u901a\u8fd0\u8f93\u5c40", "\u53bf\u7edf\u8ba1\u5c40", "\u53bf\u56fd\u7a0e\u5c40", "\u53bf\u4eba\u793e\u5c40", "\u53bf\u56fd\u571f\u5c40", "\u53bf\u8d22\u653f\u5c40", "\u53bf\u6559\u80b2\u5c40", "\u53bf\u6c11\u653f\u5c40"],
        "type": "category"
    },
    "grid": {
        "right": "4%",
        "containLabel": true,
        "bottom": "3%",
        "left": "3%"
    },
    "xAxis": {
        "type": "value"
    }
};