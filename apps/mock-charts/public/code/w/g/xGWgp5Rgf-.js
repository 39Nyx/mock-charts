option =  {
    color:[ '#FBD40AFF','#13384A00',],
    legend: {
        show:true,
        orient: 'vertical',
        right: 0,
       itemGap:70,
top: 'center',
 itemWidth:20,
                itemHeight:20,
        textStyle:{
          color:'#fff',
          fontSize:27,
           fontFamily:'siyuan',
        },
        data: ['高压', '低压']
    },
    series: [ {

            type: 'pie',
            radius: ['50%', '65%'],
            label:{
                show:true,
                position:'outside',
              formatter:'{bb|{b}}{aa|{c}个}',
  padding: [0, 0],
                rich:{
                    aa:{
                        height:60,
                        align:"left",                     
                        fontSize:40, 
                        color:'#fff',
 verticalAlign:'middle',  
  fontFamily:'siyuan',     
                    },
                    bb:{
                        height:60,
                        align:"left",                        
                        fontSize:40,
                        color:'#fff',
                verticalAlign:'middle',
                 fontFamily:'siyuan',
                    }
                }
            },
              itemStyle: {
                normal: {
                    shadowColor: '#0fd2d6',
                    borderWidth:2,
                    borderColor:'#0FD2D67F',
                    shadowBlur: 20
                }
            },
            labelLine:{
                show:true,
                length:50,
                length2:40,
                lineStyle:{
                    width:2
                }
            },
            data: [
{value:599,name:'潜力'},
{value:12579,name:'投运'},
]
        }
    ]
}
