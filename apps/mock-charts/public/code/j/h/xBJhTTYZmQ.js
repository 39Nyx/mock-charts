var names = [{
    "name": "Home"
}, {
    "name": "2016-01-08_4"
}, {
    "name": "2016-01-09_1005"
}, {
    "name": "2016-01-17_1005"
}, {
    "name": "2016-01-23_1094"
}, {
    "name": "2016-02-04_4"
}, {
    "name": "2016-03-12_4"
}, {
    "name": "2016-04-06_4"
}];

var links = [{
    "source": "Home",
    "target": "2016-01-08_4",
    "value": 4
}, {
    "source": "2016-01-08_4",
    "target": "2016-01-09_1005",
    "value": 2
}, {
    "source": "2016-01-09_1005",
    "target": "2016-01-17_1005",
    "value": 2
}, {
    "source": "2016-01-17_1005",
    "target": "2016-01-23_1094",
    "value": 2
}, {
    "source": "2016-01-08_4",
    "target": "2016-01-23_1094",
    "value": 1
}, {
    "source": "2016-01-23_1094",
    "target": "2016-02-04_4",
    "value": 3
}, {
    "source": "2016-01-08_4",
    "target": "2016-02-04_4",
    "value": 1
}, {
    "source": "2016-02-04_4",
    "target": "2016-03-12_4",
    "value": 4
}, {
    "source": "2016-03-12_4",
    "target": "2016-04-06_4",
    "value": 2
}]


option = {
    series: {
        type: 'sankey',
        layout: 'none',
        data: names,
        links: links,
    }
};