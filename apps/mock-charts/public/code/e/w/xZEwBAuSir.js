var option = {
    backgroundColor: 'black',
    color: ['#fedd29', '#eb6739', '#1cd3d8'],
    textStyle: {
        color: '#FFFFFF',
        fontSize: '10px'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        },
       // formatter: '全部 {c0}+{c1}+{c2}'+'Min<br/>{a0} {c0}Min<br />{a1} {c1}Min<br />{a2} {c2}Min<br />{b}'
        formatter: function(value) {
            var a0 = value[0].seriesName;
            var a1 = value[1].seriesName;
            var a2 = value[2].seriesName;
            var c0 = value[0].data;
            var c1 = value[1].data;
            var c2 = value[2].data;
            var sum = c0 + c1 + c2;
            var b = value[0].name;
            return '<span style="color: #0a080b">总数&nbsp;&nbsp;&nbsp;<span style="font-size:20px;color: #0a080b"><strong>' + sum + '</strong></span><span style="color: #0a080b">次</span><span class="test"><style>\n' +
            '.test{  border-bottom: 5px solid cyan; border-left: 5px solid transparent;border-right: 5px solid transparent;}\n' +
            '</style></span></br>' +
          '<span style="color: #BDBEC3">' +a0+ '&nbsp;&nbsp;&nbsp;</span><span style="font-size:20px;color: #0a080b"><strong>' + c0 + '</strong></span><span style="color: #0a080b">次</span></br>' +
            '<span style="color: #BDBEC3">' +a1+ '&nbsp;&nbsp;&nbsp;</span><span style="font-size:20px;color: #0a080b"><strong>' + c1 + '</strong></span><span style="color: #0a080b">次</span><br/>' +
            '<span style="color: #0a080b">' + b +'</span>';
        }
    },
    legend: {
        //orient:'vertical',
        left: '1%',
        data: ['故障', '报警', '巡检'],
        textStyle: {
            color: 'white'
        }
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        name: '(Min)',
        type: 'value',
        axisLine: {
            show: false
        },
        //刻度线是否显示
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
    }],
    xAxis: [{
        show: true,
        type: 'category',
        boundaryGap: true,
        data: [
            "周一",
            "周二",
            "周三",
            "周四",
            "周五"
        ],
        axisLine: {
            lineStyle: {
                // color: 'rgb(53,55,104)'
            }
        },
        //刻度线是否显示
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 45,
            show: true
        }
    }],
    series: [ {
            name: '故障',
            type: 'bar',
            stack: '总量',
            barWidth: '20px',
            data: [100, 212, 101, 120, 0]
        },
        {
            name: '报警',
            type: 'bar',
            stack: '总量',
            barWidth: '20px',
            data: [0, 232, 251, 10, 0]
        },
        {
            name: '巡检',
            type: 'bar',
            stack: '总量',
            barWidth: '20px',
            data: [0, 232, 231, 134, 190]
        }
    ]
};