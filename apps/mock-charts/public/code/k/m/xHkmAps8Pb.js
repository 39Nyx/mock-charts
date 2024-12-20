option = {
   
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
                {value:335, name:'SwetsWise', selected:true},
                {value:679, name:'SpringLink电子刊物'},
                {value:1548, name:'Digital Library'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'俄罗斯科学在线期刊'},
                {value:310, name:'WorldSciNet'},
                {value:234, name:'Wiley Online Library'},
                {value:135, name:'Westlaw International'},
                {value:1048, name:'Turpion'},
                {value:251, name:'Thieme E-journals'},
                {value:147, name:'Taylor & Francis 期刊数据库'},
                {value:102, name:'其他'}
            ]
        }
    ]
};