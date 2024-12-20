option = {
    "title": {
        "text": "2017年4月至8月测站到报率",
        "left": "center"
    },
    "color": [
        "#1fbcd2",
        "#a23746"
    ],
    "tooltip": {
        "formatter": "{b}, {c}%"
    },
    "legend": {
        "data": []
    },
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "feature": {
            "dataZoom": {},
            "magicType": {
                "type": [
                    "line",
                    "bar"
                ]
            },
            "restore": {},
            "saveAsImage": {}
        }
    },
    "xAxis": {
        "type": "value",
        "axisLabel": {
            "formatter": "{value}%"
        }
    },
    "yAxis": {
        "type": "category",
        "data": [
            '咸宁市', '襄阳市', '黄石市', '恩施州', '十堰市', '武汉市', '孝感市', '随州市', '鄂州市', '荆门市', '黄冈市', '宜昌市', '荆州市'
        ],
        "axisLabel": {
            "interval": 0
        }
    },
    "series": [
        {
            "type": "bar",
            "itemStyle": {
                "normal": {
                    "label": {
                        "show": true,
                        "formatter": "{c}%"
                    },
                    "labelLine": {
                        "show": true
                    }
                }
            },
            "data": [
                37.68,61.60,63.22,67.44,68.08,73.83,74.70,77.06,79.63,81.74,84.81,87.33,97.86
            ]
        }
    ]
};