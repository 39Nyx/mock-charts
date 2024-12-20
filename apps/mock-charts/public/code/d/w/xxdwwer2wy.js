var data=[[0.58, 0.6],[0.58, 0.6]];
    var options = {
        backgroundColor:"#000",
     graphic: [
                    {
                        type: 'group',
                        top: '79%',
                        left: 'center',
                        id: 'data',
                        children: [
                            {
                                type: 'text',
                                id: 'current',
                                top:'middle',
                                style: {
                                    text: "主动评价率",
                                    font: '18px "SourceHanSansCN-Regular", sans-serif',
                                    fill: '#ffffff',
                                    lineHeight:28,
                                    textAlign: 'center'
                                }
                            }
                        ]
                    }
                ], 
        series: [{
            type: 'liquidFill',
            data: data[0],
            radius: '45%',
            center:['50%','51%'],
            color: ['rgba(4,187,206,1)', 'rgba(4,187,206,0.5)'],//设置颜色系
            outline: {
                show: false
            },
			backgroundStyle: {
                borderColor: 'rgba(2,222,242,1)',
                borderWidth: 1,
                textStyle:{
		            color:'rgba(255,255,255,0)',
		            fontSize:14
	        	},
	            color: 'rgba(7,189,207,0)',
	            shadowColor: 'rgba(10,192,212,0.5)',
	            shadowBlur: 10
            },
           
            label: { 
		        normal: {
		
		            textStyle: {
		                color: '#00EBFF', //波浪上文本颜色
		                // insideColor: 'yellow', //波浪内部字体颜色
		                fontSize: 18
		            },
		            position: ['50%', '22%'], //Text position is at the center by default. label.position can be set to be 'inside', 'left', 'right', 'top', 'bottom', or horizontal and vertical positions like ['10%', '20%'], which means '10%' to the left (controlled by label.align, which can be 'left', 'center', or 'right') and '20%' to the top (controlled by label.baseline, which can be 'top', 'middle', or 'bottom').
		            // position:'top'
		            // align: 'center',
		            // baseline: 'center'
		 
		        }
		    }
        }]
         
    };