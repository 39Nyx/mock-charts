option = {
    backgroundColor:'#fff',
    title : {
       text: '检查时停产企业分布对比',
       textStyle:{fontSize:18}
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        left:10,
        top:35,
        data:['检查企业数','停产企业数'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
         
        {
            name:'各类情况数量占比',
            type:'pie',
            radius: ['0', '35%'],
            center:['24%','30%'],
            color: ['#e72325', '#98e002', '#2ca3fd'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:35, name:'停产企业数'},
                {value:79, name:'检查企业数',selected:true},
         
            ]
        }
    ]
};