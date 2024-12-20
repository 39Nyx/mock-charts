app.title = '嵌套环形图';
let data = [
                {value: 10, name:'其他'},
                {value:1, name:'直达'},
                {value:2, name:'邮件营销'},
                {value:3, name:'联盟广告'},
                {value:4, name:'视频广告'},
                {value:5, name:'百度'}
            ]
option = {
   
    backgroundColor: '#fff',
    tooltip: {
        formatter: "{a}：<br/>{b}: {c}人"
    },
             
    series: [
        
         {
            name:'',
            type:'pie',
            hoverAnimation: true,
            silent: true,
            radius: [0, '30%'],
            color: ['#f15a24'],
            label:{ 
                show: true,
                formatter: '{pre|{c}} \n \n 全国命中总数',
                color: '#333',
                position: 'center',
                fontSize:18,
              
                rich: {
                    pre: {
                        fontSize: 30,
                        color: '#333'
                    }
                }
            },
           
            data:[
                {value:25, itemStyle: {color: '#fff'}}
            ]
        },
       
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '40%'],
            color: ['#f8db76', '#f15a24', '#f47b28', '#f89d2c', '#fcaa2f', '#fccc21'],
         
            
            itemStyle: {
                
            },
            label: {
               normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data:data
        }
    ]
};