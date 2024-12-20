option = {
    backgroundColor:'#FFFFFF',
    title : {
        text: '日常监管覆盖情况统计',
        subtext: '2017年'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['检查数','违法违规数','发现问题数']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            //magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市']
        }
    ],
    yAxis : [
        {
            type: 'value',
           // name: '检查次数',
            min: 0,
            max: 4500,
            type : 'value'
        }
    ],
    series : [
        {
            name:'违法违规数',
            type:'bar',
            data:[1933, 1733, 1833, 1333, 1533, 1333, 1633, 1433, 1533, 993, 893,813,913,1013],
            markPoint : {
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
            name:'发现问题数',
            type:'bar',
            data:[2433, 2633, 2533, 2333, 2133, 2233, 2633, 2233, 2433, 1393, 1393,913,1213,1413],
            markPoint : {
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
            name:'检查数',
            type:'bar',
            data:[3533, 3233, 3433, 3333, 3233, 3333, 3133, 2933, 3033, 2630, 2430,2313,2713,2513],
            markPoint : {
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
