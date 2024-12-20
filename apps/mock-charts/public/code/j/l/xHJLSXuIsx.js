option = {
         title : {
            text: '正在进行中的项目',
            x:'right',
            y:20,
            textStyle:
            {
                color:'#55b4f8'
            }
        },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    color:['#74c31f','#d35833','#00ccff','#ffcc00','#ffdc90'],
	    legend: {
	        orient: 'vertical',
	        x: 'right',
	        y:48,
	        data: ['工程类','货物类','服务类','投融资类','其他'],
	        formatter:function(name){
	        	var oa = option.series[0].data;
	        	var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
	        	for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                    	return name + '     ' + oa[i].value + '     ' + (oa[i].value/num * 100).toFixed(2) + '%';
                    }
	        	}
	        }
	    },
	    series : [
	        {
	            name: '签到比例分析',
	            type: 'pie',
	            radius : '55%',
	            center: ['40%', '50%'],
	            data:[
	                {value:335, name:'工程类'},
	                {value:310, name:'货物类'},
	                {value:234, name:'服务类'},
	                {value:135, name:'投融资类'},
	                {value:125, name:'其他'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                },
	                 normal: {
	                    label:{ 
                            show: true, 
//	                            position:'inside',
                            formatter: '{b} : {c} ({d}%)' 
                        }
	                },
                    labelLine :{show:true}
	            }
	        }
	    ]
	};