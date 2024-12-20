app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['第一产业','第二产业','第三产业']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner',
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1110, name:'第一产业', selected:true},
                {value:5563, name:'第二产业'},
                {value:2414, name:'第三产业'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:21534861.435, name:'第一产业',selected:true},
                {value:99444515.092, name:'第二产业'},
                {value:99066511.26, name:'第三产业'},
            ]
        }
    ]
};