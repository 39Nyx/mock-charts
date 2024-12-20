option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [
        {
            name: '中国',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            center: [116.46, 39.92],
            zoom: 2.5,
            left: '-10%',
            top: '25%',
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#fff'
                }
            },
            data:[
                {name:'北京', selected:true}
            ]
        }
    ]
};