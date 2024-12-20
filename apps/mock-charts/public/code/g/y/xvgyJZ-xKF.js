option = {
     title: {
            text: '再投资国别(地区)分布（万美元）',
            textStyle:{
                color:'#e4393c',//京东红
            }
        },
    tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'

        },
    series: {
        type: 'sankey',
        layout:'none',
         focusNodeAdjacency: true,
          itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                },
        data: [{
            name: '香港'
        }, {
            name: 'a2'
        }, {
            name: 'a3'
        }, {
            name: 'a4'
        }, {
            name: 'a5'
        }, {
            name: 'a6'
        }, {
            name: 'a7'
        }, {
            name: 'a8'
        }, {
            name: '亚洲'
        }, {
            name: '欧洲'
        }, {
            name: '非洲'
        }, {
            name: '北美洲'
        }, {
            name: '大洋洲'
        }, {
            name: '拉丁美洲'
        }],
        links: [{
            source: '香港',
            target: '大洋洲',
            value: 55
        }, {
            source: 'a2',
            target: '亚洲',
            value: 33
        }, {
            source: 'a3',
            target: '欧洲',
            value: 22
        }, {
            source: 'a4',
            target: '拉丁美洲',
            value: 11
        }, {
            source: 'a5',
            target: '北美洲',
            value: 12
        }, {
            source: 'a6',
            target: '大洋洲',
            value: 14
        }, {
            source: 'a7',
            target: '北美洲',
            value: 21
        }, {
            source: 'a8',
            target: '亚洲',
            value: 25
        }]
    }
};
