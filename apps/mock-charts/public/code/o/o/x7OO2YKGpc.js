

var option = {
	geo3D: {
		map: "world",
		shading: "color",
		silent: true,
		environment: '#E6ECF0',
		groundPlane: {
			false: true,
			color: "#000000"
		},
		light: {
			main: {
				intensity: 1,
				alpha: 0
			},
			ambient: {
				intensity: 0
			}
		},
		viewControl: {
			distance: 60,
			alpha: 90,
			panMouseButton: "left",
			rotateMouseButton: "right"
		},
		itemStyle: {
			areaColor: "#EED5CE",
			borderWidth: 0.5
		},
        regionHeight: 0,
        boxHeight: 0,		
	},
	visualMap: {
        type: 'continuous',
        calculable: true,
        orient: 'vertical',
        show: true,
        min: 0,
        max: 11,
         inRange: {
           color: ['#CBE3EE', '#96C4D8','#548BA1','#286B7B','#214753']
         }
    },
	series: [{
		type: "bar3D",
		coordinateSystem: "geo3D",
        barSize: 0.4,
		itemStyle: {
			opacity: 1,
		},
		emphasis:{
		    label:{
		        show: true,
		        formatter: '{c}'
		    }
		},
		data: data}]
}
console.log(JSON.stringify(option))