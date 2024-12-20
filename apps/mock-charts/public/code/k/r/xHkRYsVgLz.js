var typeArr = ["鲜花","星星","香蕉","嫌弃"];
var typeIndex = 1;
var selectedRange = null;
var option = null;
var str = "";
var data = [];
var geoCoordMap = {};
var name = "虚拟地图区域柱状图"
var mapName = 'china'
// 地图特征
var mapFeatures = echarts.getMap(mapName).geoJson.features;
mapFeatures.forEach(function(v){
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;
    data.push({
    	// 需要挨个处理各地区数据（不使用随机产生的数）：另外需要构造的数据是柱图数据
    	"name":name,
    	"value":[
    	{name:"鲜花",value:Math.round(Math.random() * 100 + 10)},
    	{name:"星星",value:Math.round(Math.random() * 100 + 10)},
    	{name:"香蕉",value:Math.round(Math.random() * 100 + 10)},
    	{name:"嫌弃",value:Math.round(Math.random() * 100 + 10)}
    	]
    })
});
// 地理坐标图(打印出来方便查看)
console.log("===========geoCoordMap===============");
for (var i in geoCoordMap) {
	console.log(geoCoordMap[i]);
}
console.log(geoCoordMap);
console.log("==============data===============");
console.log(data);

//变换地图数据（格式）：pie
// function convertMapDta(type,data){
// 	var mapData = [];
// 	data.forEach(function(v){
// 		v.value.forEach(function(v1){
// 			if(String(v1.name) === String(type)){
// 				mapData.push({
// 					"name":v.name,"value":v1.value
// 				})
// 			}
// 		})
// 	});
// 	mapData.push({
// 		name: '南海诸岛',
// 		itemStyle: {
// 			normal: {
// 				opacity:0
// 			}
// 		},
// 		label: {
// 			normal: {
// 				show: false
// 			}
// 		}
// 	});

//变换地图数据（格式）：bar
function convertMapDta_bar(type,data){
	var mapData = [];
	data.forEach(function(v){
		v.value.forEach(function(v1){
			if(String(v1.name) === String(type)){
                // 数据格式：data: [120, 200, 150, 80]
                mapData.push({
                	"name":v.name,"value":v1.value
                })
            }
        })
	});
	return mapData;
}
console.log("================mapData==================")
console.log(convertMapDta_bar(typeArr[typeIndex],data))
console.log("=========================================")

/*resetPie*/
// function resetPie(myChart,params,geoCoordMap,typeIndex){
// 	var op = myChart.getOption();
// 	var ops = op.series;
// 	ops.forEach(function(v,i){
// 		if(i > 0){
// 			var geoCoord = geoCoordMap[v.name];
// 			var p = myChart.convertToPixel({seriesIndex: 0}, geoCoord);
// 			v.center = p; 
// 			if(params != 0 && params.zoom){
// 				v.radius = v.radius * params.zoom;
// 			}
// 			if(params != 0 && params.selected){
// 				var rangeFirstNumber = params.selected[0];
// 				var rangeSecondNumber = params.selected[1];
// 				var pd = v.data[typeIndex].value;
// 				if(pd < rangeFirstNumber || pd > rangeSecondNumber){
// 					v.itemStyle.normal.opacity = 0;
// 				}else{
// 					v.itemStyle.normal.opacity = 1;
// 				}
// 			}
// 		}
// 	});
// 	myChart.setOption(op,true);
// }

function resetBar(myChart,params,geoCoordMap,typeIndex){
	var op = myChart.getOption();
	var ops = op.series;
	ops.forEach(function(v,i){
		if(i > 0){
			var geoCoord = geoCoordMap[v.name];
			var p = myChart.convertToPixel({seriesIndex: 0}, geoCoord);
			v.center = p; 
			if(params != 0 && params.zoom){
				v.radius = v.radius * params.zoom;
			}
			if(params != 0 && params.selected){
				var rangeFirstNumber = params.selected[0];
				var rangeSecondNumber = params.selected[1];
				var pd = v.data[typeIndex].value;
				if(pd < rangeFirstNumber || pd > rangeSecondNumber){
					v.itemStyle.normal.opacity = 0;
				}else{
					v.itemStyle.normal.opacity = 1;
				}
			}
		}
	});
	myChart.setOption(op,true);
}
/*addPie*/
// function addPie(chart,data) {
// 	var op = chart.getOption();
// 	var sd = option.series;
// 	for (var i = 0; i < data.length; i++) {
// 		var randomValue = Math.round(Math.random() * 30);
// 		var radius = randomValue <= 10 ? 10 : randomValue;
// 		var geoCoord = geoCoordMap[data[i].name];
// 		if (geoCoord) {
// 			var vr = [];
// 			(data[i].value).map(function(v,j){
// 				vr.push({name:v.name,value:v.value});
// 			});
// 			var p = chart.convertToPixel({seriesIndex: 0}, geoCoord);
// 			sd.push(
// 			{
// 				name:data[i].name,
// 				type:'pie',
// 				tooltip:{
// 					formatter:function(params){
// 						return params.seriesName + "<br/>" + params.name + " : " + params.value;
// 					}
// 				},
// 				radius : radius,
// 				center: p,
// 				data:vr,
// 				zlevel:4,
// 				label: {
// 					normal: {
// 						show: false,
// 					},
// 				},
// 				labelLine: {
// 					normal: {
// 						show: false
// 					}
// 				},
// 				itemStyle:{
// 					mormal:{
// 						opacity:1 
// 					}
// 				}
// 			}
// 			);
// 		}
// 	}
// 	return sd;
// };

/*addBar*/
function addBar(chart,data) {
	var op = chart.getOption();
	var sd = option.series;
	for (var i = 0; i < data.length; i++) {
		var randomValue = Math.round(Math.random() * 30);
		var radius = randomValue <= 10 ? 10 : randomValue;
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			var vr = [];
			(data[i].value).map(function(v,j){
				// vr.push({name:v.name,value:v.value});
				vr.push(v.value);
			});
			var p = chart.convertToPixel({seriesIndex: 0}, geoCoord);
			console.log("================柱图数据==================")
			console.log(vr)
			console.log("================柱图位置==================")
			console.log(p)
			console.log("================option操作数==================")
			op.xAxis = {
				type: 'category',
				data: ['鲜花', '星星', '香蕉', '嫌弃']
			}
			op.yAxis = {
				type: 'value'
			}
			console.log(op)
			sd.push(
				{
					name:data[i].name,
					type:'bar',
					tooltip:{
						formatter:function(params){
							return params.seriesName + "<br/>" + params.name + " : " + params.value;
						}
					},
				radius : radius,
				center: p,
				data:vr,
				zlevel:4,
				label: {
					normal: {
						show: false,
					},
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				itemStyle:{
					mormal:{
						opacity:1
					}
				},
				//配置样式
				itemStyle: {
		            //通常情况下：
		            normal:{
		　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
		color: function (params){
			var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)'];
			return colorList[params.dataIndex];
		}
	},
		            //鼠标悬停时：
		            emphasis: {
		            	shadowBlur: 10,
		            	shadowOffsetX: 0,
		            	shadowColor: 'rgba(0, 0, 0, 0.5)'
		            }
		        }
		        //设置柱子的宽度
		        // barWidth : 120,
		    });
		}
	}
	return sd;
};

/* 指定图表的配置项和数据:pie*/
// var option = {
//     title: {
//         text: 'test',
//         left: 'center',
//         textStyle: {
//             color: '#fff'
//         }
//     },
//     tooltip : {
//         trigger: 'item',
//         formatter:function(params){
//             if(params.value){
//                 return params.name + "<br/>"+ typeArr[typeIndex] +": "+ params.value;
//             }
//         }
//     },
//     visualMap: {
//         min: 0,
//         max: 120,
//         left: 'right',
//         top: 'bottom',
//         seriesIndex:0,
//         text: ["高", "低"],
//         calculable: true,
//         color: ['#c05050','#e5cf0d','#5ab1ef'],
//     },
//     series : [{
//         name: 'chinaMap',
//         type: 'map',
//         mapType: '楚雄彝族自治州',
//         roam:true,
//         label: {
//             normal: {
//                 show: true
//             },
//             emphasis: {
//                 show: true
//             }
//         },
//         itemStyle:{
//             normal:{
//                 areaColor:"#eee"
//             }
//         },
//         data:convertMapDta(typeArr[typeIndex],data),
//         /*zlevel:3*/
//     }]
// };

// 指定图表的配置项和数据:bar
option = {
	xAxis: {
		type: 'category',
		data: ['鲜花', '星星', '香蕉', '嫌弃']
	},
	yAxis: {
		type: 'value'
	},
	title: {
		text: name,
		left: 'center',
		textStyle: {
			color: 'black'
		}
	},
	tooltip : {
		trigger: 'item',
		formatter:function(params){
			if(params.value){
				return params.name + "<br/>"+ typeArr[typeIndex] +": "+ params.value;
			}
		}
	},
	visualMap: {
		min: 0,
		max: 120,
		left: 'right',
		top: 'bottom',
		seriesIndex:0,
		text: ["高", "低"],
		calculable: true,
		color: ['#c05050','#e5cf0d','#5ab1ef'],
	},
	series: [
	{
		name: 'chinaMap',
		type: 'map',
		mapType: mapName,
		roam:true,
		label: {
			normal: {
				show: true
			},
			emphasis: {
				show: true
			}
		},
		itemStyle:{
			normal:{
				areaColor:"#eee"
			}
		},
		data:convertMapDta_bar(typeArr[typeIndex],data),
		/*zlevel:3*/
	}
]
};
if (option && typeof option === "object") {
	myChart.setOption(option, true);
}
/*pie*/
// addPie(myChart,data);
/*bar*/
addBar(myChart,data);
console.log("===========option=================");
console.log(option);
myChart.setOption(option,true);

/*饼图跟着地图移动:pie*/
// myChart.on('georoam', function (params) {
// 	resetPie(myChart,params,geoCoordMap,typeIndex);
// });
// myChart.on('datarangeselected', function (params) {
// 	resetPie(myChart,params,geoCoordMap,typeIndex);
// });
// window.addEventListener("resize",function(){
// 	myChart.resize();
// 	resetPie(myChart,0,geoCoordMap);
// })

/*饼图跟着地图移动:bar*/
myChart.on('georoam', function (params) {
	resetBar(myChart,params,geoCoordMap,typeIndex);
});
myChart.on('datarangeselected', function (params) {
	resetBar(myChart,params,geoCoordMap,typeIndex);
});
window.addEventListener("resize",function(){
	myChart.resize();
	resetBar(myChart,0,geoCoordMap);
})

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);