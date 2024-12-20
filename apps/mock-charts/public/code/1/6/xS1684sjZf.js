option = {
    "tooltip": {
        "show": false
    },
    "title": {
        "textStyle": {
            "color": "#666",
            "fontSize": "15",
            "fontWeight": "normal",
            "verticalAlign": "top"
        }
    },
    "legend": {
        "show": true,
        "textStyle": {
            "color": "#666"
        },
        "itemWidth": 15,
        "orient": "vertical",
        "top": "top",
        "left": "left",
        "borderColor": "#000",
        "padding": 15,
        "itemGap": 10
    },
    "radar": {
        "center": ["50%", "50%"],
        "nameGap": 10,
        "radius": "45%",
        "startAngle": 90,
        "indicator": [{
            "name": "值1/10",
            "max": 10
        }, {
            "name": "值2/10",
            "max": 10
        }, {
            "name": "值3/10",
            "max": 10
        }, {
            "name": "值4/10",
            "max": 10
        }, {
            "name": "值5/6",
            "max": 10
        }, {
            "name": "值6/6",
            "max": 10
        }, {
            "name": "值7/10",
            "max": 10
        }, {
            "name": "值8/10",
            "max": 10
        }, {
            "name": "值8/10",
            "max": 10
        }],
        "name": {
            "textStyle": {
                "color": "#4dabf1",
                "fontSize": "12"
            },
            "rich": {
               
                "greenLight": {
                    "height": 12,
                    "width": 10,
                    "color": "#666",
                    "backgroundColor": {
                        "image": "static/img/green-light.png"
                    }
                },
                "orangeLight": {
                    "height": 12,
                    "width": 10,
                    "color": "#666",
                    "backgroundColor": {
                        "image": "static/img/orange-light.png"
                    }
                },
                "grayLight": {
                    "height": 12,
                    "width": 10,
                    "color": "#666",
                    "backgroundColor": {
                        "image": "static/img/gray-light.png"
                    }
                }
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#c1defc"
            }
        },
        "splitLine": {
            "lineStyle": {
                "color": "#b5d8fb"
            }
        },
        "axisTick": {
            "show": false
        },
        "splitNumber": 1,
        "splitArea": {
            "areaStyle": {
                "color": ["#fff"]
            }
        }
    },
    "series": [{
        "type": "radar",
        "data": [{
            "value": [6.3, 2.5, 9.1, 5, 4.9, 6, 10, 9.4, 6.8],
            "name": "中国",
            "itemStyle": {
                "normal": {
                    "color": "#5ea7f3"
                }
            },
            "areaStyle": {
                "normal": {
                    "opacity": 0.3
                }
            }
        }],
        "lineStyle": {
            "color": "red"
        },
        "symbol": "circle"
    }]
}