option = {
    title: {
        text: '15:00 - 16:00',
        subtext: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item'
    },

    dataRange: {
        min: 0,
        max: 4000,
        x: 'left',
        y: 'bottom',

        text: ['高', '低'], // 文本，默认为数值文本
        calculable: false,

        splitNumber: 0,


        color: ['orangered', 'gold', 'yellow', 'green', 'lightgreen', 'lightgrey']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            dataZoom: {
                show: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series: [{
        name: 'Number',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            }
        },
        data: [{"name":"上海","value":"35"},{"name":"云南","value":"76"},{"name":"内蒙古","value":"141"},{"name":"北京","value":"62"},{"name":"吉林","value":"17"},{"name":"四川","value":"70"},{"name":"天津","value":"113"},{"name":"宁夏","value":"16"},{"name":"安徽","value":"142"},{"name":"山东","value":"285"},{"name":"山西","value":"59"},{"name":"广东","value":"897"},{"name":"广西","value":"46"},{"name":"新疆维吾尔","value":"14"},{"name":"江苏","value":"708"},{"name":"江西","value":"112"},{"name":"河北","value":"220"},{"name":"河南","value":"189"},{"name":"浙江","value":"324"},{"name":"海南","value":"42"},{"name":"湖北","value":"29"},{"name":"湖南","value":"265"},{"name":"澳门","value":"1"},{"name":"甘肃","value":"10"},{"name":"福建","value":"86"},{"name":"贵州","value":"209"},{"name":"辽宁","value":"66"},{"name":"重庆","value":"31"},{"name":"陕西","value":"44"},{"name":"黑龙江","value":"26"}]

    }, ]
};