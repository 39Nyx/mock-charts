option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['党员大会','支委会','党小组','党课']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'党员大会',
            type:'line',
            stack: '总量',
            itemStyle : {
                normal : {
                    color:function(params) {
                        if(params.value > 100) {
                            return "#73241e";
                        }
                        return "#00acea";
                    },
                    lineStyle: {
                        color: "#ea0018"
                    }
                }
            }, 
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'支委会',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'党小组',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'党课',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        }
    ]
};
