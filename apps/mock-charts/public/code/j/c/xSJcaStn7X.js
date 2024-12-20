var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40,0.3)',
    }
};

option = {
    backgroundColor: '#ccc',
    color: ['#ec5d57', '#f39019', '#51a7fa', '#e38980'],

    title: {
        text: '乔木林质量等级占比',
        x: 'center',
        top: '36%',
        textStyle: {
            color: '#fff'
        }
    },

    legend: {
        x: 'center',
        top: '92%',
        data: [{name:'质量好',textStyle:{color:'#fff'}}, {name:'质量中等',textStyle:{color:'#fff'}}, {name:'质量差',textStyle:{color:'#fff'}}]
    },
    series: [{
        name: '',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: dataStyle,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.name + '\n' + param.percent.toFixed(0) + '%';
                },
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data: [{
            value: 18.51,
            name: '质量好'
        }, {
            value: 68.45,
            name: '质量中等'
        }, {
            value: 13.04,
            name: '质量差'
        }]
    }]
};