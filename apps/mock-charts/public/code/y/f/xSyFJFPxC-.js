

option = {
    title:{
        text:'告警类型统计',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'right',
        y: '30',
        data:['CDN告警','EPG性能告警','网络质量告警','视频质量告警','家庭网络问题']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '45%'],
            avoidLabelOverlap: true,
            roseType :false,
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter:'{b}\n{d}% \n{c}个'
                    
                },
                emphasis: {
                    show: true,
                    //position: 'center',
                    //formatter:'{b}',
                    textStyle: {
                        //fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'CDN告警'},
                {value:310, name:'EPG性能告警'},
                {value:234, name:'网络质量告警'},
                {value:135, name:'视频质量告警'},
                {value:1548, name:'家庭网络问题'}
            ]
        }
    ]
};
