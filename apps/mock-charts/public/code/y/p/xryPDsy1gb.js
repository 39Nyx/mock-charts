app.title = '主要省份天然气省管网管输费统计图';

option = {
    color: ['#3398DB'],
    title: {
        text: '主要省份天然气省管网管输费统计图',
        left: '50%',
        textAlign: 'center'
    },
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
            data : ['山西', '广西', '江西','福建', '广东', '河北', '安徽', '内蒙古','浙江','海南','河南'],
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
            data:[0.385, 0.36, 0.35, 0.3, 0.27, 0.25, 0.21,0.205,0.19,0.175,0.17]
        }
    ]
};
