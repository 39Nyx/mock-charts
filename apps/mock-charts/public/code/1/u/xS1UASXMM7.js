option = {
		backgroundColor: '#ffffff',
       
        title: {
        text: ['{a|56}' + '{b|/13}\n' + '{c|总数}' + '{d|网站}'],
        textStyle: {
            rich: {
                a: {
                    color: '#3e4956',
                    fontSize: 50,
                    fontFamily: 'HATTEN',
                    width: 70,
                    lineHeight: 60,
                    
                },
                b: {
                    color: '#9da1a7',
                    fontSize: 30,
                    fontFamily: 'HATTEN',
                    lineHeight: 60
                },
                c: {
                    color: '#3e4956',
                    fontSize: 12,
                    fontWeight: 500,
                    width: 70,
                    padding:[10,0,0,15]
                },
                d: {
                    color: '#3e4956',
                    fontSize: 12,
                    fontWeight: 500,
                    padding:[10,0,0,10]
                },
            }
        },
        left: '42%',
        bottom: '26%'

    },
    	tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    	},
		 series: [
			{
				name:'访问来源',
				type:'pie',
				color: ['#028BFF', '#0065BA', '#50E3C2', '#12CBF6'],
				center:['50%','50%'],
				radius: ['50%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: { //图形样式
					normal: {
					borderWidth: 2,
					borderColor: '#ffffff',
					}
				},
				label: {
					normal: {
						show: false,
						position: 'center'
					},
				
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[
					{value:35, name:'直接访问'},
					{value:30, name:'邮件营销'},
					{value:24, name:'联盟广告'},
					{value:36, name:'重要资产'}

				]
			}
		 ]
	};