
var date = [];
var randomData = [];
var len = date.length;

for(var i = 0; i<10; i++){
	date.push('第' + (i+1) + '天');
	randomData.push(random(20,65));
}
// 指定图表的配置项和数据
option = {
    xAxis: {
        type: 'category',
        data: date,
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
        min:0,
        max:80
    },
    series: [{
        data: randomData,
        type:'line',
        // smooth:true,    //拐弯处变锋利
        symbol: 'none',//去除圆角
        sampling: 'average',
        animationDurationUpdate:2000, 
        // animationDelayUpdate:1000,
        // animationDurationUpdate:1000
        "markLine": {
            "silent": true,
            "symbol": "none",
            "label": {
                "position": "middle",
                "formatter": "{b}"
            },
            "data": [{
                "name": "超过70",
                "yAxis": 70,
                "lineStyle": {
                    "opacity": 0.7
                },
                "label": {
                    "position": "end",
                    "formatter": "{b}"
                }
            },{
                "name": "低于30",
                "yAxis": 30,
                "lineStyle": {
                    "opacity": 0.7
                },
                "label": {
                    "position": "end",
                    "formatter": "{b}"
                }
            }]
        },
        // areaStyle: {
        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //         offset: 0,
        //         color: 'rgb(255, 158, 68)'
        //     }, {
        //         offset: 1,
        //         color: 'rgb(255, 70, 131)'
        //     }])
        // },
      },
    ],
};



 
setInterval(function(){
	randomData.shift();
	randomData.push(random(20,25));
	date.shift();
	date.push("第" + (len++) + "天");
	option.xAxis.data = date;
	option.series[0].data = randomData;
	myChart.setOption(option);	
    // console.log(option);
}, 1000)

function random(min, max) {
  var num = Math.floor(Math.random() * (max - min)) + min;
  return num;
 
}