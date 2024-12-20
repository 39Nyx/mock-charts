var case1 =[[0.39,4975,471,0.173,0.3,17.6],
[0.67,3029,293,0.058,3.7,0.5],
[0.65,3155,300,0.093,4.2,0.7],
[0.65,3162,301,0.094,4.1,0.8],
[0.69,2938,290,0.086,4.2,0.7],
[0.65,3166,301,0.094,4.1,0.8],
[0.66,3130,300,0.093,4.2,0.7],
[0.68,3015,293,0.058,3.7,0.5]];
var case2 = [[0.40,4979,471,0.171,0.3,17.5],
[0.65,3072,293,0.062,3.9,0.5],
[0.63,3192,300,0.101,4.4,0.8],
[0.62,3204,301,0.103,4.4,0.8],
[0.66,2979,290,0.095,4.4,0.7],
[0.62,3199,301,0.102,4.4,0.8],
[0.63,3169,300,0.101,4.4,0.8],
[0.65,3047,293,0.062,3.9,0.5]];
var case3 = [[0.41,7838,712,0.366,0.4,32.5],
[0.73,4555,441,0.115,3.5,1.1],
[0.69,4807,456,0.183,4.2,1.5],
[0.68,4870,461,0.194,4.1,1.6],
[0.69,4258,427,0.254,4.2,2.0],
[0.68,4876,461,0.194,4.1,1.6],
[0.70,4769,456,0.183,4.2,1.5],
[0.73,4527,441,0.115,3.5,1.1]];

var cases = [case1,case2,case3];


var parameterName=['最小油膜厚度 μm','最大油膜压力 bar','单位载荷 bar','摩擦功耗 kW','油流速率 l/min','温升 ℃'];
var bearingName=['连杆瓦', ' 主轴瓦一', '主轴瓦二', '主轴瓦三', '主轴瓦四', '主轴瓦五', '主轴瓦六', '主轴瓦七'];
var caseName=['工况一','工况二','工况三']
var parameter1 = [];
var parameter2 = [];
var parameter3 = [];
var parameter4 = [];
var parameter5 = [];
var parameter6 = [];
for(var i=0;i<8;i++){
	parameter1.push([case1[i][0],case2[i][0],case3[i][0]]);
	parameter2.push([case1[i][1],case2[i][1],case3[i][1]]);
	parameter3.push([case1[i][2],case2[i][2],case3[i][2]]);
	parameter4.push([case1[i][3],case2[i][3],case3[i][3]]);
	parameter5.push([case1[i][4],case2[i][4],case3[i][4]]);
	parameter6.push([case1[i][5],case2[i][5],case3[i][5]]);
}

option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: parameterName,
            label: {
            }
        },
        title: {
            subtext: '柴油机轴瓦流体动力学计算结果'
        },
        tooltip: {
			axisPointer:{
				type:'cross'
			}
		},
        legend: {
            orient: 'vertical',
            right: 5,
            data: bearingName,
            //selected: {
            //    '连杆瓦', ' 主轴瓦一', '主轴瓦二', '主轴瓦三', '主轴瓦四', '主轴瓦五', '主轴瓦六', '主轴瓦七'
            //}
        },
        calculable : true,
        grid: {
            top: 80,
            bottom: 100
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':0},
                'data':caseName,
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '--',
                // max: 53500
                //max: 30000
            }
        ],
        series: [
            {name: '连杆瓦', type: 'bar'},
            {name: '主轴瓦一', type: 'bar'},
            {name: '主轴瓦二', type: 'bar'},
            {name: '主轴瓦三', type: 'bar'},
            {name: '主轴瓦四', type: 'bar'},
            {name: '主轴瓦五', type: 'bar'},
            {name: '主轴瓦六', type: 'bar'},
            {name: '主轴瓦七', type: 'bar'},
            
        ]
    },
    options: [
        {
            title: {text: '各工况重要参数: 最小油膜厚度 μm'},
            series: [
                {data: parameter1[0]},
                {data: parameter1[1]},
                {data: parameter1[2]},
                {data: parameter1[3]},
                {data: parameter1[4]},
                {data: parameter1[5]},
                {data: parameter1[6]},
                {data: parameter1[7]}

            ]
        },
        {
            title : {text: '各工况重要参数: 最大油膜压力 bar'},
            series : [
                {data: parameter2[0]},
                {data: parameter2[1]},
                {data: parameter2[2]},
                {data: parameter2[3]},
                {data: parameter2[4]},
                {data: parameter2[5]},
                {data: parameter2[6]},
                {data: parameter2[7]}
            ]
        },
        {
            title : {text: '各工况重要参数: 单位载荷 bar'},
            series : [
                {data: parameter3[0]},
                {data: parameter3[1]},
                {data: parameter3[2]},
                {data: parameter3[3]},
                {data: parameter3[4]},
                {data: parameter3[5]},
                {data: parameter3[6]},
                {data: parameter3[7]}              
            ]
        },
        {
            title : {text: '各工况重要参数: 摩擦功耗 kW'},
            series : [
                {data: parameter4[0]},
                {data: parameter4[1]},
                {data: parameter4[2]},
                {data: parameter4[3]},
                {data: parameter4[4]},
                {data: parameter4[5]},
                {data: parameter4[6]},
                {data: parameter4[7]}             
            ]
        },
        {
            title : {text: '各工况重要参数: 油流速率 l/min'},
            series : [
                {data: parameter5[0]},
                {data: parameter5[1]},
                {data: parameter5[2]},
                {data: parameter5[3]},
                {data: parameter5[4]},
                {data: parameter5[5]},
                {data: parameter5[6]},
                {data: parameter5[7]}              
            ]
        },
        {
            title : {text: '各工况重要参数: 温升 ℃'},
            series : [
                {data: parameter6[0]},
                {data: parameter6[1]},
                {data: parameter6[2]},
                {data: parameter6[3]},
                {data: parameter6[4]},
                {data: parameter6[5]},
                {data: parameter6[6]},
                {data: parameter6[7]}              
            ]
        },
        
    ]
}