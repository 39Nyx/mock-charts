     option = {
    title: {
        text: '2013/9-2017/5消费'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['2013','2014','2015','2016','2017']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'2013',
            type:'line',
            stack: '总量',
            data:[0,0,0,0,0,0,0,0,290,262,272,291]
        },
        {
            name:'2014',
            type:'line',
            stack: '总量',
            data:[243,158,297,258,280,289,248,0,228,279,185,212]
        },
        {
            name:'2015',
            type:'line',
            stack: '总量',
            data:[281,0,261,229,176,323,298,62,327,276,303,334]
        },
        {
            name:'2016',
            type:'line',
            stack: '总量',
            data:[113,169,322,351,394,139,197,226,320,237,239,365]
        },
        {
            name:'2017',
            type:'line',
            stack: '总量',
            data:[177,103,173,116,0,0,0,0,0,0,0,0]
        }
    ]
};