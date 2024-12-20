option = {
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "cross",
            "crossStyle": {
                "color": "#999"
            }
        }
    },
    "legend": {
        "top": 10,
        "data": ["CO", "NO2", "O3", "PM10", "PM2.5", "SO2", "折线的lenged"]
    },
    "xAxis": [{
        "type": "category",
        "data": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        "name": "月份"
    }],
    "yAxis": [{
        "type": "value",
        "name": "μg/m³"
    }, {
        "type": "value",
        "name": "mg/m³"
    }, {
        "type": "value",
        "name": "kg/m³",
        offset:50
    }],
    "color": ["#0e9ea9", "#f65eab", "#ffbd6d", "#ab73ce", "#0099fd", "#996b6b", "#1faeea", "#00d4c4", "#785654", "#59b0e3"],
    "series": [{
        "name": "NO2",
        "type": "line",
        "yAxisIndex": 0,
        "data": [1,5, 5,7,9, 10, 2, 3, 5,2, 6, 10],
        "label": {
            "normal": {
                "show": true,
                "position": "top"
            }
        }
    },{
        "name": "SO2",
        "type": "line",
        "yAxisIndex": 2,
        "data": [1,3, 5,7,9, 3, 2, 1, 5, 7, 9, 10],
        "label": {
            "normal": {
                "show": true,
                "position": "top"
            }
        }
    }, {
        "name": "CO",
        "type": "line",
        "yAxisIndex": 1,
        "data": [3, 5.9, 70, 23.2, 25.6, 8.7, 135.6, 162.2, 32.6, 20, 16.4, 3.3],
        "label": {
            "normal": {
                "show": true,
                "position": "top"
            }
        }
    }]
}