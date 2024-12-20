app.title = '嵌套环形图';

option = {
     backgroundColor: 'rgba(255,255,255,0)',
        title: {
        text: '按行业分',
        subtext: ''
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
        toolbox: {
        show: true,
        feature: {
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['制造业','房地产业','建筑业','农林牧渔业','交通运输业','其他']
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
                {value:54, name:'制造业',selected:true},
                {value:68, name:'房地产业'},
                {value:1498, name:'建筑业'},
                {value:540, name:'农林牧渔业'},
                {value:460, name:'交通运输业'},
                {value:2148, name:'其他'},
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:23361136, name:'制造业',selected:true},
                {value:42530069, name:'房地产业'},
                {value:43408616, name:'建筑业'},
                {value:287469498, name:'农林牧渔业'},
                {value:505822909, name:'交通运输业'},
                {value:30069884, name:'其他'},
            ]
        }
    ]
};