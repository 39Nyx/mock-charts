let nodes = [{
    id: '0',
    x: 100,
    y: 100,
    //symbol: 'circle',
    symbolSize: 30,
    value: 30
}];
let links = [];

for (let i = 0; i < 50; i++) {
    nodes.push({
        id: `${i + 1}`,
        x: 100 + Math.cos(Math.PI / 4 + Math.PI * i / 100) * (50 + i % 2 * 2),
        y: 100 - Math.sin(Math.PI / 4 + Math.PI * i / 100) * (50 + i % 2 * 2),
        symbolSize: 20,
        value: 10 + Math.random() * 10
    });
    links.push({
        source: '0',
        target: `${i+1}`
    });
}

option = {
    title:{
        text: '扇形关系图'
    },
    tooltip: {},
    series: [{
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: nodes,
        links: links,
        roam: true,
        label: {
            show: true,
            position: 'right',
            formatter: '{b}'
        },
        labelLayout: {
            hideOverlap: true
        },
        scaleLimit: {
            min: 0.4,
            max: 2
        },
        lineStyle: {
            color: 'source',
            //curveness: 0.3
        }
    }]
};