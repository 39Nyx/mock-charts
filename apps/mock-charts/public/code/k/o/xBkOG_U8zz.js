var categoryData = []; 
var month=23;
var linecolor ={show:true,lineStyle:{color:'#17334e'}};
for(var j = 1; j <= month; j++) {
       categoryData.push(j);
   };
var option = {
    tooltip:{
        trigger: 'axis',
		backgroundColor:'transparent',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params) {
          //  console.log(params.Array.value);
            var res = "";
            var value = params[0].value;
            var times = params[0].name
          //  var times = "2017-11-23 11:00:18";
            res = "<div style='border-top:5px solid #0066cc;background:#010204;padding:0 30px 10px 20px;font-weight:700;font-size:14;'><p>时间：" 
            		+ times+ "</p><p>数量：" 
            		+ value+ "</p></div>";
            return res;
        }
   },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        name: '',
        splitLine: linecolor,
        axisTick:{show:false},
        axisLine:linecolor,
        axisLabel:{color:'#fff'},
      //  boundaryGap:false,
        data: categoryData
    },
    yAxis: {
        type: 'value',
        name: '',
        axisTick:{show:false},
        axisLine:linecolor,
        splitLine: linecolor,
        axisLabel:{color:'#fff'},
        min:0,
        max:180,
        interval:20,
        
    },
    series: [
        {
            name: '3的指数',
            type: 'line',
            lineStyle:{normal:{color:'#3ea9f4',width:5}},
            smooth:true,
            symbol:'circle',
       //     symbol:"image://",
            symbolSize:10,
            showSymbol:false,
            data: [30, 90, 90, 90, 40, 40, 40, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
    ]
};
