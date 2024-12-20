// 缺点： 无法配置出对应的legend
option = {
    "color": ["#55a9ff", "#ff7767", "#ffbb56", "#ffff99"],
    "title": {
        "text": "完成情况对比 柱状图",
        "padding": 0,
        "textStyle": {
            "fontSize": 18,
            "fontWeight": "bold"
        },
        "top": 15,
        "left": 20
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        "confine": true
    },
    "grid": {
        "left": 36,
        "top": 60,
        "bottom": 60,
        "right": 40,
        "containLabel": true
    },
    "xAxis": {
        "type": "category",
        "scale": false,
        "data": ["行政许可", "行政处罚", "红名单", "黑名单"],
        "boundaryGap": true,
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#8aa3a3"
            },
            "interval": 0,
            "rotate": 0
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#8aa3a3"
            }
        },
        "axisTick": {
            "show": true
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": "#2d545f",
                "type": "solid"
            }
        },
        "z": 0
    },
    "yAxis": {
        "type": "value",
        "scale": false,
        "data": [],
        "position": "left",
        "axisLabel": {
            "show": true,
            "inside": false,
            "textStyle": {
                "color": "#8aa3a3"
            },
            "interval": 0,
            "rotate": 0
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#8aa3a3"
            }
        },
        "axisTick": {
            "show": true
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#2d545f",
                "type": "solid"
            }
        },
        "z": 0
    },
    "series": [{
        "name": "已完成",
        "type": "bar",
        "stack": "总量",
        "barWidth": 40,
        "label": {
            "normal": {
                "show": true,
                "formatter": "{c}",
                "position": "center",
                "textStyle": {
                    "color": " #fff"
                }
            }
        },
        "data": [{    //配置单根柱子颜色
            "value": 146595,
            "itemStyle": {
                "normal": {
                    "color": "#00cccc"
                }
            }
        }, {
            "value": 39366,
            "itemStyle": {
                "normal": {
                    "color": "#cc88ff"
                }
            }
        }, {
            "value": 44230,
            "itemStyle": {
                "normal": {
                    "color": "#99dd66"
                }
            }
        }, {
            "value": 81575,
            "itemStyle": {
                "normal": {
                    "color": "#55aaff"
                }
            }
        }]
    }, {
        "name": "未完成",
        "type": "bar",
        "stack": "总量",
        "barWidth": 40,
        "label": {
            "normal": {
                "show": true,
                "formatter": "{c}",
                "position": "center",
                "textStyle": {
                    "color": " #000"
                }
            }
        },
        "data": [{  
            "value": 50000,
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0.1)"
                }
            }
        }, {
            "value": 20000,
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0.1)"
                }
            }
        }, {
            "value": 123456,
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0.1)"
                }
            }
        }, {
            "value": 12536,
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,0,0,0.1)"
                }
            }
        }]
    }]
}