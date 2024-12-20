option = {
    backgroundColor: '#424956',
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
    
        data:['判决是否合理','舆论干扰司法','警察不作为','高利贷势力猖獗','防卫过当与否','其他'],
                textStyle: {
            color: '#fft'
        }
    },
    series: [
        {
            name:'评论重点',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['40%', '42%'],
            color: ['#915872', '#3077b7', '#9a8169', '#3f8797','#5b8144','#307889','#9c6a79'
],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
               
            },
            tooltip: {
               show:false,
               
               
            },
            
            data:[
                {value:435, name:''},
                {value:679, name:''},
                {value:848, name:''},
                 {value:348, name:''},
                 {value:679, name:''},
                {value:848, name:''},
                 {value:348, name:''}
            ]
        },
        {
            name:'评论重点',
            type:'pie',
            radius: ['42%', '55%'],
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:32, name:'判决是否合理'},
                {value:33, name:'舆论干扰司法'},
                {value:28, name:'警察不作为'},
                {value:39, name:'高利贷势力猖獗'},
                {value:48, name:'防卫过当与否'},
                {value:131, name:'其他'},
         
            ]
        }
    ]
};