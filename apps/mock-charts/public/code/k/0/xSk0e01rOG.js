option = {
    title : {
        text: '食品经营情况',
        subtext: '每年注销许可证趋势'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['注销']
    },
     grid: {
        left: '3%',
        right: '25%',
        top:'11%',
        bottom: '30%',
        containLabel: true
    },
    color:['#00cc99'],
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
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
        }
    ],
    yAxis : {
            name:'注销事项数',
            type : 'value'
        }
    ,
    series : [
        {
            name:'注销',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[610, 312, 221,654, 910, 630, 310, 521, 354, 560, 830, 310]
        }
    ]
};