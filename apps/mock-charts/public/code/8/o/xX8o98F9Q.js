option = {
    color: ['#7ccfff'],
    backgroundColor: '#1b2661',
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle: {
            fontSize: 18
        },
        formatter: function(params) {
            let {
                name,
                value
            } = params[0]
            return name + ':' + value + '人'
        }
    },
    angleAxis: {
        type: 'category',
        data: [
            '村（社区）党员',
            '机关',
            '国有企业',
            '“两新”组织',
            '事业单位',
            '学校',
            '其他'
        ],
        z: 20,
        axisLabel: {
            fontSize: 20,
            color: '#fff'
        },
        axisLine: {
            lineStyle: {
                color: '#3F4476'
            }
        },
    },
    radiusAxis: {
        axisLabel: {
            fontSize: 20,
            color: '#fff',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#3F4476'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#3F4476'
            }
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: '66%'
    },
    series: [{
        type: 'bar',
        barWidth: 26, //柱图宽度
        barGap: '-50%', //柱图间距
        data: [10, 20, 30, 40, 50, 60, 70],
        coordinateSystem: 'polar'
    }]
};