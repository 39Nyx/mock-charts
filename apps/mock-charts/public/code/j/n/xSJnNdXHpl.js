option = {
    title : {
        text: '重楼标本分布',
        subtext: 'From NSII',
        left: 'center',
    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    color:['#666666','#5555FF','#FF00FF','#FF7744','#00FFFF','#33FF33','#FFFF00'],
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        y:'center',
	        data: ['白花重楼','长柱重楼','具柄重楼','黑籽重楼','滇重楼','狭叶重楼','七叶一枝花'],
	        formatter:function(name){
	        	var oa = option.series[0].data;
	        	var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
	        	for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                    	return name;
                    }
	        	}
	        }
	    },
	    series : [
	        {
	            name: '重楼标本分布分析',
	            type: 'pie',
	            radius : '50%',
	            center: ['60%', 'center'],
	            data:[
	                {value:11, name:'白花重楼'},
	                {value:27, name:'长柱重楼'},
	                {value:54, name:'具柄重楼'},
	                {value:133, name:'黑籽重楼'},
	                {value:345, name:'滇重楼'},
	                {value:1102, name:'狭叶重楼'},
	                {value:1398, name:'七叶一枝花'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};