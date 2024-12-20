var data=[17, 20, 45, 56, 60, 64, 70, 89];
var name1 = ['其他','qa','ws','ed','rf','tg','a','b'];
var data_name = [];

data.forEach(function(el,i) {
    data_name.push({
        value: el,
        name: name1[i]
    })
})

var xMax=Math.max(...data);
option = {
	tooltip: {
        trigger: 'axis',
        formatter:"{b} {c}"
    },
	
	grid:{
		left:'15%',
		top:'5%',
		bottom:'0',
		right:'0'
	},
    xAxis : [
        {
            max: xMax,
            type : 'value',
            axisTick: {
                show: false,
	        },
	        axisLine: {
	            show:false,
	        },
	        axisLabel: {
	            show:false
	        },
	        splitLine: {
	            show: false
	        }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : name1,
            nameTextStyle:{
            	color:'#b7ce9e',
            	fontSize:'18px'
           	},
            axisTick: {
	            show: false,
	        },
	        axisLine: {
	            show: true,
	            lineStyle: {
	                color: '#333',
	                opacity: 0.5
	            }
	        }
        }
    ],
    series : [
        { 
            type: 'bar',
            barWidth:16,
            data: data_name,
            markLine : {
                label:{
	            		normal:{
	            			show:true,
	            			position:'end',
	            			formatter:'{c} M'
	            		}
	            	},
            	lineStyle:{
            		normal:{
            			color:'#525d63'
            		}
            	},
            	symbol:'none',
                data : [
                   {name:'最高',xAxis:30}
                ]
            }
        }
    ],
    visualMap: {
        type: 'continuous',
        max: xMax,
        min: 1,
        show: true,
        dimension: 0,
        inRange: {
            color: ['#e5f4ff', '#0099FF'],
        }
    },
};


myChart.on('click', function (params) {
    var index = params.dataIndex;
    console.log(index)
});