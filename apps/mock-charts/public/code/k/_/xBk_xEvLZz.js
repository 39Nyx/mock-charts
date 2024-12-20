option = {
					    backgroundColor: '#FFFFFF',
					    title: {
					        text: '信息征集统计',
					        left: 'center',
					        textStyle: {
					            color: '#2F2F2F'
					        }
					    },
					    legend: {
					        show: true,
					        orient: 'vertical',
					        top: 'bottom',
					        left: 'right',
					        data: ['地点', '线路'],
					        textStyle: {
					            color: '#fff'
					        }
					    },
					    geo: {
					        map: mapName,
					        label: {
					            emphasis: {
					                show: false
					            }
					        },
					        roam: true,
					        itemStyle: {
					            normal: {
					                areaColor: '#323c48',
					                borderColor: '#404a59'
					            },
					            emphasis: {
					                areaColor: '#2a333d'
					            }
					        }
					    },
					    series: [{
				            name: '地点',
				            type: 'effectScatter',
				            coordinateSystem: 'geo',
				            zlevel: 2,
				            rippleEffect: {
				                brushType: 'stroke',
				                period: 7,
				                scale: 26
				            },
				            label: {
				                emphasis: {
				                    show: true,
				                    position: 'right',
				                    formatter: '{b}'
				                }
				            },
				            symbolSize: 2,
				            showEffectOn: "render",
				            itemStyle: {
				                normal: {
				                    color: '#46bee9'
				                }
				            },
				            data:citys
				        }, {
				            name: '市政府',
				            type: 'effectScatter',
				            coordinateSystem: 'geo',
				            zlevel: 2,
				            rippleEffect: {
				                brushType: 'fill',
				                period: 7,
				                scale: 0
				            },
				            label: {
				                emphasis: {
				                    show: true,
				                    position: 'right',
				                    formatter: '{b}'
				                }
				            },
				            symbolSize: 25,
				            showEffectOn: "emphasis",
//				            showEffectOn: "render",
				            itemStyle: {
				                normal: {
				                    color: '#46bee9'
				                }
				            },
				            data:shizhengfuStr
				        }, {
				            name: '线路',
				            type: 'lines',
				            coordinateSystem: 'geo',
				            zlevel: 2,
				            large: true,
				            effect: {
				                show: true,
				                constantSpeed: 30,
				                symbol: 'arrow', //ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
				                symbolSize: 6,
				                trailLength: 0,
				            },
				            lineStyle: {
				                normal: {
				                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                        offset: 0,
				                        color: '#58B3CC'
				                    }, {
				                        offset: 1,
				                        color: '#F58158'
				                    }], false),
				                    width: 1,
				                    opacity: 0.6,
				                    curveness: 0.2
				                }
				            },
				            data:moveLines
				        }]
					};