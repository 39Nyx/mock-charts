var dataStyle = { 
    normal: {
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option = {
   backgroundColor: '#f4f2e3',
     color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemGap:12,
        data:['01','02','03','04','05','06']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'Line 1',
            type:'pie',
            clockWise:false,
            radius : [180,200],
            itemStyle : dataStyle,
            hoverAnimation: false,
            startAngle :0,
            data:[
                {
                    value:30,
                    name:'01',
                    itemStyle:{
                        normal:{
                            //旧方法,需要拿到额charts实例
                            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            //     offset: 0,
                            //     color: '#85b6b2'
                            // }, {
                            //     offset: 1,
                            //     color: '#6d4f8d'
                            // }])
                            // 直接声明,不受额charts实例的限制
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'red' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'blue' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    }
                },
                {
                    value:10,
                    name:'01',
                    itemStyle:placeHolderStyle
                },
            ]
        }

    ]
};