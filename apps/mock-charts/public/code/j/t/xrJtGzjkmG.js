var obj={
    "data": {
        "linksList": [
            {
                "source": "2018",
                "target": "报表名称2",
            }
        ],
        "nodesList": [
            {
                "category": "1",
                "name": "报表名称2",
                "value": "10"
            },
            {
                "category": "0",
                "name": "2018",
                "value": "10"
            },
            {
                "category": "1",
                "name": "报表四",
                "value": "10"
            },
            {
                "category": "1",
                "name": "报表名称1",
                "value": "10"
            }
        ]
    },
    "resultCode": 0
}
console.log(obj)

var categories = [];
var nodes=[],links=[];
obj.data.nodesList.forEach((data)=>{
    nodes.push({
        category:data.category,
        name:data.name,
        value:data.value
    })
    if(categories.indexOf(data.category)==-1){
        categories.push(data.category)
    }
})
obj.data.linksList.forEach((data)=>{
    links.push({
        source:data.source,
        target:data.target
    })
})
categories=categories.map((data)=>{
    return {name:data}
})

console.log(categories,nodes,links)
option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animation: false,
        series : [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'force',
                data: nodes,
                links: links,
                categories: categories,
                roam: true,
                label: {
                    normal: {
                        position: 'right'
                    }
                },
                force: {
                    repulsion: 100
                }
            }
        ]
    };
