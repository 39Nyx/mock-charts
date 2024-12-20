option = {
    title : {
        text: '补贴发放金额',
        subtext: '虚拟数据'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['申请金额']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
             name: '年份',
            type : 'category',
            data : ['2014年','2015年','2016年','2017年']
        }
    ],
    yAxis : [
        {
             name: '申请金额(元)',
            type : 'value'
        }
    ],
    series : [
        {
            name:'申请金额',
            type:'bar',
            barWidth: '30%',
            data:[67000, 53000, 81000, 92000,],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },

    ]
};
