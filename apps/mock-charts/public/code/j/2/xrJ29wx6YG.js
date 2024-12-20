//趋势分析//价格区间
option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor:'rgba(255,255,255,0.8)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle:{
            color:'#6a717b',
        },
    },
    toolbox:{
        right:20,
        feature:{
            magicType: {
                type:['bar']
            },
            restore: {},
            saveAsImage: {},
            // brush: {},
        }
    },
    grid: {
        top: '90',
        left: '3%',
        right: '4%',
        bottom: '50',
        containLabel: true
    },
    color: ['#229aff','#fdb94e','#30d6a9','#F87B5F','#89c9e1','#ffad8c','#07bcbe'],
    legend: {
        top: '30',
        data: ['0-100','100-300','300-600','600-900','900-1200','1200以上']
    },
dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
   xAxis: [
		{
		type: 'category',
		data: ['2017.01','2017.02','2017.03','2017.04','2017.05','2017.06','2017.07','2017.08','2017.09','2017.10','2017.11','2017.12','2018.01','2018.02'],
		boundaryGap: false,//坐标轴两边留白
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
    },
	],
    yAxis: [{
            name: '零售量（万件）',
			type: 'value',
			axisLabel: {
				textStyle: {
					color: '#666',
				    fontStyle: 'normal',
				}
			},
			axisLine:{
				show: false
			},
			axisTick:{
				show: false
			},
			splitLine: {
				show: true,
			}
    }],
    series: [{
        name: '0-100',
        type: 'line',
        //stack: '总量',
        symbolSize: 7,
        data: [1020, 1149, 1270, 1332, 1556, 1767, 1856, 1922, 2106, 2130, 2264, 2303, 1149, 1270,],
    }, {
        name: '100-300',
        type: 'line',
        //stack: '总量',
        symbolSize: 7,
        data: [1020, 1149, 1270, 1332, 1556, 1767, 1856, 1922, 2106, 2130, 2264, 2303,1149, 1270],
    }, {
        name: '300-600',
        type: 'line',
        //stack: '总量',
        symbolSize: 7,
        data: [1856, 1922, 2106, 2130, 2264, 2303, 1020, 1149, 1270, 1332, 1556, 1767, 1556, 1767],
    }, {
        name: '600-900',
        type: 'line',
        //stack: '总量',
        symbolSize: 7,
        data: [1556, 1767, 1856, 1922, 2106, 2130, 2264, 2303, 1020, 1149, 1270, 1332,2101,900 ],
    }, {
        name: '900-1200',
        type: 'line',
        //stack: '总量',
        symbolSize: 7,
        data: [1556, 1767, 1856, 1922, 2106, 2130, 2264, 1020, 1149, 1270, 1332, 2303, 2130, 2264],
    }, {
        name: '1200以上',
        type: 'line',
        //stack: '总量',
        symbolSize: 7,
        data: [1020, 1149, 1270, 1332, 2130, 2264, 2303, 1556, 1767, 1856, 1922, 2106,1149, 1270 ],
    },]
};
