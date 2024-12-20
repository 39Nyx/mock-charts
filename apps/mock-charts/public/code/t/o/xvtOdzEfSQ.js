function historyLine(xzdsj,fft,fft1st,fft1stX,fft1stY,fft2nd,fft2ndX,fft2ndY,fft3rd,fft3rdX,fft3rdY,fft4th,fft4thX,fft4thY,fft5th,fft5thX,fft5thY,selected){
	// closeLine();
	$("#lsqx").show();
	var x1 = xzdsj;
	x1 = x1.split(",");
	var fft1 = fft;
	fft1 = fft1.split(",");

	fft1st = fft1st.split(",");

	fft2nd = fft2nd.split(",");

	fft3rd = fft3rd.split(",");
	
	fft4th = fft4th.split(",");

	fft5th = fft5th.split(",");
	// console.log(xzdsj);
	// console.log(x);
	var xzdsjArr= xzdsj;
	var arrayLength = xzdsjArr.toString().split(',');
	var xzdsjArrayLength= new Array();
	var xzdsjArrayLengthStr= new Array();
	var xzdsjArrayLengthStr0= new Array();
	var step=0.32/(arrayLength.length)
	for(var i=0;i<arrayLength.length;i++){
		xzdsjArrayLength[i]=keepTwoDecimal(i*step);
		xzdsjArrayLengthStr+=keepTwoDecimal(i*step)+","
		xzdsjArrayLengthStr0+="0"+","
	}
	xzdsjArrayLengthStr = xzdsjArrayLengthStr.substring(0, xzdsjArrayLengthStr.lastIndexOf(','));
	xzdsjArrayLengthStr0 = xzdsjArrayLengthStr0.substring(0, xzdsjArrayLengthStr0.lastIndexOf(','));
	xzdsjArrayLengthStr=xzdsjArrayLengthStr.split(",")
	xzdsjArrayLengthStr0=xzdsjArrayLengthStr0.split(",")
	// console.log(xzdsjArrayLengthStr);
	data = [
		x1,  //速度曲线
		fft1st,  //fft
		fft2nd,
		fft3rd,
		fft4th,
		fft5th,
	]

	dataX = xzdsjArrayLengthStr;
	dataX0 = xzdsjArrayLengthStr0;
	dataY = ['速度曲线','频率曲线('+ fft1stX +'Hz)','频率曲线('+ fft2ndX +'Hz)','频率曲线('+ fft3rdX +'Hz)','频率曲线('+ fft4thX +'Hz)','频率曲线('+ fft5thX +'Hz)'];

//vdata里面存放的是处理之后的数据
	var vdata = [];
	var FFTdata = [];

	for(i=0;i<dataY.length;i++){
		vdata[i] = [];   //vdata里面存放的是二维数组
	}
	for(i=0;i<dataY.length;i++){
		FFTdata[i] = [];   //vdata里面存放的是二维数组
	}
//将处理完之后的数据存放到 vdata 里面
	for(var t=0;t<dataY.length;t++){
		var y = dataY[t];
		for(var k=0;k<data[0].length;k++){
			for(var p=0;p<dataX.length;p++){
				var x = dataX[p];
				var z = data[t][p];
				vdata[t].push([x,y,z]);
				FFTdata[t].push([y,x,z]);
			}
			break;
		}
	}
	var myChart = echarts.init(document.getElementById('lsqx'),'macarons');
	myChart.clear();
	var lsqx = document.getElementById('lsqx');
	// lsqx.style.display = "block";
	var option;
	// console.log(xzdsj);
	option = {
		title: {
			text: selected
			// ,
			// subtext:selected,
		},
		xAxis3D: {
			type: 'category',
			name: '',
			data: dataX,
			axisLabel:{
				show: false,
				interval: 0  //使x轴都显示
			},
			splitLine:{
				show:false
			}
		},
		yAxis3D: {
			type: 'category',
			name: '',
			data: dataY,
			axisLabel:{
				show: true,
				interval: 0   //使y轴都显示
			}
		},
		zAxis3D: {
			type: 'value',
			name: ''
		},
		//图例
		legend: {
			orient: 'vertical',
			right: 10,
			top: 230,
			icon: 'roundRect',
			textStyle:{
				color: '#fff'
			}
		},
		tooltip:{
			show:true
		},
		grid3D: {
			boxWidth: 900,
			boxHeight:300,
			boxDepth: 200,
			axisLine: {
				show: true,
				interval: 0,
				lineStyle: {
					color: '#fff'
				}
			},
			viewControl: {
				distance: 500,
				minDistance: 40,
				maxDistance: 800,
			},
			splitArea:{
				show:true

			},
			light:{
				color: '#fff',
				shadow: true
			}
		},
		toolbox: {
			feature: {
				dataView: {show: true, readOnly: false},
				restore: {show: true},
				saveAsImage: {show: true},
				// dataZoom: {  show: true  },
				myTool1: {
					show: true,
					title: '关闭',
					icon: 'path://M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575',
					onclick: function (){
						$("#lsqx").hide();
						$("#datetime1").hide();
						$("#timeList").hide();
					}
				}
			}
		},
		series: [
			{
				type: 'scatter3D',
				name: '速度曲线',
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				bevelSmoothness:4,
				data:vdata[0]   //每个区的数据一一对应
			},
			{
				type: 'scatter3D',
				name: '频率曲线('+ fft1stX +'Hz)',
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[1]
			},
			{
				type: 'scatter3D',
				name: '频率曲线('+ fft2ndX +'Hz)',
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[2]
			},
			{
				type: 'scatter3D',
				name: '频率曲线('+ fft3rdX +'Hz)',
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[3]
			},
			{
				type: 'scatter3D',
				name: '频率曲线('+ fft4thX +'Hz)',
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[4]
			},
			{
				type: 'scatter3D',
				name: '频率曲线('+ fft5thX +'Hz)',
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[5]
			},
			{
				type: 'line3D', //当type为line3D时有label没有作用，官网没有label这个配置项
				name: '速度曲线',
				lineStyle: {
					width: 4
				},
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[0]    //每个区的数据一一对应
			}
			,
			{
				type: 'line3D',
				name: '频率曲线('+ fft1stX +'Hz)',
				lineStyle: {
					width: 3     //线的宽度
				},
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[1]
			},
			{
				type: 'line3D',
				name: '频率曲线('+ fft2ndX +'Hz)',
				lineStyle: {
					width: 3
				},
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[2]
			},
			{
				type: 'line3D',
				name: '频率曲线('+ fft3rdX +'Hz)',
				lineStyle: {
					width: 3
				},
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[3]
			},
			{
				type: 'line3D',
				name: '频率曲线('+ fft4thX +'Hz)',
				lineStyle: {
					width: 3
				},
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[4]
			},
			{
				type: 'line3D',
				name: '频率曲线('+ fft5thX +'Hz)',
				lineStyle: {
					width: 3
				},
				symbol: 'none',  //取消折点圆圈
				smooth: true,
				itemStyle: {normal: {areaStyle: {type: 'default'}}},
				data:vdata[5]
			}
		]
	};
	// option.legend.selected[selected] = true;
	myChart.setOption(option);
}
