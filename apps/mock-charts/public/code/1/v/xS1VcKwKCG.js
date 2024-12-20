option = {
    "color": ["#55a9ff", "#ff7767", "#ffbb56", "#ffff99", "#99dd66", "#34cc99", "#32aade", "#3a8aeb", "#869afd", "#b26ee5", "#ff88ab"],
    "title": {
        "top": 10,
        "left": 15,
        "textStyle": {
            "fontSize": 18,
            "fontWeight": "bold"
        },
        "text": "颜色不一 条形图（无法配置各个对象图例）"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "grid": {
        left: 30,
        height: 300,
        "containLabel": true
    },
    "xAxis": {
        "type": "value",
        "axisLabel": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    },
    "yAxis": {
        "type": "category",
        "scale": false,
        "axisLine": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "data": ["其他批发业", "建材批发", "投资与资产管理", "五金产品批发", "未列明商务服务业", "建筑装饰业", "未列明零售业", "食品批发", "专业咨询", "机械设备及电子产品批发"],
        "axisLabel": {
            "show": true,
            "inside": true,
            "textStyle": {
                "color": "#fff"
            }
        },
        "z": 3,
        "axisTick": {
            "show": false
        }
    },
    "series": {
        "type": "bar",
        "barWidth": 25,
        "label": {
            "normal": {
                "show": true,
                "formatter": "{c}",
                "position": "right"
            }
        },
        "data": [{
            "value": 2159,
            "itemStyle": {
                "normal": {
                    "color": "#55a9ff"
                }
            }
        }, {
            "value": 704,
            "itemStyle": {
                "normal": {
                    "color": "#ff7767"
                }
            }
        }, {
            "value": 677,
            "itemStyle": {
                "normal": {
                    "color": "#ffbb56"
                }
            }
        }, {
            "value": 501,
            "itemStyle": {
                "normal": {
                    "color": "#ffff99"
                }
            }
        }, {
            "value": 489,
            "itemStyle": {
                "normal": {
                    "color": "#99dd66"
                }
            }
        }, {
            "value": 463,
            "itemStyle": {
                "normal": {
                    "color": "#34cc99"
                }
            }
        }, {
            "value": 425,
            "itemStyle": {
                "normal": {
                    "color": "#32aade"
                }
            }
        }, {
            "value": 424,
            "itemStyle": {
                "normal": {
                    "color": "#3a8aeb"
                }
            }
        }, {
            "value": 404,
            "itemStyle": {
                "normal": {
                    "color": "#869afd"
                }
            }
        }, {
            "value": 392,
            "itemStyle": {
                "normal": {
                    "color": "#b26ee5"
                }
            }
        }]
    }
}