option = {
    title: {
        text: '17:00 - 18:00',
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
        data: [{"name":"上海","value":"70"},{"name":"云南","value":"30"},{"name":"内蒙古","value":"42"},{"name":"北京","value":"41"},{"name":"台湾","value":"2"},{"name":"吉林","value":"16"},{"name":"四川","value":"76"},{"name":"天津","value":"110"},{"name":"宁夏","value":"5"},{"name":"安徽","value":"139"},{"name":"山东","value":"96"},{"name":"山西","value":"120"},{"name":"广东","value":"810"},{"name":"广西","value":"12"},{"name":"江苏","value":"620"},{"name":"江西","value":"63"},{"name":"河北","value":"118"},{"name":"河南","value":"126"},{"name":"浙江","value":"367"},{"name":"海南","value":"24"},{"name":"湖北","value":"117"},{"name":"湖南","value":"148"},{"name":"甘肃","value":"3"},{"name":"福建","value":"240"},{"name":"贵州","value":"159"},{"name":"辽宁","value":"42"},{"name":"重庆","value":"46"},{"name":"陕西","value":"74"},{"name":"青海","value":"2"},{"name":"黑龙江","value":"7"}]

    }, ]
};