var datas=[0, 132, 290, 100, 250, 400, 200]
var time=['0点','3点','6点','9点','12点','15点']
var max=datas[0];

for(var i=0;i<datas.length;i++){
    if(datas[i] > max) {
        max = datas[i]
    }
   
}
var option = {
    backgroundColor:'#0e2147',
    title:false,
    grid: {
        left: '0%',
        right: '4%',
        top: '3%',
        bottom:'0',
        containLabel: true
    },
    legend: {
          data:[
            {
              name:"巡河人数",
              icon: "circle",
              textStyle: {
                color: "#fff"
              }
            }
          ],
          top:0,
          textStyle:{
            color:"#fff"
          }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: time,
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,.001)',//左边线的颜色
                width:'1'//坐标线的宽度
            }
        },
        splitLine:{  
            show:false  ,
		},
        axisTick:{
	        show:false
	    },
	    axisLabel :{
            interval:0,
            textStyle: {
	            color: '#fff',
	            fontFamily:'宋体'
	        }
        }
    },
    yAxis: {
        type: 'value',
        max:max,
        min:0,
        axisTick:{
	        show:false
	    },
	    axisLine: {
	    	show:false
	    },
	    splitLine:{  
            show:true  ,
            lineStyle:{
		    color:'rgba(255,255,255,.2)',
		    width: '1'
		    }
		},
		axisLabel:{
			textStyle: {
                color: '#fff',
                fontFamily:'宋体'
            }
		}
    },
    series: [
        {
            name:'巡河统计',
            type:'line',
            stack: '总量',
            symbol:'circle',
            data:datas,
            symbolSize:6, 
            itemStyle:{  
                normal:{
                     color:'#ffa22c',
                 	 borderWidth:1.8, 
                     borderColor:'#fff',  //拐点边框颜色  
                }  
            },
            lineStyle:{
                normal:{
                    color:'#ffa22c'
                }
            } 
        }
    ]
};
