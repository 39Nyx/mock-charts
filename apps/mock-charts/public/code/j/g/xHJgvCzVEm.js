var data = [{
            value1: '20',
            cost1: '4',
            early: 6,
            
        }, {
            value1: '15',
            cost1: '4',
            early: 6,
            
        }, {
            value1: '18',
            cost1: '4',
            early: 6,
            
        }, {
            value1: '10',
            cost1: '4',
            early: 6,
            
        },{
            value1: 13,
            cost1: 4,
            early: 6,
            
        },{
            value: 13,
            cost: 4,
            early: 6,
          
        },{
            value: 14,
            cost: 4,
            early: 6,
            
        },{
            value: 13,
            cost: 4,
            early: 6,
            
        },{
            value: 16,
            cost: 4,
            early: 6,
            
        },{
            value: 25,
            cost: 4,
            early: 6,
           
        },{
            value: 21,
            cost: 4,
            early: 6,
            
        },{
            value: 14,
            cost: 4,
            early: 6,
           
        }
        ]

option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        padding: 10,
        formatter: function(params) {
            return params.name + '</br>' + '总&emsp;数：' + params.value1 + '</br>' + '待处理：' + params.data.cost1
        }
    },
    xAxis   : [
        {
        type : 'category',
        data: function () {
            var list = [];
            for(var i = 1;i<=12;i++){
                list.push(i+'月份');
            }
            return list;
        }()
        }
    ],
    yAxis : [
        {
           
            splitLine:{
                show:false
            },
            
        }
    ],
    grid: {
        x: 45,
        x2: 15,
        y: 35,
        y2: 35,
        backgroundColor:'#fff',
        borderWidth: 0
    },
    series: [{
        name: '指标',
        type: 'bar',
        barWidth: 20,
        itemStyle:{
            normal:{
                barBorderRadius: 5,
               color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#00b0ff'
                    }, {
                      offset: 0.8,
                      color: '#7052f4'
                    }], false)
            },
            emphasis:{
                barBorderRadius: 5
            }
        },
        data: data
    }]

};