option = {
    title: {
        text: '平台发文占比'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        top: 50,
        data: ['微信公众号', '微博', '客户端', '网站', ]
    },

    toolbox: {
        feature: {
            saveAsImage: {
                name: '下载',
                title: '下载',
            }
        }
    },
    series: [{
        name: '平台发文占比',
        type: 'pie',
        radius: ['50%', '70%'],
        // avoidLabelOverlap: false,
        label: {
            show: true,
            position: 'inside'
        },
        //  emphasis: {
        //      label: {
        //          show: true,
        //          fontSize: '30',
        //          fontWeight: 'bold'
        //      }
        //  },
        labelLine: {
            show: false
        },
        itemStyle: {
            normal: {
                //这里是重点
                color: function(params) {
                    //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                    var colorList = ['red', 'blue', 'skyblue', 'orange', 'black', 'grey', '#ca8622'];
                    return colorList[params.dataIndex]
                }
            }
        },
        data: [{
                value: 1220,
                name: '微信公众号'
            },
            {
                value: 1546,
                name: '微博'
            },
            {
                value: 6532,
                name: '客户端'
            },
            {
                value: 4565,
                name: '网站'
            },
        ]
    }]
};