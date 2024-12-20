option = {
 
    tooltip: {
        trigger: 'item',
        formatter: "{c}",
        position:['50%','50%'],
        backgroundColor:'transparent',
        textStyle:{
            color:'#fdc203',
            fontSize:20,
            width:200,
            height:100,
            lineHeight:100,
            textAlign:'center',
            rich:{}
        }
    },
    calculable: true,
    polar: {
        center: ['50%', '50%'],
        radius: '80%'
    },
    radiusAxis: {
        // 极坐标半径刻度
        min: 0,
        max: 100,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false
        },
        splitLine:{
            lineStyle:{
                type: 'dashed',
                color:'#01eced'
            }
        }
    },
    angleAxis: {
        type: 'category',
        clockwise: false,
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                width: 1,
                type: 'dashed',
                color:'#01eced'
            },
        },
        axisLine: {
            lineStyle:{
                color:'#01eced'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel:{
            show:false
        },
        data:['',2,3,4,5,6,7,8]

    },
    series: [{
        name: '超期收益金额',
        type: 'pie',
        clockwise: false,
        radius: ['15.6%', '80%'],
        center: ['50%', '50%'],
        roseType: 'area',
        hoverOffset:0,
        label: {
            show:true,
            rotate:90,
            fontSize:18,
            color:'#9beeed',
            offset:18,
            textPosition:[10,10]
        },
        labelLine:{
            show:false,
            length:0,
            length2:00
        },
        itemStyle:{
            color:'#05bbc9',
            borderWidth:4,
            borderColor:'rgba(0,0,0,.8)',
            emphasis:{
                color:'#fdc203'
            }
        },
        data: [{
            value: 100,
            name: 'rose1'
        }, {
            value: 5,
            name: 'rose2'
        }, {
            value: 15,
            name: 'rose3'
        }, {
            value: 25,
            name: 'rose4'
        }, {
            value: 20,
            name: 'rose5'
        }, {
            value: 35,
            name: 'rose6'
        }, {
            value: 0,
            name: 'rose7'
        }, {
            value: 50,
            name: 'rose8'
        }]
    }]
};