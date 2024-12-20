
options = 
   [{
    backgroundColor:'#FFFFFF',

    title:{
        text: '办理事项占比',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#05a78e',
            fontSize: 16
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

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
            radius: ['31%', '42%'],
            color: ['#f36265', '#92dfb0', '#ccc'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[ {value:20392, name:'食品销售经营者'},
                {value:13922, name:'餐饮服务经营者'},
                {value:40392, name:'单位食堂'},
            ]
        }
    ]
}
];