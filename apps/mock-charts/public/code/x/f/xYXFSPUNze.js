var data1 = [
    { value: 10, name: '智能水表' },
    { value: 10, name: '普通水表' },
];
var colorList = ['#17C075', '#EB973F'];

option = {
    title: {
        text: '智能水表\n占比',
        top: '30%',
        textAlign: 'center',
        left: '50%',
        textStyle: {
            color: ' #6A7474',
            fontSize: 32,
            fontWeight: '600',
            lineHeight: 60,
        },
        subtext: '50%',
        subtextStyle: {
            color: '#021C25',
            fontSize: 32,
            fontWeight: '600',
            lineHeight: 60,
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        bottom: '0%',
        left: '35%',
        textStyle: {
            fontSize: 14,
            color: 'black',
        },
        formatter: function (name) {
            const item = data1.filter((item) => item.name === name)[0];
            return `${name}：${item.value}个`;
        },
    },
    series: [
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'outside',
                    fontSize: '20',
                    formatter: function (params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < data1.length; i++) {
                            total += data1[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.name + '\n' + params.value + '个' + '\n' + '占百分比：' + percent + '%';
                        } else {
                            return '';
                        }
                    },
                },
            },
            labelLine: {
                show: false,
            },
            data: data1,
        },
    ],
};