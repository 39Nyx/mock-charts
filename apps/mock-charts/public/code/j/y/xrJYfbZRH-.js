

var option = {
    title: {
        text: 'Echarts Color引申用法',
    },
    toolbox: {
        right: 20,
        feature: {
            saveAsImage: {},
            restore: {},
            dataView: {},
            dataZoom: {},
            magicType: {
                type: ['line', 'bar']
            },
            // brush: {},
        }
    },
    grid: [{
        show: false,
        left: 0,
        top: '10%',
        containLabel: true,
        width: '100%',
        height: '20%'
    }, {
        show: false,
        left: 0,
        top: '30%',
        containLabel: true,
        width: '100%',
        height: '20%'
    }, {
        show: false,
        left: 0,
        top: '50%',
        containLabel: true,
        width: '100%',
        height: '20%'
    }, {
        show: false,
        left: 0,
        top: '70%',
        containLabel: true,
        width: '100%',
        height: '20%'
    }, ],
    xAxis: [{
        gridIndex: 0,
        axisTick: {
            alignWithLabel: true
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }, {
        gridIndex: 1,
        axisTick: {
            alignWithLabel: true
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }, {
        gridIndex: 2,
        axisTick: {
            alignWithLabel: true
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }, {
        gridIndex: 3,
        axisTick: {
            alignWithLabel: true
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }, ],
    yAxis: [{
        gridIndex: 0,
    }, {
        gridIndex: 1,
    }, {
        gridIndex: 2,
    }, {
        gridIndex: 3,
    }, ],

    series: [{
        type: 'bar',
        name: '自定义纹理',
        xAxisIndex: 0,
        yAxisIndex: 0,
    
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        name: '渐变1',
   
        data: [20, 12, 11, 34, 20, 30, 10]
    }, {
        type: 'bar',
        xAxisIndex: 2,
        yAxisIndex: 2,
        name: '渐变2',
  
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        type: 'bar',
        xAxisIndex: 3,
        yAxisIndex: 3,
     
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        type: 'bar',
        xAxisIndex: 3,
        yAxisIndex: 3,
       
       
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};