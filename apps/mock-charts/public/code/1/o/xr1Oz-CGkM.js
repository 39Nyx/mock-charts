 var bae
 setInterval(function (){
      bae = parseInt(Math.random()* 29 + 1)
     console.log(bae)
      var setTime='2017-11-' + bae;
  var set_arr=setTime.split("-");
  var totalDay = mGetDate(set_arr[0],set_arr[1]);
  budget(totalDay,set_arr[2],setTime);
  			//budget2(totalDay,set_arr[2],setTime);
  			
  			console.log(setTime);
   
  	//获取当月天数
  	function mGetDate(year, month){
	    var d = new Date(year, month, 0);
	    return d.getDate();
	}
  
 },1000)
 
 
 

 
 
 
 
 
 
 
 
function budget(tomonth,set_arr,atime){
	console.log(atime)
	var set_time =(set_arr==null)?15 : set_arr;
 
    names =  ['硝酸','硝酸2','硝酸3','硝酸4','硝酸5','硝酸6','硝酸7','硝酸8','硝酸9','硝酸10'];
	var values = [220, 182, 191, 234, 290,220, 182, 191, 234, 350];//实际值
	var cbthNumber=100;//预算值   用实际值除以预算 = 预算结果
	var cbtnarr=[0];
	for(var i=0; i<values.length;i++){
		cbtnarr.push(parseInt(values[i]/cbthNumber*30))
	}
	console.log(cbtnarr);
	var values2 = [120, 112, 111, 134, 120,130, 122, 141, 134, 150];
	var max = values[0];
	var max = 900;
		 for(var i=0; i<values.length;i++){
		 	if(max<values[i]){
		 		max=values[i];
		 	}
	 	};
 
	 	var  marklines={
            data : [{
                    name: 'Y 轴值为 100 的水平线',
                    yAxis: max/tomonth*set_time,
                 }],
            symbol:'arrow',
        };
 
	option = {
    color: ['#3398DB'],
 	tooltip:{
 		trigger: 'axis',
 	     formatter: function (params, ticket, callback) {//atime  空
 		var forname = params[0].axisValue;//获取名称
 		var fordata = params[0].data;//获取名称对应的数据
 		var forcbdata =  cbtnarr[params[0].dataIndex];//获取名称对应的数据
 		var Saleer= '销售完成率';
   		var abox = '<div><p>'+forname+':'+fordata+'</p><p>'+Saleer+':'+forcbdata+'%</p><p>'+atime+'</p></div>'
    return abox;
}
 	},
    legend: {
        show: true,
        icon:'bar',
        itemWidth:15,
        data: names
    },
    xAxis: {
        data:names
    },

   grid: {
	    	top:'13%',
	        left: '3%',
	        right: '2%',
	        bottom: '5%',
	        containLabel: true
	},
 
    yAxis:[ 
      {
            type: 'value',
            scale: true,
            name: '价格',

            max: 100,
            min: 0,
             axisLabel: {
	            formatter: '{value}  %'
	        }
        },
        {
            type: 'value',
            scale: true,
            name: '预购量',
            max: 900,
            min: 0,
            splitLine:{
            	show:false
            }
        }
    ],
    series: [
    {
    	type: 'bar',
	    markLine : marklines,
	    barWidth: '10%',
	    data: values,
	    yAxisIndex: 1,
	    itemStyle:{
            normal:{
                color:'#3398DB'
            }
        }
    }, { 
	    type: 'bar',
	    barWidth: '10%',
	    barWidth : 5,
	    data: values2,
	    yAxisIndex: 1,
	    itemStyle:{
            normal:{
                color:'#62c0d0',
                borderType:'dashed'
            }
        }
	    
    },{
        type: 'scatter',
        name: '硝酸'
    }, {
        type: 'scatter',
        name: '硝酸2'
    }, {
        type: 'scatter',
        name: '硝酸3'
    }, {
        type: 'scatter',
        name: '硝酸4'
    }, {
        type: 'scatter',
        name: '硝酸5'
    }, {
        type: 'scatter',
        name: '硝酸6'
    }, {
        type: 'scatter',
        name: '硝酸7'
    }, {
        type: 'scatter',
        name: '硝酸8'
    }, {
        type: 'scatter',
        name: '硝酸9'
    }, {
        type: 'scatter',
        name: '硝酸10'
    }]
};

myChart.on('legendselectchanged', function(params) {
    var option = {};
    var newNames = [];
    var newValues = [];
    for(var i = 0; i < names.length ;i ++){
        if(params.selected[names[i]] == true){
            newNames.push(names[i]);
            newValues.push(values[i]);
        }
    }
    
    myChartbudget.setOption({
        xAxis: {
        data: newNames
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: newValues
    }]
    })
});
		 myChart.setOption(option);
	 
};
