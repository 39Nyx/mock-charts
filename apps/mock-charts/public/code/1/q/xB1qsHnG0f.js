  //数据
    var colors = ['#1c479c','#21bdad'];
    var data1=['8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];
    var data2=[153,129,136,122,101];
    option = {
        backgroundColor: "#ffffff",
        color: colors,

        legend: {
            right: '5%',
            data: ['办理数', '待回复数']

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: data1,
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '办理数',
            type: 'bar',
            stack: '总量',
            barWidth: '20',
            data: [18, 18, 16, 7, 15, 9, 17, 15, 13,19]
        }, {
            name: '待回复数',
            type: 'bar',
            stack: '总量',
            barWidth: '20',
            data: [10, 8, 6, 13, 4, 9, 12, 11 , 10, 12]
        }]
    };