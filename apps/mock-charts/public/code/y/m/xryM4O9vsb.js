option = {
			color:['#745bfa','#fec178','#72f1da','#4cd1fd','#3faefc','#8b76f9'],
		    title:{
		        text:'ss',
		        textStyle:{
		            color:'red',
		            fontSize:20
		        }
		    },
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'horizontal',
		        x: 'center',
		        y:'bottom',
		        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		    },
		    series: [
		        {
		            name:'访问来源',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            labelLine:{
		                normal:{
		                    length2:95
		                }
		            },
		            label: {
		                normal: {
		                    formatter: "{b}{d}%\n\n",
		                    padding:[0,-95],
		                    rich: {
		                        a: {
		                            color: 'red',
		                            fontSize: 14,
		                            height:30
		                        },
		                        b: {
		                            color:"blue",
		                            fontSize: 16,
		                        }
		                    }
		                }
		            },
		            data:[
		                {value:335, name:'直接访问'},
		                {value:310, name:'邮件营销'},
		                {value:234, name:'联盟广告'},
		                {value:135, name:'视频广告'},
		                {value:1548, name:'搜索引擎'}
		            ]
		        }
		    ]
		};
		
	//参考链接https://segmentfault.com/q/1010000009715657