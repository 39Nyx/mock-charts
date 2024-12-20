data = [{
    "value": 84067,
    "name": "NL-3A"
}, {
    "value": 78477,
    "name": "FE-5A"
}, {
    "value": 45723,
    "name": "FE-3AC"
}, {
    "value": 40794,
    "name": "GX6"
}, {
    "value":33043,
    "name": "FE-S1"
}, {
    "value": 7690,
    "name": "FE-7A"
}, {
    "value": 3367,
    "name": "KC-1B"
}, {
    "value": 553,
    "name": "KC-2HB(15TD)"
}, {
    "value": 489,
    "name": "KC-2(15TD)"
}, {
    "value": 176,
    "name": "FE-7"
}, {
    "value": 42,
    "name": "FE-3AD"
}, {
    "value": 16,
    "name": "KC-2HB"
}, {
    "value": 11,
    "name": "FE-4KAKC-2"
}, {
    "value":5,
    "name": "NL-3"
}, {
    "value": 4,
    "name": "FE-6"
}, {
    "value":4,
    "name": "unknow"
}]

for (var n in data) {
    data[n]['name'] = data[n]['name'] + ' ' + data[n]['value'] + '%'
}

option = {
    // backgroundColor: "#000",
    title: {
        text: '“一带一路”沿线各省区市分析——上海',
        subtext: '纯属虚构',
        left: '50%',
        top: '30',
        textAlign: 'center',
        textStyle: {
            color: "#000",
            fontWeight: 'normal',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    series: [{
        type: 'treemap',
        width: '100%',
        height: '85%',
        top: '15%',
        roam: false, //是否开启拖拽漫游（移动和缩放）
        nodeClick: false, //点击节点后的行为,false无反应
        breadcrumb: {
            show: false
        },
        label: { //描述了每个矩形中，文本标签的样式。
            normal: {
                show: true,
                position: ['10%', '40%']
            }
        },
        itemStyle: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },
                borderWidth: 1,
                borderColor: '#fff',
            },

            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: data
    }]
};