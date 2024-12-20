option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问', '邮件营销']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: false, position: 'insideRight'}}},
            data:[320, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            symbol: '/图片togoal.png',     
			symbolSize: [1,40],
           itemStyle: {normal: {
				lineStyle: {  width: 0,},
				testStyle:{color :'#000', fontSize:12,},
				label : {show: true, position: 'right'},
				color:'#000'
				},},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
       
    ]
};
var ser = option.series;
var seriesLen = ser.length;
var sum = [];
for (var i = 0; i < ser[0].data.length; i++) {
  var sums = ser[0].data[i]/ ser[1].data[i];
	sum.push(sums.toFixed(4));
}


option.series.push({
            name:'百分比',
            type:'bar',
            stack: '总量',
            itemStyle : { 
              normal: {
                label : {
                  show: true, position: 'right',
                  textStyle:{color:'#000'},
                  formatter:function(v){
                    return (v.value*100).toFixed(2)+'%';
                  }
                 },
                 color:'#fff',
              }
            },
            data:sum
        });
myChart.setOption(option);                   

