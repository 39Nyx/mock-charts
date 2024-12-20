option = {
    backgroundColor:'#fff',
    title : {
       text: '事件类型分布',
       textStyle:{fontSize:18}
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        left:10,
        top:35,
        data:['召回','禁止入境','扣留','警告','不合格'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
         
        {
            name:'事件数量及占比',
            type:'pie',
            radius: ['0', '35%'],
            center:['24%','30%'],
            color: ['#00ad4e', '#0073c2', '#165868','#e76f00','#ad46f3'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:100, name:'召回',selected:true},
                {value:80, name:'禁止入境'},
                {value:60, name:'扣留'},
                {value:40, name:'警告'},
                {value:40, name:'不合格'}
         
            ]
        }
    ]
};