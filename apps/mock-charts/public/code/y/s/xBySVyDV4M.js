option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    
    series: [
        {
            name:'访问来源',
            type:'pie',
            color:['#2d7332','#5adae5','#1970b3','#f1f58e' ],
            radius: [0, '25%'],
            label: {
                normal: {
                    show:false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:250, name:'SQL'},
                {value:879, name:'代码'},
                {value:1048, name:'木马'},
                {value:1548, name:'泄漏'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            color:['#7becf6','#0065BA','#12CBF6', '#06addd', '#066bdd'],
            radius: ['30%', '45%'],
            label: {
                normal: {
                    show: true,
                    textStyle: { fontSize: 14, color: '#666' }
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    length:6,
                    length2:15,
                    lineStyle:{
                        color:'#999'
                    }
                }
            },
            itemStyle: { 
				normal: {
					borderWidth: 2,
					borderColor: '#ffffff',
				}
			},
            data:[
                {value:40, name:'代码执行'},
                {value:310, name:'木马上传'},
                {value:320, name:'跨站脚本'},
                {value:600, name:'信息泄漏'},
                {value:40, name:'SQL注入'},
               
            ]
        }
    ]
};