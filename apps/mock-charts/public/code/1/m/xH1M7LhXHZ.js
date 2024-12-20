var data = [{
    value:3,
    name: '科教文化用房'
}, {
    value: 9,
    name: '商业用房'
}, {
    value: 8,
    name: '工业用房'
}, {
    value: 10,
    name: '办公用房'
}, {
    value: 1,
    name: '集体宿舍'
}, {
    value: 67,
    name: '个人住宅'
}, {
    value: 2,
    name: '其它'
}];
option = {
        title: {
        text: '房屋'
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
        data: ['科教文化用房', '商业用房', '工业用房', '办公用房', '集体宿舍', '个人住宅','其它']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['40%', '58%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67','#FCC667','#CC5962'],

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