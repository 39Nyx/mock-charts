
options = 
   [{
    backgroundColor:'#FFFFFF',

    title:{
        text: '投诉举报信息接收渠道占比',
        x: 'center',
        y: 'top',
        textStyle: {
            color: '#05a78e',
            fontSize: 16
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",

    },
    legend: {
        
        orient: 'vertical',
        x: 'right',
       itemWidth: 14,
        itemHeight: 14,
        align: 'left',
    
    },
    series: [
        {
            type:'pie',
            radius: ['10%', '13%'],
            color: ['#669999','#33CC99','#CC6666', '#FF9966', '#3399CC'],
            label: {
                normal: {
                    formatter: '{b}\n{c}\n{d}%'
                },
          
            },
            data:[ {value:20392, name:'电话'},
                {value:13922, name:'网络'},
                {value:10392, name:'信件'},
                 {value:20192, name:'走访'},
                {value:13922, name:'其他'},
            ]
        }
    ]
}
];