option = {
    backgroundColor: "#020d22",
    color:['#ff7444'],
	title:{
        text:'IP访问次数异常TOP ',
        left:'2%',
        textStyle:{
            fontSize:'14',
            fontWeight:'normal',
            // lineHeight:'24',
            color:'#6a9cd5'
        }
    },
    tooltip: {},
		grid: {
			top: '20%',
			left: '3%',
			right: '3%',
			bottom: '5%',
			containLabel: true,
		},
		xAxis: [{
			type: 'category',
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				 show: true,
				 lineStyle: {
					 color: '#233e64'
				 },
			 },
			 axisLabel: { //坐标轴刻度标签的相关设置
				textStyle: {
					 color: '#6a9cd5',
				},
				formatter: function (val) {
				    return (val.length > 4 ? (val.slice(0,3)+".."+val.slice(8,12)) : val ); 
				},
			 },
			axisTick: { show: false,},
			data: ['192.168.1.44', '192.168.1.56', '192.168.1.89', '192.168.1.71', '192.168.1.55'],

		}],
		yAxis: [{
			type: 'value',
			min: 0,
			splitNumber: 5,
			splitLine: {
				 show: true,
				 lineStyle: {
					 color: '#233e64'
				 }
			 },
			 axisLine: { show: false,},
			 axisLabel: {
				 textStyle: {
					 color: '#6a9cd5',
					 
				 },
			 },
			 axisTick: { show: false,}, 
		}],
		series: [
		   {
            type: 'bar',
            stack: 'chart',
            barWidth: '20%',
            data: [98,77,58,45,38],
          }
		]
};