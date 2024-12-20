
var builderJson = {
    "charts": {
        "类目销售占比": 305,
        "库存跟踪记录": 442,
        "支付宝流水": 590,
        "订单商品明细": 662,
        "发货商品详情": 760,
        "调整单明细": 837,
        "商品进销存": 908,
        "退货商品明细": 1107,
        "采购退货出库": 1292,
        "订单管理": 1568
    },
    "components": {
        "电子面单": 210,
        "报表订单统计": 269,
        "退换货管理": 341,
        "API": 389,
        "新平台对接": 421,
        "库存管理": 532,
        "发货管理": 645,
        "配货管理": 987,
        "订单管理": 1211,
        "其他模块": 1541
    },
    "ie": 9743
};

var waterMarkText = 'ECHARTS';

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.height = 100;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.globalAlpha = 0.08;
ctx.font = '20px Microsoft Yahei';
ctx.translate(50, 50);
ctx.rotate(-Math.PI / 4);
ctx.fillText(waterMarkText, 0, 0);

option = {
    backgroundColor: {
        type: 'pattern',
        image: canvas,
        repeat: 'repeat'
    },
    tooltip: {},
    title: [{
        text: '四周创建量',
        x: '25%',
        textAlign: 'center'
    }, {
        text: '四周驳回量',
        x: '75%',
        textAlign: 'center'
    }],
    // grid: [{
    //     top: 50,
    //     width: '50%',
    //     bottom: '45%',
    //     left: 10,
    //     containLabel: true
    // }, {
    //     top: '55%',
    //     width: '50%',
    //     bottom: 0,
    //     left: 10,
    //     containLabel: true
    // }]
    // ,
   
        grid: [
        {x: '7%', y: '7%', width: '38%', height: '38%'},
        {x2: '7%', y: '7%', width: '38%', height: '38%'},
        // {x: '7%', y2: '7%', width: '38%', height: '38%'},
        // {x2: '7%', y2: '7%', width: '38%', height: '38%'}
    ],
    
    xAxis: [{
        type: 'value',
        max: builderJson.all,
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        max: builderJson.all,
        gridIndex: 1,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: Object.keys(builderJson.charts),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 1,
        type: 'category',
        data: Object.keys(builderJson.components),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.charts).map(function(key) {
            return builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
            normal: {
                color: '#eee'
            }
        },
        data: Object.keys(builderJson.charts).map(function(key) {
            return builderJson.all - builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'component',
        xAxisIndex: 1,
        yAxisIndex: 1,
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.components).map(function(key) {
            return builderJson.components[key];
        })
    }, {
        type: 'bar',
        stack: 'component',
        silent: true,
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#eee'
            }
        },
        data: Object.keys(builderJson.components).map(function(key) {
            return builderJson.all - builderJson.components[key];
        })
    }, ]
}