app.title = '嵌套环形图';

option = {
    backgroundColor: "#fff",
    title: {
        "text": '总人数',
        "subtext": '341,362',
        "x": '50%',
        "y": '45%',
        textAlign: "center",
        "textStyle": {
            "fontWeight": 'normal',
            "fontSize": 12
        },
        "subtextStyle": {
            "fontWeight": 'bold',
            "fontSize": 14,
            "color": '#333'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        //orient: 'vertical',
        x: 'center',
        y:'bottom',
        data:['微信企业号','OA','手工录入','钉钉']
    },
    series: [
        {
            name:'来源',
            type:'pie',
            radius: ['40%', '55%'],
            "label": {'normal':{
                "show": false
            }},
            data:[
                {value:3588, name:'微信企业号',
            "itemStyle": {
                "normal": {
                    "color": '#ddd'
                }
            }},
                {value:3784, name:'OA',
            "itemStyle": {
                "normal": {
                    "color": '#ccc'
                }
            }},
                {value:13742, name:'手工录入',
            "itemStyle": {
                "normal": {
                    "color": '#bbb'
                }
            }},
                {value:10894, name:'钉钉',
            "itemStyle": {
                "normal": {
                    "color": '#aaa'
                }
            }}
            ]
        }
    ]
};