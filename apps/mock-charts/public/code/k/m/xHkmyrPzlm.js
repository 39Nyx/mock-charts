data = [{
    name: 'Root',
    children: [{
        name: 'Banch1',
        children: [{
            name: 'leaf1'
        }]

    }, {
        name: 'Banch2',
        children: [{
            name: 'leaf1'
        }, {
            name: 'leaf2'
        }]

    }, {
        name: 'Banch',
        children: [{
            name: 'leaf1'
        }, {
            name: 'leaf2'
        }, {
            name: 'leaf3'
        }]
    }, {
        name: 'Banch3',
        children: [{
            name: 'leaf1'
        }, {
            name: 'leaf2'
        }, {
            name: 'leaf3'
        }, {
            name: 'leaf4'
        }]
    }]
}]

option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [{
        type: 'tree',
        data: data,
        orient: 'vertical',
        left: '2%',
        right: '2%',
        top: '8%',
        bottom: '20%',
        symbol: 'circle',
        symbolSize: 30,
        label: {
            normal: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9
            }
        },
        leaves: {
            label: {
                normal: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            }
        },
        expandAndCollapse: true
    }]
}