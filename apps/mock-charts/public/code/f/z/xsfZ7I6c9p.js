
option = {
  title: {
    text: '总出勤状况：',
    textStyle: {
      color: '#9d9d9d',
     fontSize: 16,
      // fontFamily: '微軟正黑體',
    fontWeight: 'bolder',
    },
    left:'31%',
   top:'3%',
  },
  series: [
    {
   	name: '出勤率',
      type: 'gauge',
      					radius: '40%',
        center: ["50%", "30%"],
         itemStyle:{//渐变颜色
                        color:new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0.1,
                            color: "#f58794"
                          },
                           {
                            offset: 0.3,
                            color: "#eb727f"
                          },
                          {
                            offset: 0.6,
                            color: "#b73f4c"
                          },
                          {
                            offset: 1,
                            color: "#b11324"
                          }])
                    },
      progress: {
        show: true,
        width: 45,
      },
       axisLine: {//仪表盘轴线相关配置，即里面的灰色环形
                        lineStyle: {
                          color: [[0.2, '#fff'], [0.8, '#fff'], [1, '#f994a0']],
                            width: 45,
                        }
                    },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
      anchor: {
        show: false,
      },
      // 出勤率格式
      title: {
        show: true,
        color: '#9d9d9d',
        fontSize: 16,
      },
       // 出勤率百分比
      detail: {
        valueAnimation: true,
        offsetCenter: [0, 0],
        textStyle: {
          fontSize: 24,
          color: '#191919',
        },
        formatter: '{value}%',
      },
      data: [
        {
          value: 95.2,
          name: '出勤率',
        },
      ],
    },
     {
   				name: '总人力',
      type: 'gauge',
      				radius: '40%',
        center: ["50%", "30%"],
      progress: {
        show: false,
      },
       axisLine: {
         show: false,
                    },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      pointer: {
        show: false,
      },
      anchor: {
        show: false,
      },
      // 总人力格式
      title: {
        show: true,
        color: '#9d9d9d',
        fontSize: 16,
           offsetCenter: ['2%','100%'],
      },
         // 总人力人数格式
      detail: {
        valueAnimation: true,
        offsetCenter: ['2%','80%'],
        textStyle: {
          fontSize: 24,
          color: '#191919',
        },
        formatter: '{value}人',
      },
      data: [
        {
          value: 2385,
          name: '总人力',
        },
      ],
    },
    {
					name: '最内层线',
					type: 'gauge',
					radius: '32%',
					center: ['50%', '30%'],
					axisLine: {
						show: false,
						lineStyle: {
							opacity: 0,
						}
					},
					splitLine: {
						show: false,
						lineStyle: {
							opacity: 0
						}
					},
					axisLabel: {
						show: false
					},
					axisTick: {
						length: 2,
						lineStyle: {
							color: '#ed8b97',
							width: 5,
							type: 'solid'
						}
					},
					detail: {
						show: false,
					},
					pointer: {
						show: false
					}
				},
  ],
};
