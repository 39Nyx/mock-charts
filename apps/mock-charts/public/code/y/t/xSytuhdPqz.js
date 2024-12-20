option = {
    backgroundColor:'#FFF',
   /* title : {
        text: '事项申请对比分析',
        subtext: '2017年'
    },*/
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
       data: ['合格批次数', '不合格批次数 ',],
       },
    series: [
        {
            name:'各环节抽样不合格批次占比',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '10%'],
            center:['40%','20%'],
           color: [ '#FF9966', '#999'],
           label:  {
                normal: {
                    formatter: '{b}\n   ({d}%)'
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
           
            data:[
                //{value:335, name:'食品生产', selected:true},
                {value:302, name:'合格批次数'},
                {value:132, name:'不合格批次数'},
            ]
        },
    ]
};