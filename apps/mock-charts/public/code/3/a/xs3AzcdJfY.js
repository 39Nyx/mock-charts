option = {
    "title":{
        "text":"总数量",
        "textStyle":{
            "fontSize":16,
            "color":"#666"
        },
        "subtextStyle":{
            "fontSize":20,
            "fontWeight":"bold",
            "color":"black"
        },
        "textAlign":"center",
        "x":"34.5%",
        "y":"40%",
        "subtext":1223183
    },
    "tooltip":{
        "trigger":"item",
        "formatter":{
            "_custom":{
                "type":"function",
                "display":"<span>ƒ</span> formatter(parms)"
            }
        }
    },
    "grid":{
        "containLabel":true,
        "left":0,
        "right":0,
        "bottom":0,
        "top":0
    },
    "legend":{
        "type":"scroll",
        "orient":"vertical",
        "left":"75%",
        "align":"left",
        "top":"middle",
        "textStyle":{
            "color":"#8C8C8C"
        },
        "height":350
    },
    "series":[
        {
            "type":"pie",
            "center":[
                "35%",
                "50%"],
            "radius":[
                "50%",
                "80%"],
            "clockwise":false,
            "label":{
                "normal":{
                    "show":true,
                    "position":"outter",
                    "formatter":"{b}：{d|{c}（{d}%）}",
                    "rich":{
                        "d":{
                            "fontWeight":"bolder"
                        }
                    }
                }
            },
            "labelLine":{
                "normal":{
                    "length":5,
                    "length2":3,
                    "smooth":true
                }
            },
            "data":[
                {
                    "name":"7A 插座",
                    "value":852537
                },
                {
                    "name":"10A 插座",
                    "value":131571
                },
                {
                    "name":"ESF37",
                    "value":46483
                },
                {
                    "name":"131S 空气净化器",
                    "value":38603
                },
                {
                    "name":"智能灯泡",
                    "value":35210
                },
                {
                    "name":"其他",
                    "value":118779
                }]
        }]
}