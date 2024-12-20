var categories = ['c1', 'c2', 'c3'];

var nodes = [{
    name: 'A',
    value: 10,
    category: 0
}, {
    name: 'B',
    value: 10,
    category: 1
}, {
    name: 'C',
    value: 20,
    category: 1
}, {
    name: 'D',
    value: 40,
    category: 2
}];

var links = [{
    source: 'A',
    target: 'B',
    value: 1,
}, {
    source: 'A',
    target: 'C',
    value: 5
}, {
    source: 'B',
    target: 'D',
    value: 5
}, {
    source: 'A',
    target: 'D',
    value: 10
}]

nodes.forEach(function(item) {
    item.symbolSize = item.value
})
links.forEach(function(item) {
    item.lineStyle = {
        width: item.value
    }
})

option = {
    title: {
        text: '关系图例子'
    },
    series: [{
        type: 'graph',
        layout: 'force',
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'bottom'
            }
        },
        categories: categories,
        nodeScaleRatio: 1,
        force: {
            initLayout: 'circular',
            gravity: 0,
            repulsion: 600,
            edgeLength: 200
        },
        nodes: nodes,
        links: links
    }]
};