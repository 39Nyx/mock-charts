option = {
    title: {
        text: '16:00 - 17:00',
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
        data: [{"name":"上海","value":"94"},{"name":"云南","value":"36"},{"name":"内蒙古","value":"109"},{"name":"北京","value":"92"},{"name":"吉林","value":"45"},{"name":"四川","value":"168"},{"name":"天津","value":"170"},{"name":"宁夏","value":"21"},{"name":"安徽","value":"270"},{"name":"山东","value":"164"},{"name":"山西","value":"153"},{"name":"广东","value":"1162"},{"name":"广西","value":"51"},{"name":"新疆维吾尔","value":"5"},{"name":"江苏","value":"961"},{"name":"江西","value":"92"},{"name":"河北","value":"203"},{"name":"河南","value":"206"},{"name":"浙江","value":"429"},{"name":"海南","value":"16"},{"name":"湖北","value":"142"},{"name":"湖南","value":"185"},{"name":"澳门","value":"1"},{"name":"甘肃","value":"8"},{"name":"福建","value":"298"},{"name":"西藏","value":"1"},{"name":"贵州","value":"246"},{"name":"辽宁","value":"77"},{"name":"重庆","value":"48"},{"name":"陕西","value":"85"},{"name":"青海","value":"8"},{"name":"香港","value":"3"},{"name":"黑龙江","value":"9"}]

    }, ]
};