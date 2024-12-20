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
       data: ['生产环节', '流通环节 ', '餐饮环节'],
       },
    series: [
        {
            name:'各环节抽样批次占比',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '10%'],
            center:['40%','20%'],
           color: ['#33CC99','#CC6666', '#FF9966', '#3399CC'],
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
                {value:302, name:'生产环节'},
                {value:432, name:'流通环节'},
                {value:220, name:'餐饮环节'},
            ]
        },
    ]
};