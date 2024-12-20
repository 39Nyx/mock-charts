var percentColor = '#ffc72b'; //百分比颜色
var innerColor = '#00eca8'; //绿色 
var innerColor = '#eb297d';//红色
var innerColor = '#fbcc56';//黄色
/*---------------------缩放----------------------------*/
option = {

    backgroundColor: '#031f2d',
    legend: {
        show: false
    },
    series: [
        //内圈圆环
        {
            name: 'Line 0',
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '55%'],
            radius: ['80%', '60%'],
            data: [{
                value: 10,
                name: '高等教育学',
               itemStyle:{
                normal:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#40d738' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2235d4' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
                label: {
                    normal: {
                        formatter: '{d}%',
                        position: 'center',
                        padding: [0, 0, 10, 0],
                        align: 'left',
                        show: true,
                        textStyle: {
                            color: percentColor
                        }
                    }
                }
            }, {
                value: 15,
                name: '错误',
                label:{
                    normal:{
                        show:false
                    }
                    
                },
                itemStyle: {
                    normal: {
                        color: "green"
                    }
                }
            }]
        }
    ],
};