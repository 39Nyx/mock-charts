option = {
    title: {
        text: "产业、行业分布图",
        subtext: "",
        left: "center",
        textStyle: {
            fontSize: 18
        },
    },

    backgroundColor: '#130f34',
    tooltip: {
        trigger: 'item',
        formatter: "{a}:{c}"
    },
    series: [{
        name: '分布数',
        type: 'pie',
        //center: ['70%', '32%'],
        radius: ['10%', '50%'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 129,
            name: '第三产业'
        }, {
            value: 196,
            name: '第二产业'
        }]
    }, {
        name: '分布数',
        type: 'pie',
        //center: ['70%', '32%'],
        radius: ['54%', '72%'],
        label: {
            normal: {
                position: 'inner',
                formatter: '{b}'
            }
        },
        data: [{
            value: 106,
            name: 'A'
        }, {
            value: 23,
            name: 'B'
        }, {
            value: 115,
            name: 'C'
        }, {
            value: 49,
            name: 'D'
        }, {
            value: 17,
            name: 'E'
        }, {
            value: 15,
            name: 'F'
        }]
    }]
};