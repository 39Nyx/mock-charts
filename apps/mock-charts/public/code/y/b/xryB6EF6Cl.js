
option =  {
    "backgroundColor": "transparent",
    "textStyle": {
        "color": "#525252"
    },
    "color": ["#6cc505", "#2fb3ff", "#ff9703", "#ff623e", "#ff2f74", "#fdc827", "#705eb4", "#30d9d9"],
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        formatter: function(param){
          //  console.log(param);
            return '测试测试'
        }
    },
    "legend": {
        "data": ["爱奇艺", "优酷", "腾讯", "搜狐", "乐视", "芒果", "PPTV", "土豆"],
        "show": true,
        "orient": "vertical",
        "bottom": 10,
        "right": 15,
        "itemWidth": 14,
        "selectedMode": false
    },
    "grid": {
        "left": 100,
        "right": 50,
        "top": 10,
        "height": 320,
        "containLabel": false
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
        "data": ["人民的名义", "剃刀边缘", "三生三世十里\n桃花", "因为遇见你", "微微一笑很倾\n城", "鸡毛飞上天", "琅琊榜", "欢乐颂", "锦绣未央", "大唐荣耀"],
        "axisTick": {
            "inside": false,
            "show": false
        },
        "axisLabel": {
            "show": true,
            "interval": 0
        },
        "inverse": true
    },
    "series": [{
        "name": "爱奇艺",
        "type": "bar",
        "stack": "前台播放量",
        "label": {
            "normal": {
                "show": false
            }
        },
        "barWidth": 15,
        "data": [31476415, 6841569, 6372813, 5583119, "-", 2908400, 1657213, 1352003, 1233351, "-"]
    }, {
        "name": "优酷",
        "type": "bar",
        "stack": "前台播放量",
        "label": {
            "normal": {
                "show": false
            }
        },
        "barWidth": 15,
        "data": [34910612, "-", 5835834, "-", 9061273, "-", 918930, 1234345, 1718025, "-"]
    }, {
        "name": "腾讯",
        "type": "bar",
        "stack": "前台播放量",
        "label": {
            "normal": {
                "show": false
            }
        },
        "barWidth": 15,
        "data": [59371212, 31552653, 7697182, 6149731, "-", "-", 2170058, 2167968, 1054977, 3799639]
    }, {
        "name": "搜狐",
        "type": "bar",
        "stack": "前台播放量",
        "label": {
            "normal": {
                "show": false
            }
        },
        "barWidth": 15,
        "data": [11304567, 4820821, 1425845, "-", "-", 1962332, 167684, 131823, "-", "-"]
    }, {
        "name": "乐视",
        "type": "bar",
        "stack": "前台播放量",
        "label": {
            "normal": {
                "show": false
            }
        },
        "barWidth": 15,
        "data": ["-", 3830349, 1626410, 1456297, "-", 1582782, 354190, 249865, "-", "-"]
    }, {
        "name": "芒果",
        "type": "bar",
        "stack": "前台播放量",
        "label": {
            "normal": {
                "show": false
            }
        },
        "barWidth": 15,
        "data": [4188364, "-", "-", 764275, "-", "-", "-", "-", "-", "-"]
    }, {
        "name": "PPTV",
        "type": "bar",
        "stack": "前台播放量",
        "label": {
            "normal": {
                "show": false
            }
        },
        "barWidth": 15,
        "data": [46796395, "-", 2009009, "-", "-", "-", "-", 144042, "-", "-"]
    }, {
        "name": "土豆",
        "type": "bar",
        "stack": "前台播放量",
        "label": {
            "normal": {
                "show": false
            }
        },
        "barWidth": 15,
        "data": ["-", "-", 103843, "-", "-", "-", 19655, "-", "-", "-"]
    }, {
        "name": "总量",
        "type": "bar",
        "stack": "前台播放量",
        "label": {
            "normal": {
                "show": true,
                "position": "right",
                formatter: function(value){
                    console.log(value);
                    return value.dataIndex
                }
            }
        },
        "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
}