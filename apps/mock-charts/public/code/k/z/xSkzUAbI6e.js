var symbolSize = 10;

option = {
    tooltip: {
        formatter: function (params) {
            var data = params.data.value || [0, 0];
            console.log(params)
            return '权重: ' + data[1].toFixed(2) + '<br>' + 
                   '满意率: ' + data[0].toFixed(2);
        }
    },
    legend: [
        {
            left:"40%",
            data:['细分市场总体','竞品总体','本体']
        },
        {   
            orient: 'vertical',
            right:"1%",
            top:'10%',
            data:['外观','内饰','空间','动力']
        }
    ]
     ,
    grid: {
        left: '3%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        min: 0,
        max: 20,
        type: 'value',
        axisLine: {onZero: false}
    },
    yAxis: {
        min: 0,
        max: 40,
        type: 'value',
        axisLine: {onZero: false},
        axisLabel: {
            formatter: '{value}%'
        }
    },
    series: [
        {
            name:'外观',
            type: 'line',
            symbol:'roundRect',
            smooth: true,
            symbolSize: symbolSize,
            data: [
                {
                    name:'',
                    value:[3, 9],
                    symbol:'rect'
                }, {
                    name:'',
                    value:[4, 7],
                    symbol:'triangle'
                },{
                    name:'',
                    value:[6, 12],
                    symbol:'circle'
                }
            ]
        },
        {
            name:'外观',
            type: 'line',
            symbol:'roundRect',
            smooth: true,
            symbolSize: symbolSize,
            data: [
                {
                    name:'',
                    value:[5, 9],
                    symbol:'rect'
                }, {
                    name:'',
                    value:[9, 7],
                    symbol:'triangle'
                },{
                    name:'',
                    value:[20, 12],
                    symbol:'circle'
                }
            ]
        },
        {
            name:'内饰',
            type: 'line',
            symbol:'roundRect',
            smooth: true,
            symbolSize: symbolSize,
            data: [
                {
                    name:'',
                    value:[10, 12],
                    symbol:'rect'
                }, {
                    name:'',
                    value:[9, 16],
                    symbol:'triangle'
                },{
                    name:'',
                    value:[13, 19],
                    symbol:'circle'
                }
            ]
        },
        {
            name:'空间',
            type: 'line',
            symbol:'roundRect',
            smooth: true,
            symbolSize: symbolSize,
            data: [{
                    name:'',
                    value:[2, 12],
                    symbol:'rect'
                }, {
                    name:'',
                    value:[9, 16],
                    symbol:'triangle'
                },{
                    name:'',
                    value:[4, 22],
                    symbol:'circle'
                }
            ]
        },
        {
            name:'动力',
            type: 'line',
            symbol:'roundRect',
            smooth: true,
            symbolSize: symbolSize,
            data: [{
                    name:'',
                    value:[1, 12],
                    symbol:'rect'
                }, {
                    name:'',
                    value:[3, 16],
                    symbol:'triangle'
                },{
                    name:'',
                    value:[4, 19],
                    symbol:'circle'
                }]
        },
        {
            name:'细分市场总体',
            type: 'line',
            symbol:'circle',
            smooth: true,
            symbolSize: symbolSize,
            data: [],
            itemStyle: {
                normal: {
                    color: '#000000'
                }
            }
        },
        {
            name:'竞品总体',
            type: 'line',
            symbol:'rect',
            smooth: true,
            symbolSize: symbolSize,
            data: [],
            itemStyle: {
                normal: {
                    color: '#000000'
                }
            }
        },
        {
            name:'本体',
            type: 'line',
            symbol:'triangle',
            smooth: true,
            symbolSize: symbolSize,
            data: [],
            itemStyle: {
                normal: {
                    color: '#000000'
                }
            }
        }
    ]
};

var zr = myChart.getZr();


