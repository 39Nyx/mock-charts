option = {
    backgroundColor:'#fff',
    title : {
       text: '企业检查情况分析',
       textStyle:{fontSize:18}
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        left:10,
        top:35,
        data:['持证企业数','检查企业数','违法违规企业数'],
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
                {value:35, name:'持证企业数'},
                {value:79, name:'检查企业数'},
                {value:98, name:'违法违规企业数',selected:true}
         
            ]
        }
    ]
};