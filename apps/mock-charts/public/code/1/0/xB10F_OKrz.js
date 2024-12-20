var dataLimits = 
    [        
        //[0, 0],
        //[2, 9800],        
    ];

// limits define start
var limitM1 = {
    lineStyle: {type: 'solid'},
    data: [{xAxis: 0.7,label: {formatter: 'M1/M5'}},{yAxis:6000}]
};
var limitM2 = {
    lineStyle: {type: 'solid'},
    data: [{xAxis: 0.5},{yAxis:7000}]
};
var limitM4 = {
    lineStyle: {type: 'solid'},
    data: [{xAxis: 1},{yAxis:3500}]
};
var limitM5 = {
    lineStyle: {type: 'solid'},
    data: [{xAxis: 0.7,label: {formatter: 'M1/M5'}},{yAxis:6000}]
};
var limitM3 = {
    lineStyle: {type: 'solid'},
    data: [{xAxis: 0.4, label: {formatter: 'M5          '}},{yAxis:8000}]
}; 
//---< limits define end

option = {
	color: ['#c12e34','#cb6234','#0098d9','#2b821d', '#005eaa','#339ca8', '#cda819','#32a487','#333333'],
    title : {
        text: 'Design Guidelines',
        subtext: 'Load case v.s. Material type'
    },
    grid: {
        left: '2%',
        top: '16%',
		width: '80%',
        
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                   + params.value[0] + 'rpm '
                   + params.value[1] + 'kN ';
            }
            else {
                return params.seriesName //+ ' :<br/>'
                  // + params.name + ' : '
                  // + params.value + 'bar ';
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'solid',
                width : 1
            },
			label:{
				fontSize: 12,
				formatter: function(params) {
					return params.value.toFixed(2);
				}
			}
        }
    },
    legend: {
        data: [
		{name: 'M1',icon: 'rect'},
		{name: 'M2',icon: 'rect'},
		{name: 'M3',icon: 'rect'},
		{name: 'M4',icon: 'rect'},
		{name: 'M5',icon: 'rect'},
		{name: '1000@230'},
		{name: '1300@230'},
		{name: '1000@210'},
		{name: '1300@210'},
		{name: '1800@230'},
		{name: '1800@210'},
		{name: '2600@50'},
			
		],		
		//{name: ['1000@230', '1300@230','1000@210','1300@210', '1800@230','1800@210','2600@50']},
        align: 'right',
		orient: 'vertical',
		right: 0,
		top: '16%',
		textStyle:{
			fontSize: 13,
			},
    },
    label: {
            show: true,
			fontSize: 14,
            position: 'right',
			normal:{formatter: function(params) {
                return params.seriesName;
            } }
    },
	toolbox:{
		right:20,
		top: 30,
		feature:{
			saveAsImage: {},
			restore: {},
			dataView: {},
			dataZoom: {},
		}
	},
	
    xAxis : [
        {
            name: 'speed (rpm)',
			nameLocation: 'middle',
			nameGap: 30,
			nameTextStyle:{
				fontSize: 16
			},
            type : 'value',
            scale:true,
			max: 2,
			min: 0,
            axisLabel : {
				fontSize: 18,
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }
    ],
    yAxis : [
        {
            name: 'Load (kN)',
			nameLocation: 'middle',
			nameGap: 60,
			nameTextStyle:{
				fontSize: 16
			},
			type : 'value',
            scale:true,
			max: 10000,
			min: 0,
            axisLabel : {
				fontSize: 18,                
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }
    ],
    series: [
		//limits
        {name: 'M1', type: 'scatter', data: dataLimits, markLine: limitM1},		
		{name: 'M2', type: 'scatter', data: dataLimits, markLine: limitM2},
        {name: 'M4', type: 'scatter', data: dataLimits, markLine: limitM4},
		{name: 'M5', type: 'scatter', data: dataLimits, markLine: limitM5},
		{name: 'M3', type: 'scatter', data: dataLimits, markLine: limitM3},
		//dots
		{name: '1000@230', type: 'scatter', data: [[0.39,9554]]},
		{name: '1300@230', type: 'scatter', data: [[0.49,8753]]},
		{name: '1000@210', type: 'scatter', data: [[0.43,8467]]},
		{name: '1300@210', type: 'scatter', data: [[0.54,7791]]},
		{name: '1800@230', type: 'scatter', data: [[0.71,7214]]},
		{name: '1800@210', type: 'scatter', data: [[0.78,6347]]},
		{name: '2600@50', type: 'scatter', data: [[0.92,1043]]},
		
       
    ],
	
};