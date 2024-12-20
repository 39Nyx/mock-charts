entities = ['小明', '小红', '小红红', '大明明', '大红红']
tpl1 = { 'e1': '小明', 'rel': 'like1', 'e2': '小红' }
tpl2 = { 'e1': '小明', 'rel': 'like2', 'e2': '小红红' }
tpl3 = { 'e1': '大明明', 'rel': 'like4', 'e2': '大红红' }
triples = [tpl1, tpl2, tpl3]

// 指定图表的配置项和数据
var option = {}
option['title'] = {//图标信息
    text: 'triples relations',
    link: 'http://172.19.12.30:7474/browser/'
}
option['tooltip'] = {},//提示框组件
    option['animationDurationUpdate'] = 1500//数据更新动画的时长
option['animationEasingUpdate'] = 'quinticInOut',//数据更新动画的缓动效果
    option['label'] = { normal: { show: true, textStyle: { fontSize: 12 }, } }
option['legend'] = {
    x: "center",
    show: true,
    data: []
}
var series = {
    type: 'graph',
    layout: 'force',
    symbolSize: 60,
    focusNodeAdjacency: true,
    roam: true,
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 14
            },
        }
    },
    //力量
    force: {
        repulsion: 1000
    },
    edgeSymbolSize: [4, 50],
    edgeLabel: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 14//边字体
            },
            formatter: "{c}"
        }
    },
    //边属性
    lineStyle: {
        normal: {
            opacity: 0.9,
            width: 2,
            curveness: 0.15
        }
    }
}

//categories
var categories = []
//data
var data = []
//关系
var links = []

for (var e of entities) {
    categories.push({ name: e })
}
for (var name of entities) {
    node = {
        name: name,
        category: entities.indexOf(name),
        draggable: true,
    }
    data.push(node)
    option['legend']['data'].push(name)
}
for (var tpl of triples){
    e1=tpl['e1']
    rel=tpl['rel']
    e2=tpl['e2']
    edge={
        source: e1,
        target: e2,
        value: rel
    }
    links.push(edge)
}
series['categories'] = categories
series['data'] = data
series['links'] = links
option['series'] = series