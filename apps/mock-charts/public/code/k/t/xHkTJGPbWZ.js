
option = {
    "title": {
        "text": "ISO测试时间及BUG趋势"
    },
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "data": [
            "测试天数",
            "bug总数"
        ]
    },
    "toolbox": {
        "show": false,
        "feature": {
            "dataZoom": {
                "yAxisIndex": "none"
            },
            "dataView": {
                "readOnly": false
            },
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
    "dataZoom": {
        "show": false,
        "start": 0,
        "end": 100
    },
    "xAxis": {
        "type": "category",
        "boundaryGap": true,
        "data": [
            "1.5.0.11",
            "1.5.0.12",
            "1.5.0.13",
            "1.5.0.14",
            "1.5.0.15",
            "1.5.0.16",
            "1.5.0.17",
            "1.5.0.18",
            "1.5.0.19"
        ]
    },
    "yAxis": [
        {
            "type": "value",
            "scale": true,
            "name": "时间(天)",
            "axisLabel": {
                "formatter": "{value}"
            },
            "max": 100,
            "min": 0,
            "boundaryGap": [
                0.2,
                0.2
            ]
        },
        {
            "type": "value",
            "scale": true,
            "name": "BUG数",
            "max": 100,
            "min": 0,
            "boundaryGap": [
                0.2,
                0.2
            ]
        }
    ],
    "series": [
        {
            "name": "测试天数",
            "type": "bar",
            "label": {
                "normal": {
                    "show": true,
                    "position": "inside"
                }
            },
            "barWidth": 40,
            "xAxisIndex": 0,
            "yAxisIndex": 1,
            "data": [
                32,
                59,
                29,
                9,
                18,
                17,
                16,
                15,
                20
            ]
        },
        {
            "name": "bug总数",
            "type": "line",
            "data": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ]
        }
    ]
}