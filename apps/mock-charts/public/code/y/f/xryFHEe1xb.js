option = {
    color: ['#303f9f', '#38b4ee', '#4caf50'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
  	legend: {
				orient:'vertical',
				right:'16%',
				top:'30%',
				itemGap: 20,
				itemWidth:15,
				itemHeight:10,
				textStyle:{
					color:'#999999',
					fontSize: 14,
				},
				data: [
					{name:'高危', icon:'rect'},
					{name:'中危', icon:'rect'},
					{name:'低危',icon:'rect'}]
			},
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        center: ['40%', '56%'],
        data: [{
            value: 35,
            name: '高危'
        }, {
            value: 10,
            name: '中危'
        }, {
            value: 34,
            name: '低危'
        }],
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};