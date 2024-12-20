option= {
		    backgroundColor:'#fff',
		    tooltip: { },
		    series: [{
		        name: '明厨亮灶实施率',
		        type: 'pie',
		        radius: ['45%', '55%'],
		        center:['30%','50%'],
		        color:['#36e4bb','#CCCCCC'],
		        tooltip:{
		                 trigger: 'item',
		                 formatter: "{a}<br/>=(明厨亮灶实施数/持证单位数)*100%<br/> {b} : {c}"
		            },
		        label: {
		            normal: {
		                position: 'center'
		            }
		        },
		        itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
		        data: [{
		            value: 10,
		            name: '明厨亮灶实施数',
		            label: {
		                normal: {
		                    formatter: '\n{d} %\n\n{a}',
		                    textStyle: {
		                        fontSize: 18
		                    }
		                }
		            },
		        }, {
		            value: 0,
		            name: '未实施明厨亮灶单位数',
		            label: {
		                show:false,
		            },
		        }]
		    }]
		};