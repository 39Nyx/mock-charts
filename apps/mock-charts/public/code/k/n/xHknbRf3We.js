
var count = 360;
var data = [];
for (var i = 0; i < count; i++) {
	data.push({
      value: [1, i]
    });  
}


option = {
    color: ['red'],
  	legend: {
      data: ['a']
    },
    visualMap: [{
		show: false,
      	dimension: 1,
        min: 0,
        max: count,
      	inRange: {
          colorHue: [0, 360]
        }
    }],
    series: [{
        type: 'pie',
      	silent: true,
      	labelLine: {normal: {show: false}},
        data: data
    }]
}