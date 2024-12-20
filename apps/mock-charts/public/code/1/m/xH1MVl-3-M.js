option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['消极','中立','积极','责怪医院','指责家属','认为双方都有过错','讲述自身经历']
    },
    series: [
        {
            name:'新浪情感倾向',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:90, name:'消极', selected:true},
                {value:7, name:'中立'},
                {value:3, name:'积极'}
            ]
        },
        {
            name:'新浪情感倾向',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:13, name:'责怪医院'},
                {value:58, name:'指责家属'},
                {value:14, name:'认为双方都有过错'},
                {value:15, name:'讲述自身经历'},
            ]
        }
    ]
};