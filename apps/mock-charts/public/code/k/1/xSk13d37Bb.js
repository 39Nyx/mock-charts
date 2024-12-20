var data = [{
    value:65,
    name: '工商个体户'
}, {
    value: 18,
    name: '工商企业'
}, {
    value: 5,
    name: '机关'
}, {
    value: 10,
    name: '事业单位'
}, {
    value: 2,
    name: '社会团体'
}];
option = {
        title: {
        text: '法人'
    },
    backgroundColor: 'rgba(255,255,255,0)',
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
        toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['工商个体户', '工商企业', '机关', '事业单位','社会团体']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['40%', '58%'],
        color: ['#AF89D6', '#59ADF3', '#FF999A', '#FFCC67','#FCC667','#CC5962'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }]
};