option = {
    backgroundColor:'#fff',
    title : {
       text: '各企业类型持证占比',
        subtext: '各企业类型持证占比'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    color: ['#33CC99','#e47070', '#55b4e3','#eab2f6', '#ccc' ,'#FF9966',],
    series: [
         
        {
            name:'各检查类型违规占比',
            type:'pie',
            radius: ['0', '25%'],
             color: ['#9acfe8','#56afd8','#1a8fc5', '#96dcc3', '#5ac59e', '#439476', '#346654'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            selectedMode: 'single',
            data     :[
                {value:1000, name:'食品生产企业',selected:true},
                {value:400, name:'既生产食品又产食品添加剂企业'},
                {value:800, name:'食品添加剂生产企业'},
                {value:1200, name:'小作坊'},
            ]
        }
    ]
};
