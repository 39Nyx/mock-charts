var option = {
    series: [{
        type: 'liquidFill',
        data: [{
				value: 0.6,
				direction: 'left',
				itemStyle: {
					normal: {
						color:{
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0, color: '#02D3F3' // 0% 处的颜色
							}, {
								offset: 1, color: '#0E1C4C' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					}
				}
			}],
        radius: '90%',
        outline: {
            show: false
        },
        backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        shape:'path://M147.325,468.868c0,21.218,17.201,38.419,38.418,38.419h25.612c21.22,0,38.42-17.201,38.42-38.419v-12.806H147.325V468.868z M343.633,264.773c-28.402,24.223-91.855,172.113-91.855,172.113h-37.43V250.508l69.746-69.742c5.738-5.742,5.738-15.043,0-20.785c-5.738-5.738-15.043-5.738-20.781,0l-63.688,63.691l-86.316-86.316c-5.782-5.781-15.149-5.781-20.926,0c-5.781,5.777-5.781,15.144,0,20.926l89.832,89.831c0.785,0.785,1.64,1.453,2.539,2.027v186.746h-37.426c0,0-63.418-147.688-92.441-172.609C7.562,223.637-22.406,163.414-22.406,96.2c0-122.387,99.375-221.606,221.957-221.606c122.586,0,221.957,99.219,221.957,221.606C421.512,163.688,391.293,224.129,343.633,264.773L343.633,264.773z',
        label: {
            normal: {
                textStyle: {
                    fontSize: 50
                },
                position: ['50%', '35%']
            }
             
        }
    }]

};