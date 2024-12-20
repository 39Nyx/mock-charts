

var originData = [
    {
        income: 20078,
        strategyName: '其他',
        stage: '01',
        y: '初步接触',
        strategy: '00'
    },
    {
        income: 4760,
        strategyName: '其他',
        stage: '02',
        y: '沟通建议',
        strategy: '00'
    },
    {
        income: 18050,
        strategyName: '其他',
        stage: '03',
        y: '方案设计',
        strategy: '00'
    },
    {
        income: 4494.5,
        strategyName: '其他',
        stage: '04',
        y: '立项审批',
        strategy: '00'
    },
    {
        income: 2540,
        strategyName: '其他',
        stage: '05',
        y: '投标阶段',
        strategy: '00'
    },
    {
        income: 104.7,
        strategyName: '其他',
        stage: '06',
        y: '签约阶段',
        strategy: '00'
    },
    {
        income: 574,
        strategyName: '其他',
        stage: '07',
        y: '合同执行',
        strategy: '00'
    },
    {
        income: 1160,
        strategyName: '公开招投标',
        stage: '01',
        y: '初步接触',
        strategy: '01'
    },
    {
        income: 6330,
        strategyName: '公开招投标',
        stage: '02',
        y: '沟通建议',
        strategy: '01'
    },
    {
        income: 27820,
        strategyName: '公开招投标',
        stage: '03',
        y: '方案设计',
        strategy: '01'
    },
    {
        income: 17813.9,
        strategyName: '公开招投标',
        stage: '04',
        y: '立项审批',
        strategy: '01'
    },
    {
        income: 10480,
        strategyName: '公开招投标',
        stage: '05',
        y: '投标阶段',
        strategy: '01'
    },
    {
        income: 2075.5,
        strategyName: '公开招投标',
        stage: '06',
        y: '签约阶段',
        strategy: '01'
    },
    {
        income: 5889.4,
        strategyName: '公开招投标',
        stage: '07',
        y: '合同执行',
        strategy: '01'
    },
    {
        income: 0,
        strategyName: '邀标',
        stage: '07',
        y: '合同执行',
        strategy: '02'
    },
    {
        income: 0,
        strategyName: '邀标',
        stage: '01',
        y: '初步接触',
        strategy: '02'
    },
    {
        income: 0,
        strategyName: '邀标',
        stage: '02',
        y: '沟通建议',
        strategy: '02'
    },
    {
        income: 950,
        strategyName: '邀标',
        stage: '03',
        y: '方案设计',
        strategy: '02'
    },
    {
        income: 45,
        strategyName: '邀标',
        stage: '04',
        y: '立项审批',
        strategy: '02'
    },
    {
        income: 270,
        strategyName: '邀标',
        stage: '05',
        y: '投标阶段',
        strategy: '02'
    },
    {
        income: 128,
        strategyName: '邀标',
        stage: '06',
        y: '签约阶段',
        strategy: '02'
    },
    {
        income: 0,
        strategyName: '单一来源采购',
        stage: '01',
        y: '初步接触',
        strategy: '03'
    },
    {
        income: 0,
        strategyName: '单一来源采购',
        stage: '02',
        y: '沟通建议',
        strategy: '03'
    },
    {
        income: 2338,
        strategyName: '单一来源采购',
        stage: '03',
        y: '方案设计',
        strategy: '03'
    },
    {
        income: 80,
        strategyName: '单一来源采购',
        stage: '04',
        y: '立项审批',
        strategy: '03'
    },
    {
        income: 1085,
        strategyName: '单一来源采购',
        stage: '05',
        y: '投标阶段',
        strategy: '03'
    },
    {
        income: 406,
        strategyName: '单一来源采购',
        stage: '06',
        y: '签约阶段',
        strategy: '03'
    },
    {
        income: 298,
        strategyName: '单一来源采购',
        stage: '07',
        y: '合同执行',
        strategy: '03'
    },
    {
        income: 0,
        strategyName: '竞争性谈判',
        stage: '04',
        y: '立项审批',
        strategy: '04'
    },
    {
        income: 0,
        strategyName: '竞争性谈判',
        stage: '05',
        y: '投标阶段',
        strategy: '04'
    },
    {
        income: 0,
        strategyName: '竞争性谈判',
        stage: '06',
        y: '签约阶段',
        strategy: '04'
    },
    {
        income: 0,
        strategyName: '竞争性谈判',
        stage: '01',
        y: '初步接触',
        strategy: '04'
    },
    {
        income: 100,
        strategyName: '竞争性谈判',
        stage: '02',
        y: '沟通建议',
        strategy: '04'
    },
    {
        income: 200,
        strategyName: '竞争性谈判',
        stage: '03',
        y: '方案设计',
        strategy: '04'
    },
    {
        income: 33.7,
        strategyName: '竞争性谈判',
        stage: '07',
        y: '合同执行',
        strategy: '04'
    },
    {
        income: 0,
        strategyName: '询价',
        stage: '01',
        y: '初步接触',
        strategy: '05'
    },
    {
        income: 0,
        strategyName: '询价',
        stage: '02',
        y: '沟通建议',
        strategy: '05'
    },
    {
        income: 0,
        strategyName: '询价',
        stage: '03',
        y: '方案设计',
        strategy: '05'
    },
    {
        income: 0,
        strategyName: '询价',
        stage: '04',
        y: '立项审批',
        strategy: '05'
    },
    {
        income: 0,
        strategyName: '询价',
        stage: '05',
        y: '投标阶段',
        strategy: '05'
    },
    {
        income: 0,
        strategyName: '询价',
        stage: '06',
        y: '签约阶段',
        strategy: '05'
    },
    {
        income: 0,
        strategyName: '询价',
        stage: '07',
        y: '合同执行',
        strategy: '05'
    },
    {
        income: 0,
        strategyName: '政府补贴',
        stage: '05',
        y: '投标阶段',
        strategy: '06'
    },
    {
        income: 0,
        strategyName: '政府补贴',
        stage: '06',
        y: '签约阶段',
        strategy: '06'
    },
    {
        income: 0,
        strategyName: '政府补贴',
        stage: '07',
        y: '合同执行',
        strategy: '06'
    },
    {
        income: 0,
        strategyName: '政府补贴',
        stage: '01',
        y: '初步接触',
        strategy: '06'
    },
    {
        income: 800,
        strategyName: '政府补贴',
        stage: '02',
        y: '沟通建议',
        strategy: '06'
    },
    {
        income: 100,
        strategyName: '政府补贴',
        stage: '03',
        y: '方案设计',
        strategy: '06'
    },
    {
        income: 6700,
        strategyName: '政府补贴',
        stage: '04',
        y: '立项审批',
        strategy: '06'
    },
    {
        income: 0,
        strategyName: 'PPP',
        stage: '01',
        y: '初步接触',
        strategy: '07'
    },
    {
        income: 0,
        strategyName: 'PPP',
        stage: '02',
        y: '沟通建议',
        strategy: '07'
    },
    {
        income: 0,
        strategyName: 'PPP',
        stage: '03',
        y: '方案设计',
        strategy: '07'
    },
    {
        income: 0,
        strategyName: 'PPP',
        stage: '04',
        y: '立项审批',
        strategy: '07'
    },
    {
        income: 0,
        strategyName: 'PPP',
        stage: '05',
        y: '投标阶段',
        strategy: '07'
    },
    {
        income: 0,
        strategyName: 'PPP',
        stage: '06',
        y: '签约阶段',
        strategy: '07'
    },
    {
        income: 0,
        strategyName: 'PPP',
        stage: '07',
        y: '合同执行',
        strategy: '07'
    },
    {
        income: 0,
        strategyName: '直接签约',
        stage: '01',
        y: '初步接触',
        strategy: '08'
    },
    {
        income: 0,
        strategyName: '直接签约',
        stage: '02',
        y: '沟通建议',
        strategy: '08'
    },
    {
        income: 0,
        strategyName: '直接签约',
        stage: '04',
        y: '立项审批',
        strategy: '08'
    },
    {
        income: 536,
        strategyName: '直接签约',
        stage: '03',
        y: '方案设计',
        strategy: '08'
    },
    {
        income: 500,
        strategyName: '直接签约',
        stage: '05',
        y: '投标阶段',
        strategy: '08'
    },
    {
        income: 61.9,
        strategyName: '直接签约',
        stage: '06',
        y: '签约阶段',
        strategy: '08'
    },
    {
        income: 40.2,
        strategyName: '直接签约',
        stage: '07',
        y: '合同执行',
        strategy: '08'
    }
];
var zeroSymbol = 'path://M275.4324649926712,11.016971593238729 L313.4325555220882,11.016971593238729 L313.4325555220882,383.0169422244129 L275.4324649926712,383.0169422244129 L275.4324649926712,11.016971593238729 z';
var symbol = 'diamond';


var yNames = [];
var xNames = [];

var seriesMap = {};

_.each(originData, function (item) {
    if (yNames.indexOf(item.y) < 0) {
        yNames.push(item.y);
    }
    if (xNames.indexOf(item.strategyName) < 0) {
        xNames.push(item.strategyName);
    }

    seriesMap[item.y] = seriesMap[item.y] || {
        name: item.y,
        dataMap: {}
    };

    seriesMap[item.y].dataMap[item.strategyName] = item.income;
});

var series = [];

_.each(seriesMap, function (seriesItem) {

    var data = [];

    _.each(xNames, function (x) {
        var value = seriesItem.dataMap[x] || 0;
        var item = {
            name: seriesItem.name,
            value: [
                xNames.indexOf(x), yNames.indexOf(seriesItem.name),
                value
            ]
        };

        if (value <= 0) {
            item.symbol = zeroSymbol;
            item.symbolSize = [2,5];
            item.itemStyle={
                normal:{
                    color:'#517ed1'
                }
            }
        }
        data.push(item);
    });

    series.push({
        name: seriesItem.name,
        type: 'scatter',
        data: data,
        symbol: symbol,
        symbolSize: function (val) {
            return Math.pow(val[2], 0.25);
        }
    });
});




console.log(seriesMap);
console.log(series);
option = {
    title: {
        text: 'Punch Card of Github',
        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
    },

tooltip:{
    show:true
},
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: xNames,
        boundaryGap: false,
        axisLine: {
            lineStyle:{
                type:'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: yNames,
         axisLine: {
            lineStyle:{
                type:'dashed'
            }
        }
    },
    series: series
};