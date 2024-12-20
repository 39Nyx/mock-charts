option = {
    backgroundColor: '#1f1e26',
    legend: {
    	textStyle:{
            lineHeight : 12,
            color : '#74A1E7'
        },
        data:['同比', '环比', '占比']
    },
    xAxis: [
        {
            type: 'category',
            axisLine : {
                lineStyle : {
                    color : '#7B95C5'
                }
            },
            axisTick : {
                show : false
            },
            axisLabel: {
            	margin : 18,
                color: '#7B95C5'
            },
            data: ['1月', '2月', '3月']
        },
        {
            type: 'category',
            axisLine:{
                show: false
            },
            axisTick:{
                show : false
            },
            axisLabel: {
            	show : false
            },
            data: ['1月', '2月', '3月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'cv<1组数占比',
            nameTextStyle : {
                padding : [0, 0, 0, -5],
                color : '#7B95C5'
            },
            min: 0,
            max: 400,
            interval: 100,
            axisLine : {
                show : false
            },
            axisTick : {
                show : false
            },
            axisLabel: {
                formatter: '{value}%',
                color : '#7B95C5'
            },
            splitLine : {
                lineStyle : {
                    type : 'dotted',
                    color : '#7B95C5'
                }
            }
	    },
        {
            type: 'value',
            name: '增长率',
            nameTextStyle : {
                padding : [0, -35, 0, 0],
                color : '#7B95C5'
            },
            min: 5,
            max: 25,
            interval: 5,
            axisLine : {
                show : false
            },
            axisTick : {
                show : false
            },
            axisLabel: {
                formatter: '{value} %',
                color : '#7B95C5'
            },
            splitLine : {
                lineStyle : {
                    type : 'dotted',
                    color : '#7B95C5'
                }
            }
        }
    ],
	series: [
        {
            name:'同比',
            type:'bar',
            barWidth: 8,
            itemStyle: {
                barBorderRadius: 3,
                color: '#A9EAFD'
            },
            data:[190, 190, 190]
        },
        {
            name:'环比',
            type:'bar',
            barWidth: 8,
            itemStyle: {
                barBorderRadius: 3,
                color: '#6798FF'
            },
            data:[380, 380, 380]
        },
        {
            name:'占比',
            type:'line',
            yAxisIndex: 1,
            smooth : true,
            itemStyle: {
                color: '#5FE9B3'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, 
                        color: 'rgba(100, 233, 177, 0.2)'
                    }, {
                        offset: 1, 
                        color: 'rgba(36, 216, 223, 0)'  
                    }],
                    global: false 
                }
            },
            data:[15, 10, 22]
        }
	]
};