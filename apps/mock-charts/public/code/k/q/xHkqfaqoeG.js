
var data = [{
	name: '课题组1',
	clas: 100,
	member: 10
}, {
	name: '课题组2',
	clas: 360.2,
	member: 40.9
}, {
	name: '课题组3\n测试',
	clas: 103.3,
	member: 30.0
}, {
	name: '课题组4',
	clas: 284.5,
	member: 500
}];

var nam = [];
var clas = [];
var member = [];

$.each(data, function (i, v) {
	nam.push(v.name);
	clas.push(v.clas);
	member.push(v.member);
});
var option = {
    backgroundColor: '#031f2d',
    grid: {
        top: '12%',
        bottom: '13%'
    },
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'line',
			crossStyle: {
				color: '#999'
			}
		}
	},
	xAxis: [{
		type: 'category',
		data: nam,
		axisPointer: {
			type: 'shadow'
		},
		axisLine: {
			lineStyle: {
				color: 'rgba(53,153,196,0.6)',
			}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			color: '#fbc52c',
			fontSize: 10
		}
	}],
	yAxis: [{
		type: 'value',
		name: '人',
		nameTextStyle: {
			color: '#3fdaff',
			fontSize: 10,
			padding: [0, 30, 0, 0]
		},
		axisLine: {
			lineStyle: {
				color: 'rgba(53,153,196,0.6)',
			}
		},
		axisLabel: {
			color: '#3fdaff',
			fontSize: 10
		},
		splitLine: {
			lineStyle: {
				type: 'dotted',
				color: 'rgba(63, 218, 255, 0.5)',
			}
		},

	}, {
		type: 'value',
		name: '小时',
		axisLine: {
			lineStyle: {
				color: 'rgba(53,153,196,0.6)',
			}
		},
		axisLabel: {
			color: '#fbc52c',
			fontSize: 10
		},
		nameTextStyle: {
			color: '#fbc52c',
			fontSize: 10,
			padding: [0, 0, 0, 30]
		},
		splitLine: {
			show: false
		}
	}],
	series: [{
		type: 'bar',
		barGap: 0,
		itemStyle: {
			normal: {
				color: '#3fdaff'
			}
		},
		data: member
	}, {
		type: 'bar',
		yAxisIndex: 1,
		barGap: 0,
		itemStyle: {
			normal: {
				color: '#fbc52c'
			}
		},
		data: clas
	}]
};
