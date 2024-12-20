app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
             
                normal: {
                    show: true,   
                    fontSize:60
                  //  position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                show: true,
                normal: {
                    show: true
                }
            },
            data:[
                {value:30, 
                name:'unsold',
               itemStyle: {                            
                   normal: {
                       color:"rgb(6,183,250)"
                   }
               }
                },
                {value:100, name:'sold',
                       itemStyle: {                            
                   normal: {
                       color:"rgb(255,177,19)"
                   }
               }
                }
            ]
        }
    ]
};
