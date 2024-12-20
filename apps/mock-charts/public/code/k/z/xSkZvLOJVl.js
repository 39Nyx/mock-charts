var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10px',
        right: '10px',
        bottom: '100PX',
        containLabel: true
    },
    legend: {
        orient: 'vertical',
        bottom: '10px',
        itemHeight: 18,
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 14,
        },
        data: [{
            name: '沈阳保利医疗设备销售有限公司',
            icon: 'roundRect',
        }, {
            name: '沈阳金江朗力贸易有限公司',
            icon: 'roundRect',
        }, {
            name: '上海晋孝医疗科技有限公司',
            icon: 'roundRect',
        }]
    },
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '沈阳保利医疗设备销售有限公司',
        type: 'line',
        smooth: true,
        data: [120, 132, 101, 134, 90, 230]
    }, {
        name: '沈阳金江朗力贸易有限公司',
        type: 'line',
        smooth: true,
        data: [220, 182, 191, 234, 290, 330]
    }, {
        name: '上海晋孝医疗科技有限公司',
        type: 'line',
        smooth: true,
        data: [150, 232, 201, 154, 190, 300]
    }]
};