
option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
    },
    grid: {
        top:'10%',
        containLabel: true
    },
    title:{
        text:'subtextStyle.rich使用',
        subtext:'{a|subtext. }{b|rich}',
        left:'center',
        textStyle:{
            fontSize:20
        },
        subtextStyle:{
            rich:{
                a:{ //开头和结尾的文字样式
                    color:'red',
                    fontSize:18
                },
                b:{
                    backgroundColor:'pink',//无法设置渐变色
                    color:'#fff',
                    padding:[3,8],
                    fontSize:16,
                    fontWeight:600,
                    borderColor:'#0b4d9d',
                    borderWidth:1,
                }
            }
      }
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};