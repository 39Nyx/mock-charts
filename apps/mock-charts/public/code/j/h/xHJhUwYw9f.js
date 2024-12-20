
options = 
   [{
    backgroundColor:'#FFFFFF',

    title:{
        text: '抽检核查处置情况',
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
            data:[ {value:20392, name:'产品控制 '},
                {value:13922, name:'排查整改'},
                {value:10392, name:'行政处罚'},
                
            ]
        }
    ]
}
];