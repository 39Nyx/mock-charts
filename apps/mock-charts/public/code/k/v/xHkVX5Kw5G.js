option = {
    backgroundColor:'#fff',
    title : {
       text: '各环节抽样批次占比',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    color: ['#33CC99','#CC6666', '#FF9966', '#3399CC'],

    legend: {
        //x : 'center',
        //y : 'bottom',
        width:'55%',
        //bottom:'30%',
        orient : 'vertical',
        left:'70%',
        top:'38%',
        data:['生产环节', '流通环节 ', '餐饮环节'],
        },
    series: [
         
        {
            name:'各检查类型违规占比',
            type:'pie',
            radius: ['0', '20%'],
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
                {value:1800, name:'生产环节',selected:true,
                label:{show:true},
                labelLine : { show : true}    
                },
                {value:2000, name:'流通环节'},
                {value:1500, name:'餐饮环节'},
               
         
            ]
        }
    ]
};