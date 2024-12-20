option = {
    backgroundColor:'#fff',
    title : {
       text: '各检查类型违规占比',
        subtext: '各检查类型违规占比'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    color: ['#669999','#33CC99','#e47070', '#55b4e3','#eab2f6', '#ccc' ,'#FF9966',],

    legend: {
        
        //orient: 'vertical',
        x: 'center',
       // align: 'left',
        bottom:'25%',
        width:'30%',
        data:['日常检查','专项检查','飞行检查','临时检查','督导检查'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
         
        {
            name:'各检查类型违规占比',
            type:'pie',
            radius: ['0', '30%'],
            //color: ['#00FF00', '#B22222', '#00CDCD'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:35, name:'日常检查',selected:true},
                {value:79, name:'专项检查'},
                {value:35, name:'飞行检查'},
                {value:79, name:'临时检查'},
                {value:88, name:'督导检查'}
         
            ]
        }
    ]
};