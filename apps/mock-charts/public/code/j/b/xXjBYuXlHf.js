option = {
    title: {
        text: '堆叠区域图'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            type:'line',
            stack: '总量',
            smooth: true,
            symbol:'none',
            areaStyle: {
                normal: {
                    color:'rgb(0,0,0,0)'
                }
            },
            itemStyle : {
				normal : {
					lineStyle:{
						color:'rgba(0,0,0,0)'
					}
				}
            },
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            type:'line',
            smooth: true,
            symbol:'none',
            stack: '总量',
            itemStyle : {
				normal : {
					lineStyle:{
						color:'rgba(0,0,0,0)'
					}
				}
            },
            areaStyle: {
                normal: {
                    color:'#6cf'
                }
            },
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'scatter',
            type: 'scatter',
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: 'red',
                        fontSize: 16
                    }
                }
            },
            itemStyle : {
				normal : {
					color:'red'
				}
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'scatter',
            type: 'scatter',
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: 'blue',
                        fontSize: 16
                    }
                }
            },
            itemStyle : {
				normal : {
					color:'rgb(137,191,4)'
				}
            },
            data: [160, 400, 200, 100, 300, 600, 500]
        }
    ]
};
