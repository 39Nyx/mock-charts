var color = ['#7049f0','#1b9afc','#3264ed','#01babc','#99da69','#49c995',];

option = {
    backgroundColor: '#141f56',
    color: color,
    title: {
        text: '负面信息分布',
        x: '20',
        y: '20',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#fff",
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}%"
    },
    legend: {
        left: '20',
        top: '100',
        width:'300',
        itemGap:20,
        textStyle: {
            color: '#fft'
        },
        data: ['学前教育', '义务教育', '高中教育', '高等教育', '教师队伍', '教学条件'],
    },
    series: [{
        name: '库存情况',
        type: 'pie',
        radius: '68%',
        center: ['50%', '50%'],
        clockwise: false,
        data: [{
            value: 3.9,
            name: '学前教育'
        }, {
            value: 23.9,
            name: '义务教育'
        }, {
            value: 7.2,
            name: '高中教育'
        }, {
            value: 23.3,
            name: '高等教育'
        }, {
            value: 16.9,
            name: '教师队伍'
        }, {
            value: 24.9,
            name: '教学条件'
        }],
        label: {
            normal: {
                show: false,
                textStyle: {
                    color: '#999',
                    fontSize: 14,
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
};