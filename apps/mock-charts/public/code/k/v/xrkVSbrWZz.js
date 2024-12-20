var manValue = 60, womanValue = 40, total = manValue + womanValue;
option = {
    baseOption: {
        timeline: {
            show: false,
            type: 'slider',
            axisType: 'category',
            bottom: '10',
            currentIndex: 0,//0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
            autoPlay: true,//是否自动播放
            loop: true,
            realtime: true,//拖动圆点的时候，是否实时更新视图。
            controlPosition: 'left',
            label: {
                normal: {
                    color: '#2998ff',
                },
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#2998ff',
                    borderWidth: 2,
                }
            },
            checkpointStyle: {//『当前项』（checkpoint）的图形样式
                color: 'rgb(215, 0, 0)',
            },
            lineStyle: {
                show: true,//false 不显示轴线
                color: '#2998ff',
            },
            controlStyle: {//控制按钮的样式
                show: false,
                showPrevBtn: false,
                showNextBtn: false,
                itemGap: 50,
                itemSize: 36,
                normal: {
                    color: 'rgb(215, 0, 0)',
                    borderColor:'rgb(215, 0, 0)',
                },
                emphasis: {
                    color: 'rgb(215, 0, 0)',
                    borderColor:'rgb(215, 0, 0)',
                },
            },
            data: ['男','女'],
        },
        title: {
        text: '',
        x: '50%',
        y: '45%',
        textAlign: "center",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24
        },
        subtextStyle: {
            fontWeight: 'bold',
            fontSize: 32,
            color: '#3ea1ff'
        }
    },
		tooltip: { //提示框组件
			trigger: 'axis',
			formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
			axisPointer: {
				type: 'shadow',
				label: {
					backgroundColor: '#6a7985'
				}
			},
			textStyle: {
				color: '#fff',
				fontStyle: 'normal',
				fontFamily: '微软雅黑',
				fontSize: 12,
			}
		},
        grid: {
            left: 10,
            right: 35,
            bottom: 70,
            top:60,
            containLabel: true,
        },
		legend: {//图例组件，颜色和名字
			left: 0,
			top:0,
			itemGap: 16,
			itemWidth: 20,
			itemHeight: 14,
			data:[{
				name:'2017-08-05 至 2017-08-05',
				icon:'rect', 
			},
			{
				name:'2017-08-06 至 2017-08-06',
				icon:'rect', 
			}],
			textStyle: {
				color: '#a8aab0',
				fontStyle: 'normal',
				fontFamily: '微软雅黑',
				fontSize: 12,            
			}
		},
        series: [{
            name: '比例圆',
            type: 'pie',
            radius: ['50%', '70%'],
            startAngle: 225,
            color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00a2ff'
            }, {
                offset: 1,
                color: '#70ffac'
            }]), "transparent"],
            hoverAnimation: false,
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    borderColor: "transparent",
                    borderWidth: "20"
                },
                emphasis: {
                    borderColor: "transparent",
                    borderWidth: "20"
                }
            },
            z: 10,
            labelLine: {
                normal: {
                    show: false
                }
            }
        }, {
            name: '底层圆',
            type: 'pie',
            radius: ['50%', '70%'],
            startAngle: 225,
            color: ["#c2f5e1", "transparent"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{value: 75}, {value: 25}]
        }
        ]
    },
    options: [
        {
            title:{
                text:'男',
                subtext : manValue + '%',
            },
            
            series: [
                {data: [{value: manValue * 0.75}, {value: total - manValue*0.75}]},
                
            ]
        },
        {
            title:{
                text:'女',
                subtext : womanValue + '%',
            },
            series: [
                {data: [{value: womanValue * 0.75}, {value: total - womanValue*0.75}]},
                
            ]
        }
    ]
};