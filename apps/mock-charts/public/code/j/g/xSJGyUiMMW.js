var json = {
    data1: [123, 22]
}
var img = new Image();
img.src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497252934&di=816999706026790ef44132b0c8170fd9&imgtype=jpg&er=1&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140618%2F0008020912438078_b.jpg'

var labelTop = {
    normal: {
        color: {
            image: img
        }
    }
};
option = {
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['80%', '100%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: json.data1[0],
            name: '直接访问',
            itemStyle: {
                normal: {
                    color: '#ffad09'
                }
            }
        }, {
            value: json.data1[1],
            name: '邮件营销',
            itemStyle: labelTop
        }, ]
    }]
};

myChart.setOption(option);