app.title = '嵌套环形图';

option = {
     backgroundColor: 'rgba(255,255,255,0)',
        title: {
        text: '建设性质分',
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
        data:['新建','迁建','改建','扩建','工业技改','其他']
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
                {value:7892, name:'新建',selected:true},
                {value:287, name:'迁建'},
                {value:482, name:'改建'},
                {value:570, name:'扩建'},
                {value:2475, name:'工业技改'},
                {value:268, name:'其他'},
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:186979737, name:'新建',selected:true},
                {value:4052427, name:'迁建'},
                {value:3669086, name:'改建'},
                {value:7577997, name:'扩建'},
                {value:15693406, name:'工业技改'},
                {value:2073232, name:'其他'},
            ]
        }
    ]
};