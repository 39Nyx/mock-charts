option = {
    title:{
        text:'近24时气象趋势表',
        textStyle:{
            color:'#0D4286'
        }
    },
    color:['#008080','#D48265','#497d84','#C23531','#2F4554'],
    toolbox:{
        show:true,
        right:10,
        feature:{
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            saveAsImage:{
                show:true
            },
            restore:{
                show:true
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
             label: {
                backgroundColor: '#0D4286'
            }
        }
    },
    legend: {
        top:23,
        left: 80,
        data: ['温度 ℃','降水量 mm','风力风向 m/s','湿度 %','气压 hPa'],
        textStyle: {
            color: "#0D4286",
            fontsize: 4
        }
    },
    dataZoom: [{
        show: true,
        realtime: true,
        start: 50,
        end: 100,
        // backgroundColor:'#d'
        textStyle: {
            color: "#ffffff"
        },
    }, {
        type: 'inside',
        realtime: true
    }],
    grid: {
        top: '12%',
        left: '3%',
        right: '3%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    yAxis: [{
        boundaryGap: [0, '50%'],
        type: 'value',
        name: '温度',
        position: 'left',
        offset: 105,
        max:50,
        splitNumber: 5,
        axisLabel: {
            formatter: '{value} ℃'
        },
        splitLine:{
            show:false
        }
    }, {
        boundaryGap: [0, '50%'],
        type: 'value',
        name: '降水量',
        position: 'left',
        offset: 52,
        axisLabel: {
            formatter: '{value} mm'
        },
        splitLine:{
            show:false
        }
    }, 
    {
        boundaryGap: [0, '50%'],
        type: 'value',
        name:'风力风向',
        position:'left',
        symbol:'arrow',
        symbolRotate:45,
        max:5,
        axisLabel: {
            formatter: '{value} m/s'
        },
        splitLine:{
            show:false
        }
    },{
        boundaryGap: [0, '50%'],
        type: 'value',
        name: '气压',
        position: 'right',
        offset: 45,
        axisTick: {
            inside: 'false',
            length: 5
        },
        axisLabel: {
            formatter: '{value} hPa'
        },
        splitLine:{
            show:false
        }
    },{
        boundaryGap: [0, '50%'],
        type: 'value',
        name: '湿度',
        position: 'right',
        axisTick: {
            inside: 'false',
            length: 5
        },
        axisLabel: {
            formatter: '{value} %'
        },
        splitLine:{
            show:false
        }
    }],
    series: [{
        name: '温度 ℃',
        type: 'line',
        smooth:true,
        data: [24.7, 24.4, 23.2, 20.7, 18.6, 17.1, 15.2, 14.1, 13, 12.2, 11.5, 11.1, 10.7, 10.7, 11.1, 10.8, 11.2, 12.2, 15.7, 18.4, 21, 22.8, 24, 24.5],
        yAxisIndex:0
    }, {
        name: '降水量 mm',
        type: 'line',
        smooth:true,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        yAxisIndex:1
    },
    {
        name: '风力风向 m/s',
        type: 'line',
        smooth:true,
        data: [{"symbol":"image://..//..//images//W.png","value":3.3,"symbolSize":15},{"symbol":"image://..//..//images//S.png","value":3,"symbolSize":15},{"symbol":"image://..//..//images//S.png","value":1.6,"symbolSize":15},{"symbol":"image://..//..//images//ES.png","value":0.7,"symbolSize":15},{"symbol":"image://..//..//images//N.png","value":1.6,"symbolSize":15},{"symbol":"image://..//..//images//WN.png","value":1.2,"symbolSize":15},{"symbol":"image://..//..//images//N.png","value":1.2,"symbolSize":15},{"symbol":"image://..//..//images//ES.png","value":0.7,"symbolSize":15},{"symbol":"image://..//..//images//EN.png","value":0.5,"symbolSize":15},{"symbol":"image://..//..//images//EN.png","value":1,"symbolSize":15},{"symbol":"image://..//..//images//E.png","value":0.8,"symbolSize":15},{"symbol":"image://..//..//images//E.png","value":1.1,"symbolSize":15},{"symbol":"image://..//..//images//E.png","value":1.3,"symbolSize":15},{"symbol":"image://..//..//images//N.png","value":0.1,"symbolSize":15},{"symbol":"image://..//..//images//WN.png","value":0.7,"symbolSize":15},{"symbol":"image://..//..//images//ES.png","value":1.1,"symbolSize":15},{"symbol":"image://..//..//images//E.png","value":0.7,"symbolSize":15},{"symbol":"image://..//..//images//EN.png","value":1.2,"symbolSize":15},{"symbol":"image://..//..//images//S.png","value":0.8,"symbolSize":15},{"symbol":"image://..//..//images//S.png","value":1,"symbolSize":15},{"symbol":"image://..//..//images//W.png","value":1,"symbolSize":15},{"symbol":"image://..//..//images//WS.png","value":1.1,"symbolSize":15},{"symbol":"image://..//..//images//ES.png","value":3.8,"symbolSize":15},{"symbol":"image://..//..//images//S.png","value":2.9,"symbolSize":15}],
        yAxisIndex:2
    },{
        name: '湿度 %',
        type: 'line',
        smooth:true,
        data: [41, 42, 48, 59, 70, 73, 83, 90, 93, 97, 98, 99, 99, 99, 99, 97, 99, 95, 76, 65, 59, 49, 46, 44],
        yAxisIndex:4
    },{
        name: '气压 hPa',
        type: 'line',
        smooth:true,
        data: [837.6, 837.5, 837.7, 838.5, 839.2, 840, 840.7, 841.2, 841.5, 841.6, 841.5, 841.7, 841.6, 841.6, 841.8, 842.3, 843.1, 843.6, 843.8, 843.8, 843.1, 842, 841, 839.9],
        yAxisIndex:3
    }]
};