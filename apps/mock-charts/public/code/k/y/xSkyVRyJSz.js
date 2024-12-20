app.title = '极坐标系下的堆叠柱状图';

var data = [
    [4700, 8000, 6292.857],
    [9300,39000,25772.73],
    [9800, 15900,12800],
    [12000,35000,19941.67],
    [5500, 12000, 6850],
    [8300, 20000, 12278.57],
    [8000, 14000, 10263.1],
    [15500,36000,25936.67],
    [11000, 36000,17354.55],
    [6000, 13000, 8819.12],
    [9300, 27800,15725],
    [11000, 19000, 15003.33],
    [4000, 8000,5937.5],
    [5500, 20000, 12199.74],
    [12100, 25000,17755.88],
    [4700, 25000, 8170.588]
];
var cities = ['新洲区', '武昌区', '青山区', '硚口区', '鄂州', '经开区', '江夏区', '江汉区', '江岸区', '黄陂区', '洪山区', '汉阳区', '汉南区', '东西湖区', '东湖高新区', '蔡甸区'];
var barHeight = 50;

option = {
    title: {
        text: '在武汉买房子有多贵？',
        subtext: '各城区房价（数据来源：https://www.numbeo.com）'
},
    toolbox: {
　　show: true,
　　feature: {
　　　　saveAsImage: {
　　　　show:true,
　　　　excludeComponents :['toolbox'],
　　　　pixelRatio: 2
　　　　}
　　}
},
    legend: {
        show: true,
        data: ['价格范围', '均值']
    },
    grid: {
        top: 100
    },
    angleAxis: {
        type: 'category',
        data: cities
    },
    tooltip: {
        show: true,
        formatter: function (params) {
            var id = params.dataIndex;
            return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
        }
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: data.map(function (d) {
            return d[0];
        }),
        coordinateSystem: 'polar',
        stack: '最大最小值',
        silent: true
    }, {
        type: 'bar',
        data: data.map(function (d) {
            return d[1] - d[0];
        }),
        coordinateSystem: 'polar',
        name: '价格范围',
        stack: '最大最小值'
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: data.map(function (d) {
            return d[2] - barHeight;
        }),
        coordinateSystem: 'polar',
        stack: '均值',
        silent: true,
        z: 10
    }, {
        type: 'bar',
        data: data.map(function (d) {
            return barHeight * 2
        }),
        coordinateSystem: 'polar',
        name: '均值',
        stack: '均值',
        barGap: '-100%',
        z: 10
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};