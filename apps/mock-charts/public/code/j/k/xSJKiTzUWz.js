option = {
    title: {
        text: "",
        subtext: "",
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 18
        },
    },

    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '事业线',
        type: 'pie',
        radius: ['10%', '50%'],
        color: ['#ec5d51', '#59abe1', '#f4cf42', '#3dc6a8'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 11,
            name: 'web2.0'
        },  {
            value: 9,
            name: 'web1.0'
        }]
    }, {
        name: '分组',
        type: 'pie',
        radius: ['54%', '72%'],
        color: ['#a0dca0', '#60bbb6', '#f78db3', '#feadac', '#fae395','#91d4e5','#8eb3e8'],
        label: {
            normal: {
               formatter: '{b}\n{d}%'
            }
        },
        data: [{
            value:132,
            name: '家属责任'
        }, {
            value:81,
            name: '医院责任'
        }, {
            value: 72,
            name: '产妇责任'
        }]
    }]
};