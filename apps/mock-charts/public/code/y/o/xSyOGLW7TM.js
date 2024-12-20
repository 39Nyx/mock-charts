option = {
    title: {
        text: '各学院人数分布（单位:人）',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjQH99che'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['各学院',]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['传媒', '体育', '信息技术', '化学', '历史文化', '外国语','政法','教育科学','数学','文学','旅游与地理科学','物理', '环境科学与工程','生命科学','管理','经济','美术','计算机','音乐']
    },
    series: [
        {
           
            type: 'bar',
            data:  [516, 204, 175, 156, 114, 335, 176,  381,180, 200, 210, 156, 163, 145, 309, 234, 375, 256,120]
        }
    ]
};
