app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        data: ['周一'],
        show:false
    },
    yAxis: {
        type: 'value',
        show:false
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            barWidth:30,
            label: {
                normal: {
                    show: true,
                    color:'#000',
                    formatter: function (data) { 
                        return data.seriesName+"："+data.data*100+"%"
                    },
                    position: 'insideRight',
                    offset:[100,0]
                }
            }, 
            data: [0.1]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量', 
            label: {
                normal: {
                    show: true,
                    color:'#000',
                    formatter: function (data) { 
                        return data.seriesName+"："+data.data*100+"%"
                    },
                    position: 'insideRight',
                    offset:[100,0]
                }
            }, 
            data: [0.1]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量', 
            label: {
                normal: {
                    show: true,
                    color:'#000',
                    formatter: function (data) { 
                        return data.seriesName+"："+data.data*100+"%"
                    },
                    position: 'insideRight',
                    offset:[100,0]
                }
            }, 
            data: [0.25]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量', 
            label: {
                normal: {
                    show: true,
                    color:'#000',
                    formatter: function (data) { 
                        return data.seriesName+"："+data.data*100+"%"
                    },
                    position: 'insideRight',
                    offset:[100,0]
                }
            }, 
            data: [0.3]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    color:'#000',
                    formatter: function (data) { 
                        return data.seriesName+"："+data.data*100+"%"
                    },
                    position: 'insideRight',
                    offset:[100,0]
                }
            }, 
            data: [0.25]
        }
    ]
};