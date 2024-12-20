options = [{
    backgroundColor:'#FFFFFF',
    title: {
        text: '日常监管覆盖情况分析',
        subtext: '2017年'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            //magicType: {show: true, type: ['stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data: ['提供主体数','检查主体数']
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
         data : ['南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市']
    }],
    yAxis: [{
        type: 'value',
        //name: '投诉举报数',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '提供主体数',
        type: 'bar',
        itemStyle:{
            normal:{color:'#01949B'},
        },
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
            },
        data: [2031, 1793, 3640, 2593, 4377,3201, 2275, 3289, 3356,2859,4244,3945]
    }, {
        name: '检查主体数',
        type: 'bar',
        itemStyle:{
            normal:{color:'#EBA954'},
        },
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
            },
        data: [1043, 1456, 1900, 1200, 2100,1870, 980, 1569, 1130, 1490,2300, 2210]
    }]
},{
    backgroundColor:'#FFFFFF',
    title: {
        text: '检查主体同比分析',
        subtext: '2017年'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['同比']
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
        data : ['南宁市','柳州市','桂林市','梧州市','北海市','防城港市','钦州市','贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市']
    },
    yAxis: {
        type: 'value',
        min: -30,
        max: 30,
        interval: 10,
    },
    series: [
         {
            name:'同比',
            type:'line',
            
            stack: '总量',
            data:[4.6, 3.7, 2.4, -4.4, 1.2, 3.2, 6, 3.2, -0.1, 2.4, 0.3, 2.1]
          
        }
    ]
}
];