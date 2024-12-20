var data = [[
        {value:310, name:'直接访问'},
        {value:310, name:'邮件营销'}
    ],[
        {name: "name1",stack: "one1",data: [100]},
        {name: "name2",stack: "one1",data: [100]},
        {name: "name3",stack: "one1",data: [100]},
        {name: "name4",stack: "one1",data: [100]},
        {name: "name5",stack: "one1",data: [100]},
        {name: "name6",stack: "one1",data: [100]},
        {name: "name7",stack: "one1",data: [100]},
        {name: "name8",stack: "one1",data: [100]},
        {name: "name9",stack: "one2",data: [100]},
        {name: "name10",stack: "one2",data: [100]},
        {name: "name11",stack: "one2",data: [100]},
        {name: "name12",stack: "one2",data: [100]},
        {name: "name13",stack: "one2",data: [100]},
        {name: "name14",stack: "one2",data: [100]},
        {name: "name15",stack: "one2",data: [100]},
        {name: "name16",stack: "one2",data: [100]}
]]
var yAxis = ['Test1']
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: false,
        data: ['name1']     //该处如需要设置，请把data中的name取出修改即可
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        type: 'category',
        data: yAxis     //控制Y轴数量
    },
    xAxis: {
        type: 'value'
    },
    series: function(){
        var itemArr = [{
            type: 'pie',
            radius : '10%',
            startAngle: 0,
            labelLine: {
                show: false  
            },
            label: {
                show: false
            },
            center: ['50%', '20%'],
            data:data[0],
            color: ["red","blue"]
        }];    // 初始化圆形图     坐标可以根据实际情况调整
        
        for (var i = 0; i < data[1].length; i++) {
            var item = {
                name: data[1][i].name,
                type: 'bar',
                barMaxWidth: 120,
                barGap: 0,
                stack: data[1][i].stack,     //设置改数据属于哪一组
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: data[1][i].data
            }
        itemArr.push(item)
        }
        return itemArr
    }(),
};