app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直達','行銷廣告','搜索引擎','郵件行銷','聯盟廣告','視頻廣告','谷歌','百度','Bing','其他']
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
                {value:335, name:'直達', selected:true},
                {value:679, name:'行銷廣告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'訪問來源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'直達'},
                {value:310, name:'郵件行銷'},
                {value:234, name:'聯盟廣告'},
                {value:135, name:'視頻廣告'},
                {value:1048, name:'谷歌'},
                {value:251, name:'百度'},
                {value:147, name:'Bing'},
                {value:102, name:'其他'}
            ]
        }
    ]
};