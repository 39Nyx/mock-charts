var data =[{name: '小', value: 10}]
var dataValue = 10;
var colorList = ['#ee2228', '#fb8b1d', '#297fff', '#00f8ff', '#5ec79c'];
var dataColor = ''
if (data[0].name === '大') {
    dataColor = colorList[0];
} else if (data[0].name === '较大') {
    dataColor = colorList[1];
} else if (data[0].name === '一般') {
    dataColor = colorList[2];
} else if (data[0].name === '较小') {
    dataColor = colorList[3];
} else if (data[0].name === '小') {
    dataColor = colorList[4];
}
option = {
    backgroundColor: '#fff',
    animation: false,
    series : [
				{
					type:'pie',
					radius : '55%',
					center: ['50%', '50%'],
					labelLine: {
						show: false
					},
					data:[
						{
							value:data[0].value,
							itemStyle: {
								color: dataColor
							},
							labelLine: {
								show: false
							},
							label: {
								show: false
							}
						},
						{
							value:100 - data[0].value,
							itemStyle: {
								color: '#ededed'
							},
							labelLine: {
								show: false
							},
							label: {
								show: false
							}
						}
					]
				}
			]
};