const dataList = [
    {key:'邮件营销',value:[120, 132, 101, 134, 90, 230, 210]},
    {key:'联盟广告',value:[220, 182, 191, 234, 290, 330, 310]},
    {key:'视频广告',value:[150, 232, 201, 154, 190, 330, 410]}
    ]

option = {
    tooltip: {
        trigger: 'item',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
      
        {
            name: '星期',
            type: 'bar',
            data: [490, 446, 401, 522, 570, 890, 930]
        }
        
    ]
};
setTimeout(delay, 1000);

function delay() {
    myChart.on("click", function(param) {
    var selectedX=[]
    selectedX.push(param.name);
    console.log(param)
        
    option = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: selectedX
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
      
        {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
        },

       
    ]
};
            myChart.setOption(option, true);
     
    });
}