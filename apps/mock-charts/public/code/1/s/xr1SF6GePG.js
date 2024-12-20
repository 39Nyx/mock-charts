option = {
    backgroundColor: '#091C3D',
    tooltip: {
        trigger: 'item',
        //formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        
        orient: 'vertical',
        x: 'right',
       itemWidth: 14,
        itemHeight: 14,
        align: 'left',
    
        data:['服务器','数据库','应用服务器','网络设备','其他'],
                textStyle: {
            color: '#fff'
        }
    },
    series: [
       
        {
            name:'访问来源',
            type:'pie',
            radius: ['10%', '20%'],
            color: [ '#e889b5','#fa347a','#037dea','#5ddaf5','#00ffc6', '#a5fae7', '#e6eaf5'],
            label: {
                // normal: {
                //     formatter: '{b}\n{d}%'
                // },
          
            },
           
            data:[
                {value:20, name:'服务器'},
                {value:18, name:'数据库'},
                {value:10, name:'应用服务器'},
                {value:12, name:'网络设备'},
                {value:6, name:'其他'},
               
         
            ]
        }
    ]
};