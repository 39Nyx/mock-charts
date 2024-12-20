app.title = '气泡图';

var data = [
    [[100,100,'荷兰','大修'],[95,90,'丹麦','大修'],[93,69,'卢森堡','大修'],[91,71,'瑞士','大修'],[81,71,'德国','大修'],
    [58,91,'比利时','大修'],[78,58,'奥地利','大修'],[77,52,'瑞典','大修'],[83,49,'英国','大修'],[56,22,'捷克','大修'],
    [20,70,'西班牙','大修'],[49,38,'挪威','大修'],[38,42,'法国','大修'],[35,39,'意大利','大修'],[38,14,'芬兰','大修'],[21,21,'葡萄牙','大修']],
    [[2,51,'崇州','技改'],[2,239,'大邑','技改'],[5,271,'都江堰','技改'],[1,44,'官仓','技改'],[8,362,'简阳','技改'],[1,197,'简州','技改'],[6,376,'金堂','技改'],[6,554,'彭州','技改'],[4,261,'郫县','技改'],[1,89,'邛崃','大修'],[1,80,'调度','技改'],[6,455,'温江','技改'],[8,354,'新津','技改']]
];
var data_gq = [
    [[36,1464,'检修工区','大修'],[17,1027,'运维工区','大修'],[17,1240,'输电工区','大修'],[19,2720,'电缆工区','大修'],[10,1174,'配电工区','大修'],[3,89,'信通','大修']],
    [[13,760,'青白江','技改'],[19,1328,'新都','技改'],[25,4262,'检修工区','技改'],[1,961,'电缆工区','技改'],[5,330,'配电工区','技改'],[10,730,'输电工区','技改'],[12,1848,'信通','技改']]
];
option = {
    //backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
      //  offset: 0,
       // color: '#f7f8fa'
   // }, {
       // offset: 1,
       // color: '#cdd0d5'
    //}]),
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    title: {
        text: '欧洲各国中低压线路电缆化率对比',
        x: '30%',
        textAlign:'middle',
        textBaseline:'top'
    },  
     grid: [
        {x: '15%', y: '17%', width: '72%', height: '72%'},
        {x2: '4%', y: '17%', width: '44%', height: '72%'},
        {x: '7%', y2: '7%', width: '38%', height: '38%'},
        {x2: '7%', y2: '7%', width: '38%', height: '38%'}
    ],
    xAxis: [
        {gridIndex: 0,name:'低压电缆化率（\%）',nameLocation:'middle'},
       
      
    ],
    yAxis: [
        {gridIndex: 0,name:'中压电缆化率(\%)',nameLocation:'end'},
        
    ],
   // xAxis: {
       // name:"项目数量",
       // splitLine: {
         //   lineStyle: {
          //      type: 'dashed'
          //  }
        //}
   // },
   // yAxis: {
    //    name:"投资金额（万元）",
      //  splitLine: {
        //    lineStyle: {
          //      type: 'dashed'
        //    }
        //},
        //scale: true
   // },
    series: [{
        name: '大修',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return 3*Math.sqrt(data[1]);
        },
        label: {
            normal: {
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
                position: 'top'
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 20,
                shadowColor: 'rgba(120, 36, 50, 1.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    }, 
]
};