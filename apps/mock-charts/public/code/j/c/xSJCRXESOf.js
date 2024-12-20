option = {
    title : {
        text: '每年注销许可证趋势',
    },
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '3%',
        top:'11%',
        bottom: '30%',
        containLabel: true
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
            type : 'value'
        }
    ,
    series : [
        {
            name:'注销数',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[610, 312, 221,654, 910, 630, 310, 521, 354, 560, 830, 310]
        }
    ]
};