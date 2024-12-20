option = {
    backgroundColor:'#fff',
    title : {
       text: '涉及产品分布',
       textStyle:{fontSize:18}
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        left:10,
        top:35,
        data:['婴儿奶粉','家具','玩具','服饰','其他'],
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
            color: ['#bda29a', '#6e7074', '#546570','#c4ccd3','#c23531'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:100, name:'婴儿奶粉',selected:true},
                {value:80, name:'家具'},
                {value:60, name:'玩具'},
                {value:40, name:'服饰'},
                {value:40, name:'其他'}
         
            ]
        }
    ]
};