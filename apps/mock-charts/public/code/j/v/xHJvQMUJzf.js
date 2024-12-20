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
    
        data:['2D线','3D线','资源类','采集类','宝宝大全','2D视频',],
                textStyle: {
            color: '#fff'
        }
    },
    series: [
        {
            name:'访问来源',
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
                {value:2, name:'摄影'},
                {value:68, name:'演员'},
                {value:48, name:'文化'},
                 {value:3, name:'声音'},
                 {value:158, name:'剧情'},
                {value:21, name:'导演'},
                
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['42%', '55%'],
            color: ['#d74e67', '#0092ff', '#eba954', '#21b6b9','#60a900','#01949b',' #f17677'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
           data:[
                {value:2, name:'摄影'},
                {value:68, name:'演员'},
                {value:48, name:'文化'},
                 {value:3, name:'声音'},
                 {value:158, name:'剧情'},
                {value:21, name:'导演'},
                
            ]
        }
    ]
};