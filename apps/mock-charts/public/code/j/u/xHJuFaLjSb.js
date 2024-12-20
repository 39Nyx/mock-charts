option = {
    title : {
        text: '2017年 水电汽消耗占比',
        x:'center'
    },
    color:['#61A0A8','#749F83','#767479'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['水消耗','蒸汽消耗','电消耗']
    },
    series : [
        {
            name: '耗量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            label:{
                normal:{
                show:true,
                formatter:"{b} : {c}，百分比：{d}%"
            }
            },
            
            data:[
                {value:335, name:'水消耗' },
                {value:310, name:'蒸汽消耗'},
                {value:234, name:'电消耗'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
