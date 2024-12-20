option = {
    "title": {
        "text": ""
    },
    "legend": [{
        "data": ["楼房地址", "小区名称", "楼栋名称", "房号", "服务性质", "房主姓名", "房主身份证号", "房主电话", "房屋面积", "房屋间数", "现居住人数"]
    }],
    "series": [{
        "label": {
            "normal": {
                "show": true,
                "textStyle": {
                    "fontSize": 22
                }
            }
        },
        "circular": {
            "rotateLabel": true
        },
        "focusNodeAdjacency": true,
        "roam": true,
        "top": 150,
        "bottom": 80,
        "data": [{
            "category": "楼房地址",
            "name": "梅苑路42号"
        }, {
            "category": "小区名称",
            "name": "渌江明珠"
        }, {
            "category": "楼栋名称",
            "name": "2栋"
        }, {
            "category": "房号",
            "name": "203"
        }, {
            "category": "服务性质",
            "name": "商品房"
        }, {
            "category": "房主姓名",
            "label": {
                "normal": {
                    "textBorderWidth": 3,
                    "textBorderColor": 'blue',
                }
            },
            "name": "刘祖全"
        }, {
            "category": "房主身份证号",
            "name": "512501197203035172"
        }, {
            "category": "房主电话",
            "name": "18695485458"
        }, {
            "category": "房屋面积",
            "name": 89
        }, {
            "category": "房屋间数",
            "name": 3
        }, {
            "category": "现居住人数",
            "name": "2"
        }],
        "links": [{
            "target": "渌江明珠",
            "category": "小区名称",
            "source": "梅苑路42号"
        }, {
            "target": "2栋",
            "category": "楼栋名称",
            "source": "梅苑路42号"
        }, {
            "target": "203",
            "category": "房号",
            "source": "梅苑路42号"
        }, {
            "target": "商品房",
            "category": "服务性质",
            "source": "梅苑路42号"
        }, {
            "target": "刘祖全",
            "category": "房主姓名",
            "source": "梅苑路42号"
        }, {
            "target": "512501197203035172",
            "category": "房主身份证号",
            "source": "梅苑路42号"
        }, {
            "target": "18695485458",
            "category": "房主电话",
            "source": "梅苑路42号"
        }, {
            "target": '89',
            "category": "房屋面积",
            "source": "梅苑路42号"
        }, {
            "target": '3',
            "category": "房屋间数",
            "source": "梅苑路42号"
        }, {
            "target": "2",
            "category": "现居住人数",
            "source": "梅苑路42号"
        }],
        "layout": "circular",
        "symbolSize": 25,
        "edgeLabel": {
            "normal": {
                "show": true,
                "textStyle": {
                    "fontSize": 20
                },
                "formatter": function(param) {
                    return param.data.category;
                }
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "curveness": 0.1,
                "opacity": 0.9
            }
        },
        "type": "graph",
        "categories": [{
            "name": "楼房地址"
        }, {
            "name": "小区名称"
        }, {
            "name": "楼栋名称"
        }, {
            "name": "房号"
        }, {
            "name": "服务性质"
        }, {
            "name": "房主姓名"
        }, {
            "name": "房主身份证号"
        }, {
            "name": "房主电话"
        }, {
            "name": "房屋面积"
        }, {
            "name": "房屋间数"
        }, {
            "name": "现居住人数"
        }]
    }],
    "animationEasingUpdate": "quinticInOut",
    "tooltip": {
        "formatter": function(param) {
            if (param.dataType === 'edge') {
                return param.data.category + ': ' + param.data.target;
            }
            return param.data.category + ': ' + param.data.name;
        }
    },
    "animationDurationUpdate": 1500
};