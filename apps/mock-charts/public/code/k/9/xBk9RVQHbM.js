option = {

    title: {},
    tooltip: {
        trigger: 'axis'
    },

    grid: {
        show: false,
        
    },
    legend:{
        show:true,
        data:[{
            name:'内河沿线警戒水位',
            icon:'pin'
        },{
            name:'金山嘴预警水位',
            icon:'pin'
        },{
            name:'实时数值'
        },],
        textStyle: {
                margin: 20,
                fontSize: 27,
                color: '#fff'
            }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: [
            '掘石港朱泾潮位站',
            '金山嘴海洋站',
        ],
        axisLine: {
            lineStyle: {
                color: '#5d94ca'
            }
        },
        axisLabel: {
            textStyle: {
                margin: 20,
                fontSize: 27,
                color: '#fff'
            }

        }

    }],
    yAxis: {
        type: 'value',
        name: '（水位/米）',
        nameLocation: 'start',
        nameTextStyle: {

            margin: 20,
            fontSize: 27,
            color: '#fff'


        },
        axisTick: {
            show: false
        },
        min: 0,
        max: 4,
        splitNumber: 4,
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#2a303e', '#262e3b']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#5d94ca'
            }
        },
        axisLabel: {
            textStyle: {
                margin: 20,
                fontSize: 27,
                color: '#fff'
            }

        }
    },
    series: [{
        name: '实时数值',
        type: 'bar',
        data: [1.5, 2.3],
        itemStyle: {
            normal: {
                color: '#5d94ca'
            }
        },
        // barWidth:130,
        
    },{
        name:'内河沿线警戒水位',
        type:'line',
        markLine:{
            data:[{
                yAxis:2.5,
                symbolSize:1,
                lineStyle:{
                    normal:{
                        color:'#eddb93',
                        width:2
                    }
                }
            }]
        }
    },{
        name:'金山嘴预警水位',
        type:'line',
        markLine:{
            data:[{
                
                yAxis:3.5,
                symbolSize:1,
                lineStyle:{
                    normal:{
                        color:'#ee756d',
                        width:2
                    }
                }
            }]
        }
    }]
};