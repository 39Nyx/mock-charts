var iData=60;//存放异步获取的数据

option = {
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.5],
        radius: '50%',
        //color: ['#49d088', '#38b470', '#2aaf66'],
        color: ['rgb(16,77,142)', 'rgb(8,104,207)'],
        waveAnimation: true,
        animationDuration: 0,
        animationDurationUpdate: 0,
        outline: {
            borderDistance: 0,
            itemStyle: {
                borderWidth: 2,
                borderColor: 'rgba(8,104,207)'
            }
        },
        label: { //容器内部字体
            normal: {
                formatter: function() {
                    return iData+'%';
                },//格式化输出 默认是百分比
                textStyle: {
                    fontSize: 30
                }
            }
        },
        backgroundStyle: {
            color: 'rgba(48,62,63,0.8)',
        }
    }]
};