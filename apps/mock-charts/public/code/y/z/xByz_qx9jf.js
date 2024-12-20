option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'custom',//类型为自定义series
        coordinateSystem: 'cartesian2d',//定义坐标系,
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        renderItem(params, api) {
            //const [start, end]此为用户传入的一组设置范围
            let react1 = [800, 1500]
            react1 = react1[0] > react1[1] ? react1 : react1.reverse()//抽离出函数，对用户传入的每组数据都进行处理
            //拿到用户传入的起止数据在当前坐标系中转换成为屏幕上的点的像素值
            const rect1start = api.coord([0, react1[0]])
            const rect1end = api.coord([0, react1[1]])
            
            const rect2start = api.coord([0, 200])
            const rect2end = api.coord([0, 600])
            
            return {
            type: 'group',
            children: [{
                type: 'rect',
                shape: {
                    x: rect1start[0],
                    y: rect1start[1], 
                    width: 600, 
                    height: rect1end[1] - rect1start[1]
                },
                style: {
                    fill: 'rgba(0,0,255,0.1)'
                    }
            },{
                type: 'rect',
                shape: {
                    x: rect2start[0],
                    y: rect2end[1], 
                    width: 600, 
                    height: rect2start[1] - rect2end[1]
                },
                style: {
                    fill: 'rgba(255,0,0,0.1)'
                    }
            }
            ]
        }
        }
    },
    {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }
    ]
};