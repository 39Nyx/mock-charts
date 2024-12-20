var uploadedDataURL = '/asset/get/s/data-1639210432111-XxSyLp_Q_.json';
myChart.showLoading();
$.getJSON(uploadedDataURL, function (geoJson) {
    myChart.hideLoading();
    echarts.registerMap('China', geoJson);
    myChart.setOption(
        (option = {
            title: {
                text: '中国省会城市2019年GDP数据',
                left: 'center',
            },
            tooltip: {
                trigger: item,
                formatter: '地区:{b}<br/>GDP数据:{c}',
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {},
                },
            },
            visualMap: {
                min: 500,
                max: 40000,
                text: ['High', 'Low'],
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue', 'yellow', 'orangered'],
                    //color: ['#fffaa4','#54e346','#0e49b5']
                },
            },
            series: [
                {
                    name: 'GDP数据',
                    type: 'map',
                    mapType: 'China',
                    label: {
                        show: true,
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: 'transparent',
                            //borderColor: '#3fdaff',
                            borderColor: '#6155a6',
                            borderWidth: 1,
                            shadowColor: 'rgba(63, 218, 255, 0.5)',
                            //shadowBlur: 15
                        },
                        emphasis: {
                            areaColor: '#ffffff',
                        },
                    },
                    data: [
                        { name: '北京', value: 35371 },
                        { name: '成都', value: 17012 },
                        { name: '广州', value: 23629 },
                        { name: '贵阳', value: 4040 },
                        { name: '南宁', value: 4506 },
                        { name: '哈尔滨', value: 5249 },
                        { name: '海口', value: 1672 },
                        { name: '杭州', value: 15373 },
                        { name: '合肥', value: 9409 },
                        { name: '呼和浩特', value: 2791 },
                        { name: '济南', value: 9443 },
                        { name: '昆明', value: 6476 },
                        { name: '拉萨', value: 621 },
                        { name: '兰州', value: 2837 },
                        { name: '南昌', value: 5596 },
                        { name: '南京', value: 14030 },
                        { name: '福州', value: 9392 },
                        { name: '上海', value: 38155 },
                        { name: '沈阳', value: 6470 },
                        { name: '石家庄', value: 5810 },
                        { name: '太原', value: 4028 },
                        { name: '天津', value: 14104 },
                        { name: '乌鲁木齐', value: 3413 },
                        { name: '武汉', value: 16223 },
                        { name: '西安', value: 9321 },
                        { name: '西宁', value: 1359 },
                        { name: '银川', value: 1897 },
                        { name: '长春', value: 5904 },
                        { name: '长沙', value: 11574 },
                        { name: '郑州', value: 11589 },
                        { name: '重庆', value: 23606 },
                    ],
                },
            ],
        })
    );
});
