var datas = [{
    value: 335,
    name: '直接访问'
}, {
    value: 310,
    name: '邮件营销'
}, {
    value: 234,
    name: '联盟广告'
}, ];

function pieChartMaker(datas) {
    option = {
        title: {
            text: '某站点用户访问来源',
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: datas,
        }]
    };
    myChart.setOption(option);
};

pieChartMaker(datas);

//模拟数据发生变化
var newDatas = [{
    value: 500,
    name: '直接访问'
}, {
    value: 500,
    name: '邮件营销'
}, {
    value: 500,
    name: '联盟广告'
}, ];
//变化后再次调用图表生成的函数
pieChartMaker(newDatas);


