// 指定图表的配置项和数据
    var data1 = [20, 30,20, 30,20, 30,20, 30,20, 30];//小百分比
var data2 = [9, 30,9, 60,70, 20,59, 20,49, 20];//中百分比
var data4 = [100, 100,100,100, 100,100, 100,100,100, 100];//大百分比
var data5 = [20,24,20,24,20,24,20,24,20,24];//小完成数
var data6 = [9,18,9,18,9,18,9,18,9,18];//中完成数
var data7 = [100,80,100,80,100,80,100,80,100,80];//总数
var datacity =  ['巩义市', '兰考县', '汝州市', '滑县', '长垣县', '邓州市', '永城市', '固始县', '鹿邑县', '新蔡县'];
var option = {
  

   // backgroundColor: '#fff',
    color: ['#00c484', '#98d7d6'],
     tooltip: {
              trigger: 'axis', 
              formatter: function(datas) 
              {                
					    var res = datas[0].axisValue + '<br/>', val;
						var m=datas[0].dataIndex;
						 var  zongshu='黑名单和重点关注名单数'+ '：'+data7[m]+'<br/>';
                        val = '完成比例：'+(data1[m]+data2[m]) + '%'+ '<br/>';
						var chengnuo="信用承诺："+data5[m]+ '<br/>';//小完成数
						var chengnuobili="信用承诺占比："+data1[m]+ '%'+ '<br/>';//小比例
						var xiufu="培训或约谈："+data6[m]+ '<br/>';//中
						var xiufubili="培训或约谈：占比："+data2[m]+ '%'+ '<br/>';//中比例
						res+=zongshu+val+chengnuo+chengnuobili+xiufu+xiufubili;                						
                   
			
                    return res;
               }
          },
    legend: {
      
        top: '8%',
        data: ['信用承诺', '培训或约谈'],
		right: '10%'
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [
        {
           type: 'value',
          	axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value} %'
                },
            show: true

    }],
    xAxis: [{
        type: 'category',
		  axisLabel:  {
                interval: 0,
                rotate:-50,//x轴数据倾斜的角度-90-90
                show: true,
                splitNumber: 15,

                textStyle: {
                    //fontFamily: "微软雅黑",
                    fontSize: 10,
					  color: function(params) {
						  var dataIndex=0;
						  for(var j=0;j<datacity.length;j++){
						  if(params==datacity[j]){
							  dataIndex=j;
						  }
						  }
						
						var data11=data1[dataIndex];
						var data22=data2[dataIndex];
						var hege=(data11+data22);

                                    if(hege>=50){
                                        return '#3399fe';
                                    }else {
                                        return '#ffcc00';
                                    }

                    },
                },

            },
        data: datacity,
    }],
    series: [
     
        
        {
            name: '信用承诺',
            type: 'bar',
            stack: 'sum',
            barWidth: '20px',
            data: data1

        },
        {
            name: '培训或约谈',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: data2,
			 markLine : {
                data : [
                    {
                     name: 'Y 轴值为 50 的水平线',
                     yAxis: 50
    },
                ],
				
				  itemStyle : { 
                    normal: { 
                        borderWidth:1, 
                        lineStyle: { 
                            type: 'dashed', 
                            color:'#ffcc00', 
                            width:2 
                        },
						label:{ formatter:'50%'}
						
                    } 
                   
                }, 
            }

        },
          

    ]
};