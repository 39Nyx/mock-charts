app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['personel','equipment','material','insufficient operator','poor training','equipment broken','overhaul','insufficient semi-product','change line','others']
    },
    series: [
        {
            name:'访问来源',
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
                {value:95, name:'personel', selected:true},
                {value:47, name:'equipment'},
                {value:14, name:'material'},
                {value:5, name:'others'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:59, name:'insufficient operator'},
                {value:36, name:'poor training'},
                {value:39, name:'equipment broken'},
                {value:8, name:'overhaul'},
                {value:13, name:'insufficient semi-product'},
                {value:1, name:'change line'},
                {value:5, name:'others'}
            ]
        }
    ]
};





