option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLabel:{show:false},
        axisLine:{show:false},
        axisTick:{show:false},
        splitLine:{show:false},
    },
    yAxis: {
        type: 'category',
        axisLabel:{show:false},
        axisLine:{show:false},
        axisTick:{show:false},
        splitLine:{show:false},
        data: ['周一']
    },
    label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
           
            data: [320, ]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            
            data: [120, ]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            
            data: [220,]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            
            data: [150,]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            
            data: [82]
        }
    ]
};