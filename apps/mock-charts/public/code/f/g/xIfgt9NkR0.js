option = {
    title: {
        text: '多维雷达',
        textStyle: {
            color: '#fff',
            align: 'center',
        },
        subtext: '成绩多维雷达'
    },
    backgroundColor: '#263988',
    color: ['#4C84FF', ' #13C2C2', '#9A47FF', '#F04864', '#FF884C', '#FACC14', '#2FC25B', '#66B5FF'],
    tooltip: {},
    legend: {
        data: ['朱小明', '球球'],
        show: true,
        bottom: 20,
        textStyle: {
            color: '#fff'
        },
    },
    radar: {
        splitLine: {
            lineStyle: {
                color: ['#fff', '#a00'], //一个一个圈的线条颜色
            }
        },
        splitArea: {
            areaStyle: {
                // color: ['#FF884C','#9A47FF']   //分隔区域颜色
            },
        },
        axisLine: {
            lineStyle: {
                color: 'orange' //轴颜色
            },
        },
        shape: 'polygon', //形状,支持 'polygon' 和 'circle'
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#898989',
                borderRadius: 3,
                padding: [3, 5, 5]
            }
        },
        indicator: [{
                name: '数学',
                max: 150
            },
            {
                name: '语文',
                max: 150
            },
            {
                name: '英语',
                max: 150
            },
            {
                name: '体育',
                max: 100
            },
            {
                name: '综合',
                max: 150
            },
        ],
        backgroundColor: 'red',
    },
    series: [{
        name: '朱小明 vs 球球',
        type: 'radar',
        // areaStyle: {normal: {}},   //显示面积  
        data: [{
                value: [148, 120, 136, 60, 120],
                name: '朱小明'
            },
            {
                value: [150, 60, 120, 100, 90],
                name: '球球'
            }
        ]
    }]
};