

app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
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
    xAxis : [
        {
            type : 'category',
            data : ['山东', '广东', '江苏', '河北', '浙江', '河南', '四川', '辽宁', '湖南', '北京', '云南', '湖北', '山西', '安徽', '陕西', '福建', '内蒙古', '广西', '黑龙江', '江西', '吉林', '贵州', '天津', '新疆', '重庆', '甘肃', '宁夏', '海南', '青海', '西藏'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[1351.83, 1292.68, 1070.12, 978.65, 976.99, 836.73, 676.09, 478.94, 457.79, 439.33, 429.86, 428.31, 414.68, 411.36, 386.02, 377.95, 334.9, 314.12, 299.11, 286.21, 275.21, 254.41, 234.68, 232.32, 231.64, 171.12, 88.87, 70.69, 63.12, 26.74]
        }
    ]
};