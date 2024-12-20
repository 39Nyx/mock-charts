option = {
    color:["#69d2e7","#4cafff","#ef553b"],
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
    title: {
        text: '年度每月设备数量一览',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        /*formatter: function (params) {
            if(params.length<2){
            return params[0].name + '<br/>'
                + params[0].seriesName + ' : ' + params[0].value + ' <br/>';
            }else{
                 return params[0].name + '<br/>'
                + params[0].seriesName + ' : ' + params[0].value + ' <br/>'
                + params[1].seriesName + ' : ' + params[1].value + ' <br/>';
            }
        },*/
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data:['在线','接入','离线'],
        bottom: '1',
        itemHeight:'10'
    },

    grid: [{
       top:'13%', 
       left:'4%',
        height: '35%',
        width:'92%'
    }, {
        
        left:'4%',
        top: '52%',
        height: '35%',
        width:'92%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            scale: true,
            nameTextStyle:{
            	fontSize:'10'
            },
            axisTick:{
		        	show:false
		        },
            axisLine: {show:false,onZero: true},
            axisLabel:{interval:'0'},
	        nameLocation:'start',
            data:  ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        },
        { 
        	show:false,
            gridIndex: 1,
            type : 'category',
            scale: true,
             axisTick:{
		        	show:false
		        },
		    axisLabel:{interval:'0'},
	        boundaryGap : true,
            axisLine: {onZero: true,
            	show:false
            },
            data:  ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
            position: 'top'
        }
    ],
    yAxis : [
        {
            show:false,
            name : '多头',
            type : 'value',
            
        },
        {
            show:false,
            gridIndex: 1,
            name : '空头',
            type : 'value',
             max:300,
            inverse: true
        }
    ],
    series : [
        {
            name:'在线',
            type:'bar',
            barWidth: '99.3%',
            symbolSize: 1,
            stack: '广告',
            hoverAnimation: false,
            data: [320, 302, 301, 334, 390, 330, 320,120, 132, 101, 134,210]
        },
        {
            name:'接入',
            type:'bar',
            stack: '广告',
            barWidth: '99.3%',
            symbolSize: 1,
            hoverAnimation: false,
           data: [220, 182, 191, 234, 290, 330, 310, 230, 210,145,250,170]
        },
        {
            name:'离线',
            type:'bar',
            barWidth: '99.3%',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data: [100,90,120,70,50,110,90,100,90,120,70,50]
        }
    ]
};