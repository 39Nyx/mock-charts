
option = {
    backgroundColor:'#000',
    grid: {
        left: '0',
        right: '0',
        bottom: '3%',
        top:'6%',
        containLabel: true
    },
     tooltip: {
       
        formatter: "问题统计"+'<br>'+"{b0} : {c0}"
    },
    xAxis: [{
        type: 'category',
        data: ['绍兴市(本级)',
            '越城区',
            '柯桥区',
            '上虞区',
            '诸暨区',
            '嵊州市',
            '新昌县',
            '袍江开发区',
            '滨海新城',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(10,157,184,.5)",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            rotate:'40',
            textStyle: {
                color: "rgba(255,255,255,1)",
                fontFamily:'宋体',
                fontSize:12
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(10,157,184,.5)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show:false,
            lineStyle: {
                color: "rgba(37,42,76,1)",
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "rgba(255,255,255,1)",
                fontFamily:'宋体',
                fontSize:12
            }
        },
    }],
    series: [{
        type: 'bar',
        data: [14, 5, 19, 17, 25, 29, 11,4,17],
        barWidth: 15, //柱子宽度
        //barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: '#20dbfd',
                opacity: 1,
            }
        }
    }]
};