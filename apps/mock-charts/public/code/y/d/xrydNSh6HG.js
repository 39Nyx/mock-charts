option = {
    backgroundColor:'#ffffff',
    title: {
        text: '被检查主体信息统计'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['检查主体数','违法违规数','整改数']
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
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value',
        name: '主体数',
        min: 0,
        max: 3000,
        type: 'value'
    },
    series: [
         {
            name:'违法违规数',
            type:'line',
            
            stack: '总量',
            data:[200, 210, 220, 210, 230, 290, 310, 340, 340, 320, 300, 280, 250, 210],
            markPoint : {
                color:'red',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'整改数',
            type:'line',
            stack: '总量',
            data:[190, 210, 210, 207, 230, 275, 305, 336, 330, 310, 300, 278, 250, 210],
            markPoint : {
                color:'green',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        },
        {
            name:'检查主体数',
            type:'line',
            stack: '总量',
            data:[1422, 1522, 1622, 1422, 1522, 1122, 1422, 1322, 1422, 1352, 1022, 922, 822, 1222],
            markPoint : {
                color:'blue',
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
