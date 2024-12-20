var yData = [];
for(var i=0;i<24;i++){
	if(i%2!=1) {
		yData.unshift(i+':00-'+(i+2)+':00')
	}
}
var normalcolor = new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
    offset: 0,
    color: '#75CBFD'
}, {
    offset: 1,
    color: '#04A3FF'
}]);
var maxcolor = new echarts.graphic.LinearGradient(1, 1, 0, 1, [{
    offset: 0,
    color: '#FFFFC2'
}, {
    offset: 1,
    color: '#F8F876'
}]);
var datas = [10, 22, 19, 10, 13, 10,10, 22, 19, 10, 13, 10];
var max = datas[0];
var len = datas.length;
var datastyle = [];
for (var i = 1; i < datas.length; i++){
    if (datas[i] > max) {
        max = datas[i];
    }
}
for(var i = 0;i<datas.length;i++){
    datastyle.push(
        {
            value:datas[i],
            itemStyle:{
                normal:{
                    color:datas[i] === max ? maxcolor:normalcolor
                }
            }
        }
    )
}
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        max:25,
        axisLine:{show:false},
        axisTick:{show:false},
        axisLabel: {
            textStyle:{
                fontSize:22,
                color:'#fff'
            }
        },
        splitLine:{
            show:true,
            lineStyle:{
                color:'#2BB1E7'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: yData,
        axisLine:{lineStyle:{color:'#2495C4'}},
        axisTick:{show:false},
        axisLabel: {
            textStyle:{
                fontSize:22,
                color:'#fff'
            }
        }
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            barWidth:20,
            data: datastyle
        }
    ]
};
