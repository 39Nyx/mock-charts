
var months = [
    '2016/01/01','2016/01/02','2016/01/03','2016/01/04','2016/01/05',
    '2016/01/06','2016/01/07','2016/01/08','2016/01/09','2016/01/10',
    '2016/01/11','2016/01/12','2016/01/13','2016/01/14','2016/01/15',
];

// timeData = timeData.map(function (str) {
//     return str.replace('2009/', '');
// });

option = {
    title: {
        text: '产品多SKU价格&销量关联图',
        // subtext: '可以清晰看出不同SKU的价格、销量变化以及它们之间的关联关系',
        x: 'center'
    },
    tooltip: {
        confine: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            //animation: false
        }
    },
    legend: {
        data:['sku1、sku2', 'sku3、sku4','sku1&sku2', 'sku3&sku4'],
        x: 'left',
        top: '4%'
    },
    // toolbox: {
    //     feature: {
    //         dataZoom: {
    //             yAxisIndex: 'none'
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    dataZoom: [
        {
            show: true,
            realtime: true,
            // start: 30,---从30%开始显示
            // end: 70,---显示至70%
            startValue: months.slice(months.length-10, months.length-9)[0],
            endValue: months.slice(months.length-1, months.length)[0],
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            // start: 30,---从30%开始显示
            // end: 70,---显示至70%
            startValue: months.slice(months.length-10, months.length-11)[0],
            endValue: months.slice(months.length-1, months.length)[0],
            xAxisIndex: [0, 1]
        }
    ],
    grid: [{
        left: 50,
        right: 50,
        top: '10%',
        height: '35%'
    }, {
        left: 50,
        right: 50,
        top: '45%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: months
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: months,
            position: 'top'
        }
    ],
    yAxis : [
        {
            name : '价格',
            type : 'value'//,
            // max : 500
        },
        {
            gridIndex: 1,
            name : '销量',
            type : 'value',
            inverse: true
        }
    ],
    series : [
        {
            name:'sku1、sku2',
            type:'line',
            smooth: true,
            //symbolSize: 8,
            //hoverAnimation: false,
            data:[
              15.8,16,17,19,15,16,15,14,12,14,11,12,13,11,13
            ]
        },
        {
            name:'sku3、sku4',
            type:'line',
            smooth: true,
            //symbolSize: 8,
            //hoverAnimation: false,
            data:[
              null,null,null,16,14,11,18,11,16,13,12,11,15,16,17
            ]
        },
        {
            name:'sku1&sku2',
            type:'line',
            smooth: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data:[
              15.8,14,12,16,14,11,18,11,16,13,12,11,15,16,17
            ]
        },
        {
            name:'sku3&sku4',
            type:'line',
            smooth: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data:[
               null,null,null,0,2,8,8,18,1,0,1,20,25,16,10
            ]
        }
    ]
};