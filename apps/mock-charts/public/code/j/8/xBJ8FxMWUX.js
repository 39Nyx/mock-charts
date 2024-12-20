
option = {
    color:['#3498db','#2ecc71'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
				left:'center',
				itemWidth:10,
				itemHeight:10,
				itemGap:25,
				bottom:'5%',
				textStyle: {color: '#3E4956',fontSize: 12,},
				data: [
					{name: '测评',icon: 'circle'}, 
					{name: '督办',icon: 'circle'},
				]
		  },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        min:0,
        max:25,
        splitNumber:5,
        axisLine:{show:false},
        axisTick:{show:false},
        // boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        axisLine:{show:false},
        axisTick:{show:false},
        data: ['三级备案','四级备案','五级备案']
    },
    series: [
        {
            name: '测评',
            type: 'bar',
            data: [13, 11, 11]
        },
        {
            name: '督办',
            type: 'bar',
            data: [16, 14, 14]
        }
    ]
};
