var latlong = {};
		latlong.AS = {'latitude':40, 'longitude':90};
		latlong.NA = {'latitude':47, 'longitude':-95};
		latlong.EU = {'latitude':50, 'longitude':20};
		latlong.AF = {'latitude':2.7, 'longitude':30};
		latlong.SA = {'latitude':-15, 'longitude':-56};
		latlong.OC = {'latitude':-24, 'longitude':134};
		
		

		var mapData = [
		{'code':'AS' ,'name':'Asia','value':50 },
		{'code':'NA' ,'name':'North America','value':110 },
		{'code':'EU' ,'name':'Europe','value':100 },
		{'code':'AF' , 'name':'Africa','value':110 },
		{'code':'SA' ,'name':'South America','value':90 },
		{'code':'OC' ,'name':'Oceania','value':2 },];

		var max = -Infinity;
		var min = Infinity;
		mapData.forEach(function (itemOpt) {
			if (itemOpt.value > max) {
				max = itemOpt.value;
			}
			if (itemOpt.value < min) {
				min = itemOpt.value;
			}
		});

		
		
var option = {
	backgroundColor: '#404a59',
	title : {
		text: '\nGlobeLand30各大洲建设用地面积变化率',
		left: 'center',
		top: 'top',
		textStyle: {
			color: '#fff'
		}
	},
	tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{c}%"
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'left',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
	visualMap: {
		show: false,
		min: 0,
		max: max,
		inRange: {
			symbolSize: [5, 30]
		}
	},
	geo: {
		name: '',
		type: 'map',
		map: 'world',
		roam: false,
		label: {
			emphasis: {
				show: false
			}
		},
		itemStyle: {
			normal: {
				areaColor: '#323c48',
				borderColor: '#111'
			},
			emphasis: {
				//areaColor: '#2a333d'
			}
		}
	},
	series : [
	    {
        type: 'pie',
        center: ['16%', '75%'],
        //selectedMode: 'single',
        radius: ['8%', '20%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67','#86d'],

        data:[
            {value:5.38, name:'北美洲'},
            {value:4.12, name:'南美洲'},
            {value:12.3, name:'非洲'},
            {value:1.8, name:'欧洲'},
            {value:5.06, name:'大洋洲'},
            {value:6.41, name:'亚洲'}
        ]
        },
		{
			type: 'pie',
			center:['29%','39%'],
			radius: ['0%', '0%'],
			//北美洲
			data: [{
					value: 5.38,
					name: '占有率',
					label: {
						normal: {
							formatter: '{d}%',
							position: 'center',
							textStyle: {
								fontSize: 28
							}
						}
					}
				}, {
					value: 100-5.38,
					//name: '占位',
					label: {
						normal: {
							//formatter: '',
							textStyle: {
								color: '#555',
								fontSize: 20
							}
						}
					},
					tooltip: {
						show: false
					},
					itemStyle: {
						normal: {
							color: '#aaa'
						},
						emphasis: {
							color: '#aaa'
						}
					},
					hoverAnimation: false
				}],
			label: {
				normal: {
					position: 'center'
				}
			},
			
		},
		{
			type: 'pie',
			center:['37%','63%'],
			radius: ['0%', '0%'],
			//南美洲
			data: [{
					value: 4.12,
					name: '占有率',
					label: {
						normal: {
							formatter: '{d}%',
							position: 'center',
							textStyle: {
								fontSize: 24
							}
						}
					}
				}, {
					value: 100-4.12,
					//name: '占位',
					label: {
						normal: {
							//formatter: '',
							textStyle: {
								color: '#555',
								fontSize: 20
							}
						}
					},
					tooltip: {
						show: false
					},
					itemStyle: {
						normal: {
							color: '#aaa'
						},
						emphasis: {
							color: '#aaa'
						}
					},
					hoverAnimation: false
				}],
			label: {
				normal: {
					position: 'center'
				}
			},
			
		},
		{
			type: 'pie',
			center:['55%','34%'],
			radius: ['0%', '0%'],
			//欧洲
			data: [{
					value: 1.8,
					name: '占有率',
					label: {
						normal: {
							formatter: '{d}%',
							position: 'center',
							textStyle: {
								fontSize: 18
							}
						}
					}
				}, {
					value: 100-1.8,
					//name: '占位',
					label: {
						normal: {
							//formatter: '',
							textStyle: {
								color: '#555',
								fontSize: 20
							}
						}
					},
					tooltip: {
						show: false
					},
					itemStyle: {
						normal: {
							color: '#aaa'
						},
						emphasis: {
							color: '#aaa'
						}
					},
					hoverAnimation: false
				}],
			label: {
				normal: {
					position: 'center'
				}
			},
			
		},
		{
			type: 'pie',
			center:['54%','53%'],
			radius: ['0%', '0%'],
			//非洲
			data: [{
					value: 12.3,
					name: '占有率',
					label: {
						normal: {
							formatter: '{d}%',
							position: 'center',
							textStyle: {
								fontSize: 37
							}
						}
					}
				}, {
					value: 100-12.3,
					//name: '占位',
					label: {
						normal: {
							//formatter: '',
							textStyle: {
								color: '#555',
								fontSize: 20
							}
						}
					},
					tooltip: {
						show: false
					},
					itemStyle: {
						normal: {
							color: '#aaa'
						},
						emphasis: {
							color: '#aaa'
						}
					},
					hoverAnimation: false
				}],
			label: {
				normal: {
					position: 'center'
				}
			},
			
		},
		
		
		{
			type: 'pie',
			center:['70%','40%'],
			radius: ['0%', '0%'],
			//亚洲
			data: [{
					value: 6.41,
					name: '占有率',
					label: {
						normal: {
							formatter: '{d}%',
							position: 'center',
							textStyle: {
								fontSize: 28
							}
						}
					}
				}, {
					value: 100-6.41,
					//name: '占位',
					label: {
						normal: {
							//formatter: '',
							textStyle: {
								color: '#555',
								fontSize: 20
							}
						}
					},
					tooltip: {
						show: false
					},
					itemStyle: {
						normal: {
							color: '#aaa'
						},
						emphasis: {
							color: '#aaa'
						}
					},
					hoverAnimation: false
				}],
			label: {
				normal: {
					position: 'center'
				}
			},
			
		},
		{
			type: 'pie',
			center:['80%','65%'],
			radius: ['0%', '0%'],
			//大洋洲
			data: [{
					value: 5.06,
					name: '占有率',
					label: {
						normal: {
							formatter: '{d}%',
							position: 'center',
							textStyle: {
								fontSize: 28
							}
						}
					}
				}, {
					value: 100-5.06,
					//name: '占位',
					label: {
						normal: {
							//formatter: '',
							textStyle: {
								color: '#555',
								fontSize: 14
							}
						}
					},
					tooltip: {
						show: false
					},
					itemStyle: {
						normal: {
							color: '#aaa'
						},
						emphasis: {
							color: '#aaa'
						}
					},
					hoverAnimation: false
				}],
			label: {
				normal: {
					position: 'center'
				}
			},
			
		},

	]
	 
	
};