option = {
    tooltip : {
        trigger: ''
    },
    legend: {
        data:['分析值','实际值']
    },
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
            boundaryGap : true,
            data : ['2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'实际值',
            type:'line',
            stack: '总量',
            color:'black',
            data:[4, 4, 3, 4, 5, 6, 5,4,3,2,1]
        },
        {
            name:'分析值',
            type:'line',
          	color:'yellow',
            stack: '总量',
            data:[5, 6, 7, 5, 6, 7, 7.5,8,8.5,8,7.5,9]
        }
    ]
};