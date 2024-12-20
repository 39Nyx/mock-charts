option = {
	     title:[
	            {text:"多饼图展示"},
		        {text:"标题1",x: '15%', y: '8%',textStyle:{fontSize:"14"}},
		        {text:"标题2",x: '40%', y: '8%',textStyle:{fontSize:"14"}},
		        {text:"标题3",x: '65%', y: '8%',textStyle:{fontSize:"14"}},
		        {text:"标题4",x: '15%', y: '42%',textStyle:{fontSize:"14"}},
		        {text:"标题5",x: '40%', y: '42%',textStyle:{fontSize:"14"}},
		        {text:"标题6",x: '65%', y: '42%',textStyle:{fontSize:"14"}},
		    ],
		
		    
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    series: [{
			        name: '任务完成率',
			        type: 'pie',
			        radius: '30%',
			        center: ['25%', '25%'],
			        clockwise: false,
			        data: [{
			            value: 45,
			            name: '已完成'
			        }, {
			            value: 25,
			            name: '未完成'
			        },
			        ],
			        label: {
			            normal: {
			                textStyle: {
			                    color: '#999',
			                    fontSize: 12,
			                }
			            }
			        },
			    },
			    {
			        name: '任务完成率',
			        type: 'pie',
			        radius: '30%',
			        center: ['50%', '25%'],
			        clockwise: false,
			        data: [{
			            value: 22,
			            name: '已完成'
			        }, {
			            value: 2,
			            name: '未完成'
			        }, ],
			        label: {
			            normal: {
			                textStyle: {
			                    color: '#110',
			                    fontSize: 12,
			                }
			            }
			        },     
			    },
			    {
			        name: '任务完成率',
			        type: 'pie',
			        radius: '30%',
			        center: ['75%', '25%'],
			        clockwise: false,
			        data: [{
			            value: 23,
			            name: '已完成'
			        }, {
			            value: 5,
			            name: '未完成'
			        }, ],
			        label: {
			            normal: {
			                textStyle: {
			                    color: '#110',
			                    fontSize: 12,
			                }
			            }
			        },     
			    },
			    {
			        name: '任务完成率',
			        type: 'pie',
			        radius: '30%',
			        center: ['25%', '60%'],
			        clockwise: false,
			        data: [{
			            value: 13,
			            name: '已完成'
			        }, {
			            value: 3,
			            name: '未完成'
			        }, ],
			        label: {
			            normal: {
			                textStyle: {
			                    color: '#110',
			                    fontSize: 12,
			                }
			            }
			        },     
			    },
			    {
			        name: '任务完成率',
			        type: 'pie',
			        radius: '30%',
			        center: ['50%', '60%'],
			        clockwise: false,
			        data: [{
			            value: 23,
			            name: '已完成'
			        }, {
			            value: 7,
			            name: '未完成'
			        }, ],
			        label: {
			            normal: {
			                textStyle: {
			                    color: '#110',
			                    fontSize: 12,
			                }
			            }
			        },     
			    },
			    {
			        name: '任务完成率',
			        type: 'pie',
			        radius: '30%',
			        center: ['75%', '60%'],
			        clockwise: false,
			        data: [{
			            value: 23,
			            name: '已完成'
			        }, {
			            value: 5,
			            name: '未完成'
			        }, ],
			        label: {
			            normal: {
			                textStyle: {
			                    color: '#110',
			                    fontSize: 12,
			                }
			            }
			        },     
			    }
	    	],
		   
		};