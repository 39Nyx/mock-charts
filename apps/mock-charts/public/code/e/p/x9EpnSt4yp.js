

var xData = function() {
    var data = [];
    for (var i = 15; i < 28; i++) {
         data.push("09-"+i);
       
    }
    return data;
}();
option = {
     backgroundColor:'#020306',
    title : {
        text: '受理案件变化趋势',
        
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        left: '25%',
        top:'15%',
        textStyle:{
            color:'#FFFFFF'
        },
        data:['新增','办结']
    },
     grid: {
        left: '3%',
        right: '40%',
        top:'25%',
        bottom: '35%',
        containLabel: true
    },
    color:['rgba(245, 166, 35, 1)','rgba(19, 173, 255, 1)'],
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
         axisLabel: {
            formatter: '{value}',
            //  rotate:25,
            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        },
            data : xData
        }
    ],
    yAxis : {
            
            type : 'value',
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
        }
    ,
    series : [
        {
            name:'新增',
            type:'line',
            areaStyle: {
                
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(245, 166, 35, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(245, 166, 35, 1)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[710, 312, 321,754, 500, 830, 710, 521, 504, 660, 530, 410]
        },
        {
            name:'办结',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(19, 173, 255, 1)'
                    }, {
                        offset: 1,
                        color:'rgba(19, 173, 255, 1)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[410, 312, 221,654,410, 630, 310, 521, 354, 560, 330, 310]
        },
    ]
};