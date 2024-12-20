option = {
    backgroundColor:'#fff',
    title : {
       text: '通报国分布',
       textStyle:{fontSize:18}
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        left:10,
        top:35,
        data:['美国','日本','欧盟','印度','其他'],
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
            color: ['#ff4343', '#f69846', '#45dbf7','#4777f5','#ad46f3'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:100, name:'美国',selected:true},
                {value:80, name:'日本'},
                {value:60, name:'欧盟'},
                {value:40, name:'印度'},
                {value:40, name:'其他'}
         
            ]
        }
    ]
};