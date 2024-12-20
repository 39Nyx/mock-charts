option = {
    title : {
        text: '流量压力对比分布',
        subtext: '模拟数据-四川九门科技'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['输配流量','输差量']
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
            type : 'category',
            data : ['1段','2段','3段','4段','5段','6段','7段','8段','9段','10段','11段','12段','21段','22段','23段','24段','25段','26段','27段','28段','29段','210段','211段','212段','101段','102段','103段','104段','105段','106段','107段','108段','109段','110段','111段','112段']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'输配流量',
            type:'bar',
            data:[102.6, 101.0, 100.4, 99.3,98.0, 97.9, 96.0, 95.2, 94.6, 90.7, 89.6, 88.2,87.7, 85.8, 82.0, 81.3, 79.6, 76.9, 75.0, 72.4, 68.7, 67, 65.6, 63.2,59.7, 58.8, 57.0, 56.3, 55.6, 53.9, 52.0, 51.4, 50.7, 49.7, 49.6, 49.2],
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
        {
            name:'输差量',
            type:'bar',
            data:[51.7, 52.8, 53.0, 54.3, 57.6, 58.9, 60.0, 61.4, 62.7, 64.7, 66.6, 67.2,68.7, 69.8, 71.0, 72.3, 73.6, 74.6, 76.0, 78.4, 80.7, 82.7, 83.6, 85.2,86.7, 88.8, 90.0, 91.3, 92.6, 94.9, 96.0, 97.4, 97.7, 98.7, 102.2, 103.2],
            markPoint : {
                data : [
                    {name : '最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '最低', value : 2.3, xAxis: 11, yAxis: 3}
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
