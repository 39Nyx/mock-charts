option = {
    //设置标题
    title: {
        text: '不等距折线图',
    },
    //设置鼠标移动到节点上时显示的内容
    tooltip: {
        trigger: 'item', //触发类型 'item' | 'axis' 
        formatter: function(params) { //内容格式器：
            var date = new Date(params.value[0]);
            data = date.getHours() + ':00';
            return "时间：" + data + '<br/>' + "数值：" + params.value[1];
        }
    },
    //设置图例，与折线名称相对应
    legend: {
        data: ['随机数值', 'jj']
    },
    //设置边框
    grid: {
        x: 40,
        y: 60,
        x2: 20,
        y2: 60
    },
    //设置横坐标
    xAxis: [{
        axisLabel: {
            textStyle: {
                color: '#333'
            },
            //设置x轴显示样式
            formatter: function(params) {
                var date = new Date(params);
                return date.getHours() + ":00";
            }
        },
        type: 'time',
        data: (function() {
            var d = [];
            var i = -1;
            while (i++ < 12) {
                d.push(new Date(2017, 9, 21, i, 0, 0));
            }
            return d;
        })(),
        min: new Date(2017, 9, 21, 0, 0, 0),
        max: new Date(2017, 9, 22, 0, 0, 0),
        splitLine: {
            show: true
        },
        splitNumber: 25
    }],
    //设置纵坐标
    yAxis: [{
        type: 'value',
        min: 0,
        max: 300
            // ,
            // splitLine:{show:false},
            // splitNumber:5
    }],
    //设置数据驱动
    series: [{
        name: '随机数值',
        type: 'line',
        smooth: true,
        data: [
            [new Date(2017, 9, 21, 2, 0, 0), '231'],
            [new Date(2017, 9, 21, 6, 0, 0), '12'],
            [new Date(2017, 9, 21, 9, 0, 0), '112'],
            [new Date(2017, 9, 21, 11, 0, 0), '112'],
            [new Date(2017, 9, 21, 13, 0, 0), '11'],
            [new Date(2017, 9, 21, 15, 0, 0), '12']

        ]
    }, {
        name: 'jj',
        type: 'line',
        smooth: true,
        data: [
            [new Date(2017, 9, 21, 2, 0, 0), '131'],
            [new Date(2017, 9, 21, 6, 0, 0), '212'],
            [new Date(2017, 9, 21, 9, 0, 0), '12'],
            [new Date(2017, 9, 21, 11, 0, 0), '212'],
            [new Date(2017, 9, 21, 13, 0, 0), '11'],
            [new Date(2017, 9, 21, 15, 0, 0), '12']

        ]
    }]
};