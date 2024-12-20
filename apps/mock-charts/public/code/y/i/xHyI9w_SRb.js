option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 3000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: ['2013年', '2014年', '2015年', '2016年', '2017年', ]
        },
        title: {
            subtext: '',
            subtextStyle: {
                align: 'center'
            }
        },
        tooltip: {},
        legend: {
            x: 'right',
            data: ['注册企业,注销企业占比'],
            selectedMode: 'single'
        },
        calculable: true,
        series: [{
            name: '注册企业,注销企业占比',
            type: 'pie',
            center: ['50%', '50%']
                //radius: '28%'
        }]
    },
    options: [{
        title: {
            text: '2013注册企业,注销企业占比'
        },
        series: [{
            name: '注册企业,注销企业占比',
            data: [{
                name: '注册企业',
                value: 90
            }, {
                name: '注销企业',
                value: 10
            }]
        }]
    }, {
        title: {
            text: '2014注册企业,注销企业占比'
        },
        series: [{
            name: '注册企业,注销企业占比',
            data: [{
                name: '注册企业',
                value: 40
            }, {
                name: '注销企业',
                value: 55
            }]
        }]
    }, {
        title: {
            text: '2015注册企业,注销企业占比'
        },
        series: [{
            name: '注册企业,注销企业占比',
            data: [{
                name: '注册企业',
                value: 40
            }, {
                name: '注销企业',
                value: 40
            }]
        }]
    }]
};