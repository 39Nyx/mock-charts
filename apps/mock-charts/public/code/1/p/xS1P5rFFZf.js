var option = {
        title: {
            text: '北京十大网红店铺综合水平比较'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['口味', '环境', '服务'],
            align: 'right',
            right: 10
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['徐记烧饼铺', '天桥老金涮肉','成都一家人火锅', '烧虾师', '甘兎庵抹茶主题甜品店', '和府捞面', '萌心火辣串串香', '一点点', '中关村茶点','富华斋饽饽铺'],
            axisTick:{
                alignWithLabel:true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '得分',
            axisLabel: {
                formatter: '{value}'
            }
        }],
        series: [{
            name: '口味',
            type: 'bar',
            data: [8.7,9.1,9.1,8.3,8.3,8.2,9.0,8.0,7.7,8.7]
        }, {
            name: '环境',
            type: 'bar',
            data: [7.0,6.7,9.3,8.5,8.5,8.6,9.2,7.5,6.5,9.0]
        }, {
            name: '服务',
            type: 'bar',
            data: [7.7,8.1,9.0,8.1,8.5,8.4,9.2,8.1,6.2,9.0,]
        }]
    };