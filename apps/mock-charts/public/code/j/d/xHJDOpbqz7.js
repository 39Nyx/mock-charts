option = {
    title: {
        text: 'Heterogeneous movie network',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 18
            },
        }
    },
    legend: {
        x: "center",
        data: ['Movie', 'Director', 'Actor']
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 10,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: 'Movie'
            }, {
                name: 'Director'
            }, {
                name: 'Actor'
            }],
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        fontSize: 8
                    },
                }
            },
            force: {
                repulsion: 10
            },
            //edgeSymbol: ['pin'],
            //edgeSymbolSize: [1, 10],
            edgeLabel: {
                normal: {
                    show: false,
                    textStyle: {
                        fontSize: 20
                    },
                    formatter: "{c}"
                }
            },
            data: [{
                    "name": 0,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 1,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 2,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 3,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 4,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 5,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 6,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 7,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 8,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 9,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 10,
                    "category": 0,
                    "draggable": "true"
                },
                {
                    "name": 11,
                    "category": 0,
                    "draggable": "true"
                },
            ],

            links: [{
                    "source": 0,
                    "target": "James Cameron"
                },
                {
                    "source": 1,
                    "target": "Gore Verbinski"
                },
                {
                    "source": 2,
                    "target": "Sam Mendes"
                },
                {
                    "source": 3,
                    "target": "Christopher Nolan"
                },
                {
                    "source": 4,
                    "target": "Andrew Stanton"
                },
                {
                    "source": 5,
                    "target": "Sam Raimi"
                },
                {
                    "source": 6,
                    "target": "Nathan Greno"
                },
                {
                    "source": 7,
                    "target": "Joss Whedon"
                },
                {
                    "source": 8,
                    "target": "David Yates"
                },
                {
                    "source": 9,
                    "target": "Zack Snyder"
                },
                {
                    "source": 10,
                    "target": "Bryan Singer"
                },
                {
                    "source": 11,
                    "target": "Marc Forster"
                },
                {
                    "source": 12,
                    "target": "Gore Verbinski"
                },
                {
                    "source": 13,
                    "target": "Gore Verbinski"
                },
                {
                    "source": 14,
                    "target": "Zack Snyder"
                },
                {
                    "source": 15,
                    "target": "Andrew Adamson"
                },
                {
                    "source": 16,
                    "target": "Joss Whedon"
                },
                {
                    "source": 17,
                    "target": "Rob Marshall"
                },
                {
                    "source": 18,
                    "target": "Barry Sonnenfeld"
                },
                {
                    "source": 19,
                    "target": "Peter Jackson"
                },
                {
                    "source": 20,
                    "target": "Marc Webb"
                },
            ],

            lineStyle: {
                normal: {
                    opacity: 0.7,
                    width: 1,
                    curveness: 0.1
                }
            }
        }
    ]
};