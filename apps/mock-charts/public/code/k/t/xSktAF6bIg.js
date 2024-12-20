app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','第二批次','第一批次','邮件营销','联盟广告','概算金额']
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
                
                {value:679, name:'第二批次'},
                {value:1548, name:'第一批次'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                
                {value:310, name:'二批次到货金额'},
                {value:234, name:'二批次未到货金额'},
              
                {value:1048, name:'一批次未到货金额'},
                {value:251, name:'一批次到货金额'}
            ]
        }
    ]
};