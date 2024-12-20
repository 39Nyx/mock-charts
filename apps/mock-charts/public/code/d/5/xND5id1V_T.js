var data = {
    value: 76,
    name: '违章比'
};
option = {
    backgroundColor: '#0B2C6F',
    title: {
        text: '{num|' + data.value + '%}',
        subtext: '\n' + data.name,
        x: '49%',
        y: '49%',
        textAlign: 'center',
        textStyle: {
            rich: {
                num: {
                    fontWeight: '500',
                    color: '#00E4FF',
                    fontFamily: '微软雅黑',
                    fontSize: 75,
                },
            }

        },
        subtextStyle: {
            lineHeight: 30,
            fontSize: 40,
            color: '#fff',

        }
    },
    data: [{
        name: data.name,
    }],
    series: [{ // 主圆环
        name: data.name,
        type: 'pie',
        radius: ['65%', '80%'],
        center:['50%','60%'],
        startAngle: 180,
        endAngle: 0,

        color: [{
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0,
                color: 'rgba(45,246,242,.1)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgba(45,246,242,1)' // 100% 处的颜色
            }]
        }, 'transparent'],
        hoverAnimation: true,
        legendHoverLink: false,
        z: 10,
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 50 * data.value / 100
        }, {
            value: 100 - (50 * data.value / 100)
        }]
    }, { // 中间圈
        name: '',
        z: 5,
        type: 'pie',
        cursor: 'default',
        radius: ['95%', '95%'],
        center:['50%','60%'],
        startAngle: 180,
        hoverAnimation: false,
        legendHoverLink: false,
        labelLine: {
            normal: {
                show: false
            }
        },

        data: [{
            value: 50,
            itemStyle: {
                borderColor: '#2DF6F3',
                borderType: 'dashed',
                borderWidth: 2,
            }
        }, {
            value: 50,
            itemStyle: {
                color: 'transparent'
            }
        }]
    }]
};