option = {
    "visualMap": [{
        "min": 0,
        "itemHeight": 120,
        "text": ["\u5706\u5f62\u5927\u5c0f\uff1a\u4e8b\u9879\u6570\u91cf"],
        "max": 4,
        "precision": 0.1,
        "outOfRange": {
            "symbolSize": [10, 70],
            "color": ["rgba(255,255,255,.2)"]
        },
        "itemWidth": 30,
        "textGap": 30,
        "inRange": {
            "symbolSize": [10, 70]
        },
        "controller": {
            "inRange": {
                "color": ["#c23531"]
            },
            "outOfRange": {
                "color": ["#444"]
            }
        },
        "top": "10%",
        "calculable": true,
        "left": "right",
        "dimension": 2
    }],
    "series": [{
        "data": [
            ["\u53bf\u56fd\u571f\u5c40", "\u9762\u5411\u5176\u4ed6\u7ec4\u7ec7", 1],
            ["\u53bf\u56fd\u571f\u5c40", "\u9762\u5411\u4f01\u4e1a", 1],
            ["\u53bf\u6559\u80b2\u5c40", "\u9762\u5411\u4e2a\u4eba", 2],
            ["\u53bf\u8d22\u653f\u5c40", "\u9762\u5411\u884c\u653f\u673a\u5173", 2],
            ["\u53bf\u4eba\u793e\u5c40", "\u9762\u5411\u4e2a\u4eba", 1],
            ["\u53bf\u7edf\u8ba1\u5c40", "\u9762\u5411\u4e2a\u4eba", 1],
            ["\u53bf\u4ea4\u901a\u8fd0\u8f93\u5c40", "\u9762\u5411\u4e2a\u4eba", 4],
            ["\u53bf\u6559\u80b2\u5c40", "\u9762\u5411\u4e8b\u4e1a\u5355\u4f4d", 1],
            ["\u53bf\u516c\u5b89\u5c40", "\u9762\u5411\u4e2a\u4eba", 1],
            ["\u53bf\u56fd\u571f\u5c40", "\u9762\u5411\u4e8b\u4e1a\u5355\u4f4d", 1],
            ["\u53bf\u56fd\u571f\u5c40", "\u9762\u5411\u4e2a\u4eba", 1],
            ["\u53bf\u4ea4\u901a\u8fd0\u8f93\u5c40", "\u9762\u5411\u884c\u653f\u673a\u5173", 1],
            ["\u53bf\u56fd\u7a0e\u5c40", "\u9762\u5411\u4f01\u4e1a", 1],
            ["\u53bf\u8d22\u653f\u5c40", "\u9762\u5411\u4e8b\u4e1a\u5355\u4f4d", 1],
            ["\u53bf\u6559\u80b2\u5c40", "\u9762\u5411\u4f01\u4e1a", 2],
            ["\u53bf\u6c11\u653f\u5c40", "\u9762\u5411\u884c\u653f\u673a\u5173", 1],
            ["\u53bf\u6559\u80b2\u5c40", "\u9762\u5411\u884c\u653f\u673a\u5173", 1],
            ["\u53bf\u8d22\u653f\u5c40", "\u9762\u5411\u4e2a\u4eba", 1]
        ],
        "name": "\u4e8b\u9879\u6570\u91cf",
        "type": "scatter"
    }],
    "grid": {
        "bottom": "10%",
        "right": 150,
        "top": "18%"
    },
    "yAxis": {
        "data": ["\u9762\u5411\u4e2a\u4eba", "\u9762\u5411\u4f01\u4e1a", "\u9762\u5411\u4e8b\u4e1a\u5355\u4f4d", "\u9762\u5411\u884c\u653f\u673a\u5173", "\u9762\u5411\u5176\u4ed6\u7ec4\u7ec7"],
        "splitLine": {
            "show": false
        },
        "nameGap": 20,
        "type": "category",
        "nameLocation": "end",
        "name": "\u7528\u6237\u5bf9\u8c61"
    },
    "tooltip": {
        "backgroundColor": "#222",
        "borderColor": "#777",
        "padding": 10,
        "borderWidth": 1
    },
    "xAxis": {
        "data": ["\u53bf\u56fd\u571f\u5c40", "\u53bf\u6559\u80b2\u5c40", "\u53bf\u8d22\u653f\u5c40", "\u53bf\u4eba\u793e\u5c40", "\u53bf\u7edf\u8ba1\u5c40", "\u53bf\u4ea4\u901a\u8fd0\u8f93\u5c40", "\u53bf\u516c\u5b89\u5c40", "\u53bf\u56fd\u7a0e\u5c40", "\u53bf\u6c11\u653f\u5c40"],
        "splitLine": {
            "show": false
        },
        "axisLabel": {
            "interval": 0
        },
        "nameGap": 16,
        "type": "category",
        "name": "\u90e8\u95e8"
    }
};