option = {
	    title: {
	        text: '上周排名',
	        textStyle:{
	        	color:'red',
	        	fontStyle:'italic',
	        	fontWeight:'bolder',
	        },
	        //padding:[10,10],
	        //left:'left',
	        //top:'0',
	        //backgroundColor:'rgba(128, 128, 128, 0.5)',
	       // borderColor:'#e1e1e1',
	        //borderWidth:'2'
	    },
	    tooltip: {
	    	show:false  //提示组件
	        //trigger: 'axis'
	    },
	    legend: {
	    	//show:false
	        data:['最高气温'],
	        orient:'vertical'
	    },
	    toolbox: {
	        show: false,
	        /*feature: {
	            dataZoom: {
	                yAxisIndex: 'none'
	            },
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }*/
	    },
	    xAxis:  {
	    	name:'星期',
	    	//nameLocation:'end',
	    	//nameGap:20,
	        type: 'category',
	        boundaryGap: false,
	        data: ['周一','周二','周三','周四','周五','周六','周日']
	    },
	    yAxis: {
	    	name:'军衔',
	        type: 'category',
	        boundaryGap: false,
	        data: ['新兵', '列兵', '上等兵', '下士', '中士', '上士','少尉','中尉','上尉','少校','中校','上校','大校','少将','中将','上将','大将','元帅']
	        /*axisLabel: {
	            formatter: function(value,index){
	            	console.log(index)
	            }
	        }*/
	    },
	    series: [
	        {
	            //name:'最高气温',
	            type:'line',
	            data:[
	            	// xAxis    yAxis
	            	[  0,        0], // 意思是此点位于 xAxis: '星期一', yAxis: 'a'。
	            	[  1,  		 2], // 意思是此点位于 xAxis: '星期四', yAxis: 'm'。
	            	[  2,       '上等兵'], // 意思是此点位于 xAxis: '星期三', yAxis: 'p'。
	            	[  3,        3],
	            	[  4,        6],
	            	[  5,        3],
	            	[  6,        5]
	            ]
	        }
	    ]
	};