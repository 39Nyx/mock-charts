app.title = '堆叠条形图';

option = {
    title: {
        text: 'bug模块分布',
      //  subtext: '虚构数据',
        left: 'center'
    },
    tooltip : {
        
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color:['#434348','#7cb5ec','#f7a35c','#90ed7d']  ,
    legend: {
        bottom:0,
        left: 'center',
        data: ['致命', '严重','一般','建议']
      
    },
    grid: {
        top:'10%',
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['注册','登录','个人中心','众测大厅','移动端','权限管理','组织架构']
    },
    series: [
        {
            name: '致命',
            type: 'bar',
            stack: '总量',
            
             barminWidth: 10,  //柱宽度
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2, 3, 1, 1, 0, 3, 2]
        },
        {
            name: '严重',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [7, 6, 2, 1, 3, 2, 4]
        },
        {
            name: '一般',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2, 6, 1, 4, 9, 5, 3]
        },
        {
            name: '建议',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [5, 2, 2, 4, 1, 3, 6]
        },
          
    ]
};