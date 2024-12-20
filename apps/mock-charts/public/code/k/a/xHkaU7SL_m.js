var custDate= ['06-01', '06-15', '06-30', '07-01', '07-15', '07-31', '08-01', '08-15', '08-31'];
var CustScxl= [120, 132, 201, 134, 90, 230, 120,100,110];

option = {
    title : {
        text: '生产效率',
        subtext: '',
        textStyle:{
            fontSize:20,
            color:'#ccc'
        }
    },
    legend: {
        data:['近三个月'],
        right:10,
        top:20,
        textStyle:{
            color:'#fff'
        }
    },
    grid:{
        top:60,
        left:40,
        right:30,
        bottom:30
    },
    xAxis: {
        type: 'category',
        data: custDate,
        axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
    },
    yAxis: {
        type: 'value',
        axisLine: {
	                lineStyle: {
	                    color: '#ccc'
	                }
	            }
    },
    series: [{
        name:'近三个月',
        data: CustScxl,
        type: 'line',
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 10,
        label: {
            
            normal: {
                show: true,
                formatter:'{c}%',
                position: 'top',
                color:'#ffaa22'
            }
        },
        lineStyle: {
                color: '#00ff33'
            },
        smooth: true
    }]
};
