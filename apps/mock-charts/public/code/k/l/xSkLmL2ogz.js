var uploadedDataURL = "/asset/get/s/data-1511928186127-HyfYZhjgz.xlsx";



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
            data : ['山东济南', '广东广州', '江苏南京', '河北石家庄', '浙江杭州', '河南郑州', '四川成都', '辽宁沈阳', '湖南长沙', '北京', '云南昆明', '湖北武汉', '山西太原', '安徽合肥', '陕西西安', '福建福州', '内蒙古呼和浩特', '广西南宁', '黑龙江哈尔滨', '江西南昌', '吉林长春', '贵州贵阳', '天津', '新疆乌鲁木齐', '重庆', '甘肃兰州', '海南海口', '青海西宁', '西藏拉萨'],
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
            data:[90, 39, 57, 89, 57, 96, 64, 72, 61, 81, 30, 70, 62, 66, 58, 29, 43, 30, 70, 43, 66, 39, 70, 66, 57, 52, 22, 51, 26]
        }
    ]
};
