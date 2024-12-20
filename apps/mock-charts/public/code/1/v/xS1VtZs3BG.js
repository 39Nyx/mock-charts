option = {
    backgroundColor:'#091c3d',
    width:600,
    height:230,
    title: {
        text: '',
        textStyle:{
            color:'white'
        },
        textPosition:'center'
    },
    legend:{
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 10,
        itemGap: 13,
        data:['收文','发文'],
        left:100,
        top:27,
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    xAxis: {
        axisLabel:{
            color:'white'
        },
        axisLine:{
            lineStyle:{
                color:'white',
            }
        },
        data: ['通知', '意见','决议','通报','命令','函','公告','通告','请示']
    },
    yAxis: {
        name:'数量',
        nameTextStyle:{
          color:'white'  
        },
        axisLabel:{
            color:'white'
        },
        axisLine:{
            lineStyle:{
                color:'white',
            }
        }
    },
    series: [
        {
            name:'发文',
            type: 'bar',
            itemStyle:{
              normal:{
                  color:'#0288D1',
              }  
            },
            barWidth:20,
            data:[4, 5,3,2,1,4,5,3,2]
        },
        {
            name:'收文',
            type: 'bar',
            itemStyle:{
              normal:{
                  color:'#FF6600',
              }  
            },
            barWidth:20,
            data:[2, 3,2,1,2,1,2,2,1]
        }
    ]
};