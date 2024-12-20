option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['剧情', '奇幻', '爱情', '惊悚', '冒险', '动作', '喜剧', '科幻', '家庭']
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
            boundaryGap : false,
            data : ['2012','2013','2014','2015','2016']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'剧情',
            type:'line',
            stack: '总量',
            data:[568, 752, 801, 927, 1136]
        },
        {
            name:'奇幻',
            type:'line',
            stack: '总量',
            data:[70, 74, 94, 103, 148]
        },
        {
            name:'爱情',
            type:'line',
            stack: '总量',
            data:[201, 252, 287, 335, 407]
        },
        {
            name:'惊悚',
            type:'line',
            stack: '总量',
            data:[116, 135, 163, 160, 238]
        },
        {
            name:'冒险',
            type:'line',
            stack: '总量',
            data:[72, 76, 109, 120, 139]
        },
       {
            name:'动作',
            type:'line',
            stack: '总量',
            data:[129, 144, 181, 219, 277]
        },
	{
            name:'喜剧',
            type:'line',
            stack: '总量',
            data:[252, 327, 383, 510, 515]
        },
{
            name:'科幻',
            type:'line',
            stack: '总量',
            data:[50, 85, 107, 133, 154]
        },
{
            name:'家庭',
            type:'line',
            stack: '总量',
            data:[58, 75, 60, 72, 68]
        }
    ]
};