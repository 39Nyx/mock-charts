option = {
    backgroundColor:'#010E3A',
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#0199AD',
                width: '3'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#fff',
            fontSize: '24'
        },
        data: ['石家庄', '保定', '邢台', '沧州', '衡水', '邯郸']
    },
    yAxis: {
        show: true,
        name:'(万千伏安)',
        nameTextStyle:{
            color:'#fff',
            fontSize:24,
        },
        splitLine: {
            show: false
        },
         axisLabel: {
            show: true,
            color: '#fff',
            fontSize: '24'
        },
        axisLine: {
            lineStyle: {
                color: '#0199AD',
                width: '3'
            }
        }
    },
    series: [{
            name: 'leftA',
            type: 'bar',
            barWidth: 36,
            itemStyle: {
                normal: {
                    color: '#136B96',
                    barBorderRadius: [0, 0, 0, 0],
                    opacity: '1'
                }
            },
            data: [220, 182, 191, 234, 290, 330]
        },
        {
            name: 'rightA',
            tooltip: {
                show: false
            },
            type: 'bar',
            barWidth: 36,
            itemStyle: {
                normal: {
                    color: '#16C0C9',
                    barBorderRadius: [0, 0, 0, 0],
                    opacity: '1',
                    borderWidth: 1,
                    borderColor: '#00183F',
                }
            },
            data: [220, 182, 191, 234, 290, 330],
            barGap: 0
        },
        {
            name: 'topA',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#17C0C9',
                    borderWidth: 1,
                    borderColor: '#00183F',
                    opacity: '1',
                    shadowColor: 'rgb(0,0,0,0.1)',
                    shadowOffsetX: '0.5',
                    shadowOffsetY: '0.5'
                }
            },
            label: {
                show: true,
                color: '#04F9FD',
                offset: [0, 0],
                position: 'top',
                fontSize: '24',
                fontWeight: 'normal'
            },
            symbol: 'diamond',
            symbolRotate: 0,
            symbolSize: ['72', '40'],
            symbolOffset: ['0', '-20'],
            symbolPosition: 'end',
            data: [220, 182, 191, 234, 290, 330],
            z: 3
        },
        
    ]
};