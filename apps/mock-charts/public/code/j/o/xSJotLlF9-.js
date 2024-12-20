var colorArray = [{
        top: 'rgba(210, 101, 253, 0.8)',
        bottom: 'rgba(48, 42, 146, 0.8)'
    },
    {
        top: 'rgba(7, 249, 255, 0.8)',
        bottom: 'rgba(7, 64, 137, 0.8)'
    }];
option = {
    title: {
        text: '柱状图渐变色',
        subtext:'上帝也封神'
    },
    toolbox:{
        right:20,
        feature:{
            saveAsImage: {},
            restore: {},
            dataView: {},
            dataZoom: {},
            magicType: {
                type:['line','bar']
            }
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220],
            itemStyle: {
                normal: {
                    color: function (params) {
                        let num = colorArray.length;
                        return{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].bottom
                            }],
                            globalCoord: false
                        }
                    }
                }
            }
        }
    ]
};
