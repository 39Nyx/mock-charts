var data = [{
    name: '变频器',
    itemStyle: {
        color: '#ec6a33',
    },
    children: [{
        name: '运行',
        value: 500,
        itemStyle: {
            color: 'green',
        },
    },
    {
        name: '待机',
        value: 670,
        itemStyle: {
            color: 'blue',
        },
    },
    {
        name: '故障',
        value: 80,
        itemStyle: {
            color: 'red',
        },
    }, {
        name: '未知',
        value: 120,
        itemStyle: {
            color: 'yellow',
        },
    }]
}, {
    name: 'GPS',
    value: 15,
}];

option = {
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: ['10%', '90%'],
        label: {
            rotate: 'radial'
        }
    }
};
