option = {
    backgroundColor:'#fff',
    title : {
       text: '各环节抽样批次占比',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    color: [ '#999', '#FF9966'],

    legend: {
        //x : 'center',
        //y : 'bottom',
        width:'55%',
        //bottom:'30%',
        orient : 'vertical',
        left:'70%',
        top:'28%',
       /* data:['合格批次数', '不合格批次数 '],*/
        },
    series: [
         
        {
            name:'餐饮环节抽样不合格批次占比',
            type:'pie',
            radius: ['0', '15%'],
            //color: ['#00FF00', '#B22222', '#00CDCD'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
             itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                }
            },
            data:[
                {value:800, name:'不合格批次数',selected:true,
                label:{show:true},
                labelLine : { show : true}    
                },
                {value:2000, name:'合格批次数'},
                
               
         
            ]
        }
    ]
};