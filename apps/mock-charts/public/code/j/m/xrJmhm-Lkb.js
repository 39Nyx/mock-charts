

var world1="/asset/get/s/data-1493730390576-rkkPNZIyb.js";

option = {
	geo: {
		map: 'world1',
	},
	//backgroundColor:'black',  		// 图表背景色
	
	tooltip:{
		trigger:'item',
		formatter:function(params){
			var value=(params.value +'').split('.');
			return params.name +':'+value;
		}
	},
	
	series:[
		{
			name:'大洲',
			type:'map',
			maptype:'world1',
			roam:true,
			itenStyle:{
				emphasis:{label:{show:true}}
			},
			data:[
				{name:'Asia',value:185},
				{name:'North America',value:185},
				{name:'Europe',value:185},
				{name:'Africa',value:185},
				{name:'South America',value:185},
				{name:'Australia',value:185},
				{name:'Antarctica',value:185}
			]
		}
	]	
};