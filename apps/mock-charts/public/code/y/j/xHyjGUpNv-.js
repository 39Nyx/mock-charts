option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#eef41e', '#ffc71b', '#ff8219', '#1d78fb', '#54bcce', '#5eeacb', '#85bd53'],
    series: [{
        name: '重点人员占比',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
            normal: {
                position: 'outside',
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                }
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 10,
                length2: 50,
                lineStyle: {
                    color: 'red'
                }
            }
        }
    }, {
        name: '重点人员占比',
        type: 'pie',
        radius: ['40%', '55%'],
        data: [{
            value: 335,
            name: '涉恐人员',
            label: {
                normal: {
                    position: 'outside',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    },
                    formatter:'{b}: {d}'
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 50,
                    lineStyle: {
                        color: '#6ececb',
                        shadowColor: 'rgba(110, 206, 203, 0.8)',
                        shadowBlur: 10
                    }
                }
            }

        }, {
            value: 310,
            name: '涉稳人员'
        }, {
            value: 234,
            name: '前科人员'
        }, {
            value: 135,
            name: '在逃人员'
        }, {
            value: 1048,
            name: '涉毒人员'
        }, {
            value: 251,
            name: '重点上访人员'
        }, {
            value: 147,
            name: '肇事肇祸精神病人'
        }]
    }]
};